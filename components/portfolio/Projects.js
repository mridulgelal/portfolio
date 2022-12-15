import Image from 'next/image';

export const Project = ({ name, image }) => (
  <div className="  flex mt-10 flex-col   rounded-xl drop-shadow-2xl ">
    <div>
      <Image
        className="rounded-xl"
        src={image}
        width="250"
        height="250"
        alt="project image "
      />
      <span className=" absolute  flex -mt-16  w-[250px]  z-10  opacity-0 hover:opacity-80  bg-cyan-100 rounded-lg text-black hover:bg-slate-500  hover:text-white  transition ease-in-out duration-300 ">
        <h4 className=" flex justify-center py-5 h-full w-full lowercase hover:scale-150">
          {name}
        </h4>
      </span>
    </div>
  </div>
);
