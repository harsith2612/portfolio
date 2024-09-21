import CardList from "./CardList";
import Developer from "./Developer";
import Footer from "./Footer";
import Headers from "./Headers";
import Intro from "./Intro";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className="">
        <Headers />
      </div>
      <div className="pt-4 ">
        <div className="md:flex md:items-center">
          <div className="md:w-[40%]">
            <Intro />
          </div>
          <div className="md:w-[60%]">
            <Developer />
          </div>
        </div>
      </div>
      <div className="pt-8">
        <Skills />
      </div>
      <div className="pt-10">
        <div className="flex flex-col justify-center space-y-8">
          <hr />
          <div className="flex  justify-center">
            <p className="text-xl font-medium">Projects Portfolio</p>
          </div>
        </div>

        <div className="">
          <CardList />
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Home;
