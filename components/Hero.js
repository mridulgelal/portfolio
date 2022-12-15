import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiFillBehanceCircle,
} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <>
      <div className=" text-center mt-2  " id="hero">
        <h2 className=" py-2 mt-1 pt-10 text-teal-600 font-medium  text-3xl">
          Mridul Gelal
        </h2>
        <h3 className=" text-xl py-1 ">Software Developer and Designer</h3>
        <p className="py-5 leading-8  max-w-xl mx-auto">
          Creating and propagating new ideas and exploring them more every
          passing day.
        </p>
        <div className="text-3xl flex justify-center gap-7 py-3 text-gray-600">
          <a href="#" className=" hover:scale-150">
            <AiFillLinkedin />
          </a>
          <a href="#" className=" hover:scale-150">
            <AiFillGithub />
          </a>
          <a href="#" className=" hover:scale-150">
            <AiFillBehanceCircle />
          </a>

          <a href="#" className=" hover:scale-150">
            <AiFillYoutube />
          </a>
          <a href="#" className=" hover:scale-150">
            <AiFillInstagram />
          </a>
          <a href="#" className=" hover:scale-150">
            <AiFillTwitterCircle />
          </a>
        </div>
        <motion.div className=" relative mx-auto bg-gradient-to-b from-teal-500 rounded-full h-80 w-80  overflow-auto ">
          <Image src={deved} alt="mree" className="object-cover h-80 z-0 " />
        </motion.div>
        <div className="flex justify-center items-center text-center mt-5">
          <div className=" flex justify-evenly items-center bg-gradient-to-t bg-cyan-500 h-8 w-20  rounded-2xl  animate-bounce hover:cursor-pointer">
            Resume
          </div>
        </div>
      </div>
    </>
  );
};
