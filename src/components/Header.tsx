import logoImg from "../assets/logo.svg";
import imageProfile from "../assets/image-avatar.png";
import { CartPopover } from "./CartPopover";
import { Sidebar } from "./Sidebar";

export function Header() {
  return (
    <header className="flex w-full p-6 justify-between">
      <div className="flex gap-4 items-center">
        <Sidebar />
        <img src={logoImg} alt="" />
      </div>
      <div className="flex gap-4 items-center">
        <CartPopover />
        <img className="w-8" src={imageProfile} alt="" />
      </div>
    </header>
  );
}
