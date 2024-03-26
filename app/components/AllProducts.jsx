// 'use client'
// onClick={() => handleCategoryClick("smartphones")}
import Image from 'next/image';
import Link from 'next/link';

const AllProducts = ({product}) => {
    console.log(product)
    const{title,price,thumbnail,brand,description,category}=product
    return (
        
        <div>
             <h2 className="text-sm lg:text-base mt-2">
            <Image 
            // className='w-[270px] h-[205px]'
            className='relative delay-150  bg-[#f8f8f8] bg-cover bg-center transition-all duration-3000 ease-in-out transform lg:w-[300px] h-[205px] lg:h-[310px] mb-5 '
            width={270}
            height={310}
            src={thumbnail}
            alt='thumbnail'
            />
          <Link href={`/products/${product.id}`}  className="text-base font-bold">
            {title}
          </Link>
          <Link href={`category/${category}`} className="text-[#919090] ml-3 ">
           {category}
          </Link>
        </h2>
        <p className="text-[#919090] text-sm ">{description}</p>

        <p className="text-rose-600 text-sm mt-4"><span className="text-[#919090] line-through">$205.00</span> {price}</p>
        </div>
    );
};

export default AllProducts;