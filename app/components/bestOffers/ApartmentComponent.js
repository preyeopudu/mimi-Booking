import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
const ApartmentComponent = () => {
  return (
    <div className=" bg-white rounded-xl p-3">
      <Image
        alt="location"
        width={30}
        height={30}
        className=" rounded-xl w-full object-cover h-36 mb-4"
        src="/images/bed.jpg"
      />
      <div>
        <p className=" font-bold my-3 text-base"> 7Seasons Apartments</p>
        <div className=" flex items-center gap-x-2 text-sm text-gray-500">
          <HiOutlineLocationMarker />
          <p>Kensington/ London</p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className=" font-bold text-md">
          $65,00{" "}
          <span className=" font-normal text-sm text-gray-600">/ night</span>
        </p>
        <div className=" h-8 rounded-lg w-8 border flex items-center justify-center">
          <AiOutlineHeart className=" text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default ApartmentComponent;
