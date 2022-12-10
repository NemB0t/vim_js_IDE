import { type NextPage } from "next";
import { Content } from "./components/content";
import Footer from "./components/footer";
import { Nav } from "./components/nav";


const Home: NextPage = () => {
  return (
    <div className="grid grid-rows-[3rem_auto_40px] h-screen">
        <Nav />
        <Content/>
        <Footer/>
    </div>
  );
};

export default Home;
