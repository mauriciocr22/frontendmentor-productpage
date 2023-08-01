import logoImg from "../assets/logo.svg";
import menuIcon from "../assets/icon-menu.svg";
import cartIcon from "../assets/icon-cart.svg";
import imageProfile from "../assets/image-avatar.png";

export function Header() {
  return (
    <header className="flex w-full p-6 justify-between">
      <div className="flex gap-4 items-center">
        <a className="h-[15px]" href="">
          <img className="w-4" src={menuIcon} alt="" />
        </a>
        <img src={logoImg} alt="" />
      </div>
      <div className="flex gap-4">
        <button>
          <img src={cartIcon} alt="" />
        </button>
        <img className="w-8" src={imageProfile} alt="" />
      </div>
    </header>
  );
}
