import StarYellow from "../components/Card/starYellow";
import { FiTruck } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { motion } from "framer-motion";
import Image from "next/image";
import Cup from "../public/cup.webp";
import Bud from "../public/bud.webp";
import Pipe from "../public/pipe.webp";
import Something from "../public/something.webp";
import Blue_cup from "../public/bluecup.webp";
import { useState } from "react";

export default function Home() {
  const [mainImage, setMainImage] = useState(Something);
  const [temp, setTemp] = useState(Cup);
  const [temp_2, setTemp_2] = useState(Pipe);
  const [temp_3, setTemp_3] = useState(Bud);
  const [temp_4, setTemp_4] = useState(Blue_cup);

  return (
    <div className="shadow-inner flex flex-col lg:flex-row font-gilroy">
      <div className="lg:h-[90vh] lg:w-1/2  overflow-hidden p-10">
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="w-full h-3/4 cursor-pointer flex justify-center items-center lg:items-stretch"
        >
          <Image src={mainImage} width={1000} alt="image_1" />
        </motion.div>
        <div className="w-full flex py-2 h-1/4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className=" mr-2 w-1/4 h-full cursor-pointer flex items-center lg:items-stretch justify-center"
            onClick={() => {
              setTemp(mainImage);
              setMainImage(temp);
            }}
          >
            <Image src={temp} width={1000} alt="image_2" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className=" mr-2 w-1/4 h-full cursor-pointer items-center lg:items-stretch flex justify-center"
            onClick={() => {
              setTemp_2(mainImage);
              setMainImage(temp_2);
            }}
          >
            <Image src={temp_2} width={1000} alt="image_3" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className=" mr-2 w-1/4 h-full cursor-pointer items-center lg:items-stretch flex justify-center"
            onClick={() => {
              setTemp_3(mainImage);
              setMainImage(temp_3);
            }}
          >
            <Image src={temp_3} width={1000} alt="image_4" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className="  w-1/4 h-full cursor-pointer items-center lg:items-stretch flex justify-center"
            onClick={() => {
              setTemp_4(mainImage);
              setMainImage(temp_4);
            }}
          >
            <Image src={temp_4} width={1000} alt="image_5" />
          </motion.div>
        </div>
      </div>

      {/* right section of the page */}
      <div className="lg:h-[90vh] lg:w-1/2 text-center lg:text-left ">
        <div className=" p-5">
          <h1 className="text-3xl font-bold ">Sustainability Starter Kit</h1>
          <p className="text-xs mt-3">
            This starter kit is all you need to start the revolution.
          </p>
        </div>
        <div className=" p-5 flex justify-center lg:justify-start">
          <StarYellow />
          <span className="font-gilroy ml-1 text-sm font-bold">(4.0)</span>
        </div>
        <div className=" p-5">
          <p className="text-4xl  font-bold">€10.99</p>
        </div>
        <div className="w-full flex text-left">
          <div className="w-1/2 p-5 text-xs ">
            <h4 className="font-bold text-xl">Consists of: </h4>
            <p>2 x Bamboo Straws</p>
            <p>1 x Plant Based Reusable Cup with 2 lids</p>
            <p>1 x Natural Loofah</p>
            <p>1 x Box of 50 Bamboo Cotton Eartips</p>
            <p>1 x Bamboo Toothbrush</p>
          </div>
          <div className="w-1/2 p-5 text-xs ">
            <h4 className="font-bold text-xl">Features: </h4>
            <ul className="list-disc text-left">
              <li>
                Govt Approved, Tested, and approved in TUV Rhineland, Germany
              </li>
              <li>100% recyclable and non-toxic</li>
              <li>Leak-Proof</li>
              <li>Odorless tasteless and doesnot react with hot beverages</li>
              <li>Lightweight</li>
              <li>Microwavable</li>
            </ul>
          </div>
        </div>
        <div>{/* Cart button  */}</div>
        <div className="mt-10 p-5 lg:mt-28 w-full">
          <a href="#" className="lg:px-24 p-5 bg-black font-bold text-white ">
            Buy Now
          </a>
          <a href="#" className="ml-5 lg:px-24 p-5 font-bold bg-[#D9D9D9] ">
            Add to Cart
          </a>
        </div>
        <div className=" p-5">
          <div className="mt-3">
            <div className="flex justify-center lg:justify-start items-center">
              <div className="text-2xl">
                <FiTruck />
              </div>

              <h2 className="font-extrabold ml-2">Free Delivery</h2>
            </div>
            <a href="#" className="underline text-xs">
              Enter your Postal code for delivery
            </a>
          </div>
          <div className="mt-5">
            <div className="flex  items-center justify-center lg:justify-start">
              <div className="text-2xl">
                <HiOutlineShoppingBag />
              </div>

              <h2 className="font-extrabold ml-2">Return Delivery</h2>
            </div>
            <a href="#" className="underline text-xs">
              Free return delivery before 30 days
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
