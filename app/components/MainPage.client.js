import BestOffer from "../sections/BestOffers";
import HeadingSection from "../sections/HeadingSection";
import SearchApartment from "../sections/SearchApartment";
import TrendingDestination from "../sections/TrendingDestinations.client";

const MainPage = () => {
  return (
    <div className=" h-full w-full mx-10 overflow-x-scroll">
      <HeadingSection />
      <SearchApartment />
      <TrendingDestination />
      <BestOffer />
    </div>
  );
};

export default MainPage;
