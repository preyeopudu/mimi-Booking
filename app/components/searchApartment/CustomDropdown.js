import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuListChecks } from "react-icons/lu";
import { BsPerson } from "react-icons/bs";
const iconMapping = {
  location: <HiOutlineLocationMarker />,
  checkin: <LuListChecks />,
  adults: <BsPerson />,
};

const CustomDropDown = ({ label, options, className, icon }) => {
  const dropdownIcon = iconMapping[icon];
  return (
    <div
      className={`flex gap-x-6 justify-between items-center text-gray-500 w-full ${className}`}
    >
      {dropdownIcon}
      <div className="relative flex-1">
        <select className="block w-full px-4 py-2 pr-12 leading-tight bg-white rounded-lg appearance-none focus:outline-none focus:shadow-outline">
          <option key={label} value={label}>
            {label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CustomDropDown;
