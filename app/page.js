import { Suspense } from "react";
import ShopCards from "./components/ShopCards.jsx";

export default function Home() {
  return (
    <Suspense  fallback={<h1>load</h1>}>

   <ShopCards/>
    </Suspense>
  );
}
