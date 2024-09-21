import Footer from "./Footer";
import Headers from "./Headers";
import Intro from "./Intro";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="">
      <div className="">
        <Headers/>
      </div>
      <div className=" md:space-x-5 md:space-y-28  md:my-20">
        <div className="flex justify-center mb-10">
          <p className="text-2xl font-bold underline">About Me</p>
        </div>
        <div className="md:flex  ">
            <div className="md:w-[50%]">
                <Intro/>
            </div>
            <div className="md:w-[50%]">
                <Skills/>
            </div>
        </div>
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
};

export default About;
