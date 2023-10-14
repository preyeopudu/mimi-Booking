import { BiPieChartAlt } from "react-icons/bi";
import { CgSearch } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
const HeadingSection = () => {
  return (
    <div className="bg-white justify-between px-6 rounded-xl    flex py-6 my-2">
      <div className="  flex items-center justify-between border-2 py-3 rounded-xl gap-x-3  px-3">
        <CgSearch className=" text-gray-500 text-xl" />
        <input className=" outline-none" placeholder="Search any things ..." />
      </div>

      <div className="flex items-center font-medium gap-x-4">
        <p>Saturday, may 3,2023</p>
        <div className="flex gap-x-2">
          <p className=" text-xs items-center bg-red-500 rounded-full h-6 w-6 flex justify-center text-white border border-red-300">
            3
          </p>
          <div className=" border-2 text-2xl p-2 rounded-xl">
            <IoMdNotificationsOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingSection;
