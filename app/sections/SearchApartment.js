import CustomDropDown from "../components/searchApartment/CustomDropdown";

const { default: Image } = require("next/image");
const options = [
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
  // Add more bedroom options as needed
];

const SearchApartment = () => {
  return (
    <div className="my-8 flex flex-col items-center relative">
      <Image
        className="w-full h-56 rounded-3xl object-cover"
        width={400}
        height={400} // Adjusted height to 400
        src="/images/bed.jpg"
        alt="Apartment"
      />
      <div className=" w-11/12 absolute bg-white rounded-3xl flex items-center p-4 -bottom-8">
        <CustomDropDown
          icon={"location"}
          label="Where Are You Going?"
          options={options}
        />
        <CustomDropDown
          icon={"checkin"}
          className={" border-l border-r px-3 mx-3"}
          label="Check-In Date"
          options={options}
        />
        <CustomDropDown
          icon={"adults"}
          label="How Many Adults?"
          options={options}
        />

        <button className=" bg-slate-600 text-white py-3 px-5 ml-6 rounded-2xl">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchApartment;
