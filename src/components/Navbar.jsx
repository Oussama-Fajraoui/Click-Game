import { SlSocialLinkedin, SlSocialGithub } from "react-icons/sl";
import Click from "../assets/click.gif";

function Navbar() {
  return (
    <div className="text-center text-white">
      <div className="flex justify-center items-center">
        <img src={Click} alt="" width="100px" />
      </div>
      <h1 className="text-4xl my-3">Click Game</h1>
      <div className="text-center flex justify-center my-4">
        <p className="text-md lg:w-1/2 ">
          Challenge your clicking capacity and also improve your gaming skills.
          Practice as much you can to become the king in your gaming community.
        </p>
      </div>
      <p className="uppercase text-xl">Follow my account</p>
      <div className="flex justify-center items-center text-4xl gap-2 my-2">
        <SlSocialLinkedin
          className="cursor-pointer hover:text-blue-600 transition-colors"
          onClick={(e) =>
            (window.location.href =
              "https://www.linkedin.com/in/oussama-fajraoui%E2%9C%94-59436b22b/")
          }
        />
        <SlSocialGithub
          className="cursor-pointer hover:text-[#333] transition-colors"
          onClick={(e) =>
            (window.location.href = "https://github.com/Oussama-Fajraoui")
          }
        />
      </div>
    </div>
  );
}

export default Navbar;