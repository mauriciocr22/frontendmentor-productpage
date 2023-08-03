import testImg from "../assets/image-product-1.jpg";
import minusIcon from "../assets/icon-minus.svg";
import plusIcon from "../assets/icon-plus.svg";
import cartIcon from "../assets/icon-cart.svg";

export function ProductInfo() {
  return (
    <div className="w-full">
      <img className="h-[300px] w-full object-cover" src={testImg} alt="" />
      <div className="py-4 px-5 flex flex-col gap-3">
        <span className="text-orange-400 font-bold text-[14px] ">
          SNEAKER COMPANY
        </span>
        <h1 className="font-bold text-[28px] leading-tight">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-gray-700">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-[28px]">$125.00</span>
            <span className="bg-orange-100 py-[1px] px-[6px] text-orange-500 font-bold rounded-md">
              50%
            </span>
          </div>
          <span className="font-bold text-gray-300 line-through">$250.00</span>
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
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#fff"
              fill-rule="nonzero"
            />
          </svg>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}
