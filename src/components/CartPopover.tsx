import { useState } from "react";
import cartIcon from "../assets/icon-cart.svg";

export function CartPopover() {
  const [isActive, setIsActive] = useState(false);

  const handleCartState = () => {
    setIsActive(!isActive);
  };

  console.log(isActive);

  return (
    <div className="md:relative inline-block h-[20px]">
      <button onClick={handleCartState}>
        <img src={cartIcon} alt="" />
      </button>
      {isActive && (
        <div className="flex absolute w-[95vw] h-[240px] left-1/2 -translate-x-1/2 top-[90px] my-0 mx-auto z-10 bg-white rounded-lg flex-col">
          <h1 className="p-4 font-bold">Cart</h1>
          <div className="flex border-t-[1px] border-gray-300 w-full h-full items-center justify-center">
            <span className="font-bold text-gray-400 text-sm">
              Your cart is empty.
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
