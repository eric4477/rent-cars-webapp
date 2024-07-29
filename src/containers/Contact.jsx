function Contact() {
  return (
    <section>
      <div className="flex flex-row justify-between w-[85%] mx-auto max-[1100px]:flex-col">
        <div
          className="flex flex-col w-1/2 py-6 max-[1100px]:w-full max-[1100px]:items-center
         max-[1100px]:text-center  max-[1100px]:py-12"
        >
          <h1 className="text-5xl max-[1100px]:text-4xl max-[855px]:text-5xl max-[555px]:text-4xl  font-semibold w-[80%]">
            Download Rentcars App for
            <span className="text-dark-blue"> FREE</span>
          </h1>
          <p className="text-[18px] text-black mt-6 w-[80%] ">
            For faster, easier booking and exclusive deals.
          </p>
          <div className=" flex flex-row gap-3 items-center mt-7">
            <a className="inline-block " href="#">
              <img
                className="w-full"
                src="/landing-page/android.png"
                alt="play store"
              />
            </a>
            <a className="inline-block " href="#">
              <img
                className="w-full"
                src="/landing-page/ios.png"
                alt="app store"
              />
            </a>
          </div>
          <form className="contact-form mt-20 w-[65%] flex flex-col items-center gap-3 max-[600px]:w-full">
            <input
              className="bg-[#CEDCFF] py-4 px-7 outline-none rounded-full w-full text-black placeholder:text-black"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#CEDCFF] py-4 px-7 outline-none rounded-full w-full text-black placeholder:text-black"
              type="number"
              placeholder="Phone Number"
            />
            <input
              className="bg-[#CEDCFF] py-4 px-7 outline-none rounded-full w-full text-black placeholder:text-black"
              type="text"
              placeholder="Email"
            />
            <button
              className="px-14 mt-4 py-[10px] bg-dark-blue rounded-lg text-base text-white text-center 
        transition hover:bg-blue-600"
            >
              Send
            </button>
          </form>
        </div>
        <div className="section-img flex items-end justify-center pt-32">
          <img src="/landing-page/iPhone-14.png" alt="iphone" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
