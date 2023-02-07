import Image from "next/image";
import item from "../../public/item.webp";

import StarYellow from "./starYellow";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CardPage() {
  return (
    <Link
      href="/SustainabilityStarterKit"
      className=" w-screen  flex justify-center md:justify-start "
    >
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.99 }}
        className="w-[24rem] h-[24rem] bg-white m-5 shadow-md"
      >
        <div className=" p-2 ">
          <Image
            src={item}
            width={200}
            height={250}
            className="h-[14rem] w-full"
            alt="images"
          />
        </div>
        <div className="w-full h-1/3 ">
          <div className="flex  w-full justify-between h-1/3 p-2 items-center  ">
            <h1 className="font-extrabold text-base font-gilroy ">
              Sustainability Starter Kit
            </h1>

            <p className="font-sans text-base font-bold ">€10.99</p>
          </div>
          <div className="h-2/3 flex flex-col justify-center p-2 ">
            <p className="text-xs font-gilroy">
              This starter kit is all you need to start the revolution. Odorless
              tasteless and doesnot react with hot beverages.
            </p>
            <div className="mt-3 flex items-center">
              <StarYellow />
              <span className="font-gilroy ml-1 text-sm font-bold">(4.0)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
