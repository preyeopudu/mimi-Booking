import MainPage from "../components/MainPage";
import SideBar from "../components/sidebar/Sidebar";

const HomePage = () => {
  return (
    <div className=" flex bg-gray-200 w-full max-h-screen h-screen">
      <SideBar />
      <MainPage />
    </div>
  );
};

export default HomePage;
