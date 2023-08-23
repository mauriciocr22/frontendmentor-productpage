import { useEffect, useState } from "react";

import minusIcon from "../assets/icon-minus.svg";
import plusIcon from "../assets/icon-plus.svg";
import prevIcon from "../assets/icon-previous.svg";
import nextIcon from "../assets/icon-next.svg";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [count, setCount] = useState(0);

  const subCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const plusCount = () => {
    setCount(count + 1);
  };

  const previousSlide = () =>
    setCurrentSlide((currentSlide) =>
      product && currentSlide === 0
        ? product?.images.length - 1
        : currentSlide - 1
    );

  const nextSlide = () =>
    setCurrentSlide((currentSlide) =>
      product && currentSlide === product?.images.length - 1
        ? 0
        : currentSlide + 1
    );

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get("/products/1");

      setProduct(response.data);
    }

    fetchProduct();
  }, []);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden h-[300px]">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {product?.images.map((image, index) => (
            <img
              key={index}
              className="w-full object-cover relative"
              src={image.src}
              alt=""
            />
          ))}
        </div>

        <button
          onClick={previousSlide}
          className="flex absolute top-1/2 left-0 bg-white rounded-full h-8 w-8 items-center justify-center ml-2"
        >
          <img className="w-2 h-3" src={prevIcon} alt="" />
        </button>

        <button
          onClick={nextSlide}
          className="flex absolute top-1/2 right-0 bg-white rounded-full h-8 w-8 items-center justify-center mr-2"
        >
          <img className="w-2 h-3" src={nextIcon} alt="" />
        </button>
      </div>

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
          <button onClick={subCount}>
            <img src={minusIcon} alt="" />
          </button>
          <span className="font-bold">{count}</span>
          <button onClick={plusCount}>
            <img src={plusIcon} alt="" />
          </button>
        </div>
        <button className="flex bg-orange-500 p-4 rounded-md justify-center items-center gap-3 text-white font-bold text-sm">
          <CartIcon className="fill-white w-4 h-4" />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
