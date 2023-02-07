import Image from "next/image";
import Logo from "../../public/Logo.webp";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white text-black flex justify-around p-2 md:p-5 font-gilroy ">
      <div className="flex w-2/3 md:w-1/3 lg:w-2/3 items-center md:ml-5">
        <Image src={Logo} width={50}  />
        <Link href="/">
          <h1 className="ml-3 font-black text-3xl">Earthly</h1>
        </Link>
      </div>
      <div className=" w-1/3 md:w-2/3 lg:w-1/3 justify-around hidden md:flex  items-center">
        <Link href="/">
          <h3>Home</h3>
        </Link>
        <a href="#">
          <h3>Shop</h3>
        </a>
        <a href="#">
          <div>
            <h3>Get In Touch</h3>
          </div>
        </a>

        <a href="#">
          <div className="text-2xl bg-black text-white p-5 flex justify-center items-center">
            <AiOutlineShoppingCart />
          </div>
        </a>
      </div>
      <a href="#" className="blobk md:hidden">
        <div className="text-2xl bg-black text-white p-5 flex justify-center items-center">
          <AiOutlineShoppingCart />
        </div>
      </a>
    </nav>
  );
}
