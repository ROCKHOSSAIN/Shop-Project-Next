import products from "../../data/data";
import AllProducts from "./AllProducts";
// import ProductItem from "./[id]/ProductItem";

// import ProductItems from "../ProductItems/[id]/page";


const ShopCards = ({ product }) => {
  // console.log(product)
  return (
    <main>

      <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4 my-4 lg:my-10">

          {
            products?.map((product) => (
              <AllProducts key={product.id} product={product} />
            ))
          }
        </div >

      </section >
    </main>
  );
};

export default ShopCards;