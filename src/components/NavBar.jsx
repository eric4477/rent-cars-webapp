import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons

function NavBar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="w-[85%] mx-auto py-10 flex items-center justify-between">
      <div className="logo flex items-center justify-center">
        <img src="/landing-page/logo.png" alt="logo" />
      </div>

      {/* Links for larger screens */}
      <ul className="links flex items-center gap-7 max-[1100px]:hidden">
        <li>
          <a className="hover:text-blue-500" href="#">
            Become a renter
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500" href="#">
            Rental deals
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500" href="#">
            How it works
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500" href="#">
            Why choose us
          </a>
        </li>
      </ul>

      {/* Nav Buttons for larger screens */}
      <div className="nav-buttons flex items-center gap-5 max-[1100px]:hidden">
        <button className="hover:text-blue-600">Sign in</button>
        <button
          className="px-6 py-2 bg-dark-blue rounded-lg text-white text-center 
          transition hover:bg-blue-600 max-[600px]:px-4"
        >
          Sign up
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className=" items-center gap-5 max-[1100px]:block hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}{" "}
          {/* Toggle between hamburger and close icons */}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40" // Overlay with black background and 50% opacity
          onClick={toggleMenu} // Click outside to close
        />
      )}

      {/* Mobile Menu with slide-in effect from the right */}
      <div
        className={`fixed top-0 right-0 w-[50%] max-[400px]:w-[80%] h-full bg-white z-50 flex flex-col items-center justify-start py-10 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } max-[1100px]:block hidden`}
      >
        {/* Close button inside the menu */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-5 text-black text-2xl"
        >
          <FaTimes />
        </button>

        <ul className="flex flex-col items-center gap-7 mt-10">
          <li>
            <a className="hover:text-blue-500 text-xl" href="#">
              Become a renter
            </a>
          </li>
          <li>
            <a className="hover:text-blue-500 text-xl" href="#">
              Rental deals
            </a>
          </li>
          <li>
            <a className="hover:text-blue-500 text-xl" href="#">
              How it works
            </a>
          </li>
          <li>
            <a className="hover:text-blue-500 text-xl" href="#">
              Why choose us
            </a>
          </li>
        </ul>

        {/* Sign in and Sign up buttons inside mobile menu */}
        <div className="mobile-nav-buttons mt-10 flex flex-col items-center gap-5">
          <button className="hover:text-blue-600 text-xl">Sign in</button>
          <button
            className="px-6 py-2 bg-dark-blue rounded-lg text-white text-center 
            transition hover:bg-blue-600 max-[600px]:px-4"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
