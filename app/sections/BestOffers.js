import ApartmentComponent from "../components/bestOffers/ApartmentComponent";

const BestOffer = () => {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <p className=" text-xl">Best Offers</p>
        <p>View All</p>
      </div>

      <div className=" mt-4 grid grid-cols-4 gap-x-10 ">
        <ApartmentComponent />
        <ApartmentComponent />
        <ApartmentComponent />
        <ApartmentComponent />
      </div>
    </div>
  );
};

export default BestOffer;
