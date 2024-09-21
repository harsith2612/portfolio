import CardList from "./CardList";
import Footer from "./Footer";
import Headers from "./Headers";

const Project = () => {
  return (
    <div className="mx-auto">
      <div className="">
        <Headers/>
      </div>
      <div className="min-h-screen ">
        <div className="pt-10">
          <div className="flex flex-col justify-center space-y-8">
            
            <div className="flex  justify-center pb-10 ">
              <p className="text-xl font-medium">Projects Portfolio</p>
            </div>
          </div>

          <div className="items-center">
            <CardList />
          </div>
        </div>
      </div>
      <div className="">
      <Footer />
      </div>
    </div>
  );
};

export default Project;
