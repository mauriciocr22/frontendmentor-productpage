import cartIcon from "../assets/icon-cart.svg";

export function CartPopover() {
  return (
    <div className="flex items-center">
      <label htmlFor="cartModal">
        <img src={cartIcon} />
      </label>
      <input
        type="checkbox"
        name="cartModal"
        id="cartModal"
        className="peer fixed appearance-none opacity-0"
      />
      <label
        htmlFor="cartModal"
        className="pointer-events-none invisible fixed inset-0 flex justify-center overflow-hidden overscroll-contain opacity-0 
                  transition-all duration-200 ease-in-out peer-checked:pointer-events-auto peer-checked:visible peer-checked:opacity-100 
                  peer-checked:[&>*]:translate-y-0 peer-checked:[&>*:scale-100] mt-[90px] z-10"
      >
        <div className="w-[95%] bg-white h-[16rem] rounded-lg shadow-2xl">
          <h1 className="font-bold p-4">Cart</h1>
          <div className="flex h-4/5 w-full border-t-[1px] items-center justify-center font-bold text-gray-400 ">
            Your cart is empty.
          </div>
        </div>
      </label>
    </div>
  );
}
