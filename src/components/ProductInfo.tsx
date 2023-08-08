import { useEffect, useState } from "react";

import minusIcon from "../assets/icon-minus.svg";
import plusIcon from "../assets/icon-plus.svg";
import { CartIcon } from "./icons/CartIcon";

import api from "../services/api";

interface FetchedProduct {
  id: number;
  company: string;
  title: string;
  desc: string;
  price: string;
  firstPrice: string;
  discount: string;
  images: {
    src: string;
  }[];
}

export function ProductInfo() {
  const [product, setProduct] = useState<FetchedProduct | undefined>();
  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get("/products/1");

      setProduct(response.data);
    }

    fetchProduct();
  }, []);

  // console.log(product);

  return (
    <div className="w-full">
      <img
        className="h-[300px] w-full object-cover"
        src={product && product.images[0].src}
        alt=""
      />
      <div className="py-4 px-5 flex flex-col gap-3">
        <span className="text-orange-400 font-bold text-[14px] ">
          {product && product.company}
        </span>
        <h1 className="font-bold text-[28px] leading-tight">
          {product && product.title}
        </h1>
        <p className="text-gray-700">{product && product.desc}</p>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[28px]">
              {product && product.price}
            </span>
            <span className="bg-orange-100 py-[1px] px-[6px] text-orange-500 font-bold rounded-md">
              {product && product.discount}
            </span>
          </div>
          <span className="font-bold text-gray-300 line-through">
            {product && product.firstPrice}
          </span>
        </div>
        <div className="flex w-full p-3 justify-between bg-gray-100 rounded-md">
          <button>
            <img src={minusIcon} alt="" />
          </button>
          <span className="font-bold">0</span>
          <button>
            <img src={plusIcon} alt="" />
          </button>
        </div>
        <button className="flex bg-orange-500 p-4 rounded-md justify-center items-center gap-3 text-white font-bold text-sm">
          {/* <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fill-rule="nonzero"
            />
          </svg> */}
          <CartIcon className="fill-white w-4 h-4" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
