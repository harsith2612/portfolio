import git from "../assets/github-icon.svg";
import linkedin from "../assets/linkedin.svg";
import leetcode from "../assets/leetcode.svg";
import instagram from "../assets/instagram.svg";
const Footer = () => {
  return (
    <div className="p-5 space-y-6">
      <hr />
      <div className=" flex justify-center">
        <p className="">Follow me</p>
      </div>
      <div className="flex justify-center">
        <div className="space-x-5">
          <button className="">
            <a href="https://github.com/harsith2612" target="_blank">
              <img className="w-6" src={git} alt="" />
            </a>
          </button>
          <button className="">
            <a
              href="https://www.linkedin.com/in/harshith-sarvottama-nayak-a919a0244/"
              target="_blank"
            >
              <img className="w-6" src={linkedin} alt="" />
            </a>
          </button>
          <button className="">
            <a
              href="https://leetcode.com/u/HarshithSNayak/"
              target="_blank"
            >
              <img className="w-6" src={leetcode} alt="" />
            </a>
          </button>
          <button className="">
            <a href="https://www.instagram.com/harshith_nayak1851/" target="_blank">
            <img className="w-6" src={instagram} alt="" />
            </a>
            
          </button>
        </div>
      </div>
      <div className="pb-5 flex justify-center">
        <p className="">© 2024 Harshith Nayak</p>
      </div>
    </div>
  );
};

export default Footer;
