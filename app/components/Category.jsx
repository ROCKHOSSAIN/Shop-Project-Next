import Image from "next/image";
import Link from "next/link";

const Category = ({category}) => {
    return (
        <div>
             <h2 className="text-sm lg:text-base mt-2">
            <Image 
            className='relative delay-150  bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform lg:w-[300px] h-[205px] lg:h-[310px] mb-5 '
            width={270}
            height={310}
            src={category.thumbnail}
            alt="thumbnail"
            />
          <span className="text-base font-bold">
            {category.title}
          </span>
          <span className="text-[#919090] ml-3 ">
           {category.category}
          </span>
        </h2>
        <p className="text-[#919090] text-sm ">{category.description}</p>

        <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> {category.price}</p>
        </div>
    );
};

export default Category;