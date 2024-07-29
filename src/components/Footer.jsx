function Footer() {
  return (
    <footer className="bg-[#051C34] px-32 pt-6 pb-4 text-white  max-[1055px]:px-16 max-[900px]:px-8">
      <div
        className="grid grid-cols-6 gap-8 pt-4 pb-12 max-[1055px]:grid-cols-5 max-[900px]:grid-cols-4
       max-[670px]:grid-cols-2  max-[670px]:gap-y-12  max-[430px]:grid-cols-1"
      >
        <div className="col-span-2 flex flex-col gap-6 justify-start max-[670px]:col-span-1 max-[430px]:items-center">
          <span className="logo max-[430px]:pr-[120px] ">
            <img src="/landing-page/logo-footer.png" alt="logo" />
          </span>
          <div className="flex flex-row items-center gap-2">
            <span className="shrink-0">
              <img src="/footer/location.png" alt="location" />
            </span>
            <p className="w-[200px]">
              25566 Hc 1, Glenallen, Alaska, 99588, USA
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="shrink-0">
              <img src="/footer/call.png" alt="call" />
            </span>
            <p className="w-[200px] cursor-pointer">+603 4784 273 12</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <span className="shrink-0">
              <img src="/footer/sms.png" alt="call" />
            </span>
            <p className="w-[200px] cursor-pointer">rentcars@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-col justify-start max-[670px]:items-end max-[430px]:items-center">
          <h3 className="font-medium mb-6 text-white ">Our Product</h3>
          <div className="links flex flex-col  gap-2 max-[670px]:pr-6">
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Career
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">Car</span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Packages
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Features
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Priceline
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start max-[430px]:items-center">
          <h3 className="font-medium mb-6 text-white max-[430px]:pr-7">
            Resources
          </h3>
          <div className="links flex flex-col gap-2 ">
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Download
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Help Centre
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Guides
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Partner Network
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Cruises
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Developer
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start max-[670px]:items-end max-[430px]:items-center">
          <h3 className="font-medium mb-6 text-white whitespace-nowrap ">
            About Rentcars
          </h3>
          <div className="links flex flex-col gap-2">
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Why choose us
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Our Story
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Investor Relations
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Press Center
            </span>
            <span className="text-sm text-[#D6D6D6] cursor-pointer">
              Advertise
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-start max-[430px]:items-center">
          <h3 className="font-medium mb-6 text-white">Follow Us</h3>
          <div className="social-links flex flex-row items-center gap-3">
            <span className="cursor-pointer">
              <img src="/footer/facebook.png" alt="facebook" />
            </span>
            <span className=" cursor-pointer">
              <img src="/footer/instagram.png" alt="instagram" />
            </span>
            <span className="cursor-pointer">
              <img src="/footer/youtube.png" alt="youtube" />
            </span>
          </div>
        </div>
      </div>
      <div className="border w-full bg-[#575757]" />
      <div className="copyright pb-4 pt-8">
        <p className="text-[#D6D6D6]">
          Copyright {new Date().getFullYear()} ・ Rentcars, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
