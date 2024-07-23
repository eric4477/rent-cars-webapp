function NavBar() {
  return (
    <nav className="w-[85%] mx-auto py-10 flex items-center justify-between">
      <div className="logo flex items-center justify-center">
        <img src="/landing-page/logo.png" alt="logo" />
      </div>
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
            How it work
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500" href="#">
            Why choose us
          </a>
        </li>
      </ul>
      <div className="nav-buttons flex items-center gap-5">
        <button className="hover:text-blue-600">Sign in</button>
        <button
          className="px-8 py-2 bg-[#3379e9] rounded-lg text-white text-center 
        transition hover:bg-blue-600"
        >
          Sign up
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
