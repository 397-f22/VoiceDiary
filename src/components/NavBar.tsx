import { useNavigate, useLocation } from "react-router-dom";
import { clsx } from "clsx";

const NavBar = () => {
  const location = useLocation();
  const isMemoriesPage = location.pathname.includes("memories");
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");
  const navigateToMemories = () => navigate("/memories");
  return (
    <div className="w-full text-center pb-5 border-b ">
      <h1 className="font-graduate text-primary text-4xl p-6">Voice Diary</h1>
      <div className="grid grid-cols-2 mx-10 gap-6">
        <button
          className={clsx(
            "px-6 py-2 bg-gray-200 font-mono text-black rounded-full",
            !isMemoriesPage && "bg-secondary text-white"
          )}
          onClick={navigateToHome}
        >
          Record
        </button>
        <button
          className={clsx(
            "px-6 py-2 bg-gray-200 font-mono text-black rounded-full",
            isMemoriesPage && "bg-secondary text-white"
          )}
          onClick={navigateToMemories}
        >
          Memories
        </button>
      </div>
    </div>
  );
};

export default NavBar;
