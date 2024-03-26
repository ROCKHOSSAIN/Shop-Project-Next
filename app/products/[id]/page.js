import products from "@/app/data/page";
import Image from "next/image";
import Star from "../../assets/svg/star.svg"
import ImageModel from "@/app/components/ImageModel";
import Link from "next/link";
const Products = ({ params }) => {
    console.log(params)
    const id = parseInt(params.id);
    const product = products?.find((product) => product.id === id)
    const { title, price, thumbnail, brand, description, images,category } = product
    return (
        <main className="h-screen">
            <section className="bg-[#fafaf2] h-full py-20">
                <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                    <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
                        <Image src={thumbnail} height={500} width={400} className="w-[400px] h-[500px] mx-auto object-cover" alt="" />
                        <div class="flex gap-4 mt-4">
                            {
                                images?.map((image) => (
                                    <ImageModel key={image} image={image} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full lg:w-5/12">
                        <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">{title}</h1>
                     <Link href={`category/${category}`} className="text-[#919090] my-3">{category}</Link>
                     {/* <span href={`category/${brand}`} className="text-[#919090] my-3">{brand}</span> */}
                        <div className="mt-3 flex items-center justify-start gap-1">
                            <Image width={20} height={20} src={Star} width="20px" alt="" />
                            <Image width={20} height={20} src={Star} width="20px" alt="" />
                            <Image width={20} height={20} src={Star} width="20px" alt="" />
                            <Image width={20} height={20} src={Star} width="20px" alt="" />
                            <Image width={20} height={20} src={Star} width="20px" alt="" />
                        </div>
                        <hr className="my-5 bg-black" />

                        <div>
                            <p className="my-3 ">
                                <span className="text-rose-600 opacity-60 line-through ">{price}</span>
                                <span className="ml-3 font-bold text-2xl">$205.00</span>
                            </p>
                        </div>
                        <div>
                            <p className="leading-7">
                                {description}
                            </p>

                            <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                Add To Cart - {price}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;