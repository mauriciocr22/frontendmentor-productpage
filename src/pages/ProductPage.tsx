import { Header } from "../components/Header";
import { ProductInfo } from "../components/ProductInfo";

export function ProductPage() {
  return (
    <div className="md:w-[1440px] md:my-0 md:mx-auto h-full">
      <Header />
      <ProductInfo />
    </div>
  );
}
