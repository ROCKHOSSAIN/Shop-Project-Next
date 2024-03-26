'use client'
import Category from "@/app/components/Category";
// import products from "@/app/data/page";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import products from "@/app/data/page";
import CustomLink from "@/app/utils/CustomLink";
import Search from "@/app/components/Search";

export default function Brand({ params }) {
  const [allCategory, setAllCategory] = useState(products);
  const { brand } = params;
  const pathName = usePathname()
  const setPathName = pathName.split('/')[2]

  useEffect(() => {
    if (pathName) {
      const filteredCategory = products.filter(product => product.category === setPathName);
      setAllCategory(filteredCategory);
    } else {
      setAllCategory(products);
    }
  }, [setPathName]);


  const handleCategoryClick = (category) => {

    if (category === "all") {
      console.log("yes")
      return setAllCategory(products)
    }
    const filteredCategory = products.filter((product) => product.category === category);
    setAllCategory(filteredCategory);
  };

  return (
    <main>
      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
        <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
          <Search />

          <button className="hover:border-b border-black block h-6 box-border mt-4" onClick={() => handleCategoryClick("all")}>All</button>

          <CustomLink
            path={"smartphones"}> <button className={'hover:border-b border-black block h-6 box-border mt-5'}
              onClick={() => handleCategoryClick("smartphones")}>Smartphones</button>
          </CustomLink>

          <CustomLink
            path={"laptops"}>  <button className="hover:border-b border-black block h-6 box-border mt-5"
              onClick={() => handleCategoryClick("laptops")}>Laptops</button>
          </CustomLink>

          <CustomLink
            path={"fragrances"}> <button className="hover:border-b border-black block h-6 box-border mt-5"
              onClick={() => handleCategoryClick("fragrances")}>Fragrances</button>
          </CustomLink>

          <CustomLink
            path={"skincare"}> <button className="hover:border-b border-black block h-6 box-border mt-5"
              onClick={() => handleCategoryClick("skincare")}>Skincare</button>
          </CustomLink>

          <CustomLink
            path={"groceries"}> <button className="hover:border-b border-black block h-6 box-border mt-5"
              onClick={() => handleCategoryClick("groceries")}>Groceries</button>
          </CustomLink>

        </div>
        <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
          {allCategory.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </section>
    </main>
  );
}
