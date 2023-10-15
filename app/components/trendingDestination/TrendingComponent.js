import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const TrendingComponent = () => {
  return (
    <div className=" min-w-[500px] bg-white gap-x-6 flex items-start p-6 rounded-3xl">
      <Image
        alt="location"
        width={30}
        height={30}
        className=" rounded-xl w-28 h-28"
        src="/images/paris.jpg"
      />

      <div className="flex flex-col">
        <div className=" w-full justify-between  flex items-start">
          <div className=" w-11/12 ">
            <div className="whitespace-normal">
              <p className=" font-medium text-lg">Montmartre, France</p>
              <p className=" my-1 text-sm text-gray-500 font-medium">
                Visiting the best tourist areas chosen by the audience
              </p>
              <p className=" font-medium text-lg">$450,0000,00</p>
            </div>
          </div>

          <div className="flex items-center gap-x-1">
            <AiFillStar className=" text-yellow-400" />
            <p>4/5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingComponent;
