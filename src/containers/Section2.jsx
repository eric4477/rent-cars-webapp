export default function Section2() {
  return (
    <section className="py-24 w-full">
      <div className="flex flex-row gap-16 relative max-[1140px]:flex-col  ">
        <div className="section-background max-[1140px]:hidden">
          <img
            className="w-full h-full"
            src="/landing-page/Vector.png"
            alt="background"
          />
        </div>
        <div className="flex-1 flex items-center justify-start ">
          <img src="/landing-page/audi-car.png" alt="audi" />
        </div>
        <div className="flex flex-col items-start justify-start flex-1 max-[1140px]:items-center  max-[1140px]:px-7">
          <div className=" bg-[#edf5fe] px-7 py-2 rounded-lg mb-2 ">
            <span className="text-sm text-dark-blue font-medium">
              WHY CHOOSE US
            </span>
          </div>

          <h1 className="text-[38px] max-w-[600px] leading-tight mb-10  text-light-black mt-3 font-medium max-[555px]:text-4xl max-[655px]:mt-5  ">
            We offer the best experience with our rental deals
          </h1>
          <div className="section-icons flex flex-col ">
            <div className="section-icon flex flex-row items-center gap-5 mb-10">
              <div className="w-[64px] h-[64px]">
                <img
                  className="w-full h-full"
                  src="/landing-page/user.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-black font-medium text-xl">
                  Best price guaranteed
                </h3>
                <p className="text-base text-[#6D6D6D] max-w-[340px]">
                  Find a lower price? We&apos;ll refund you 100% of the
                  difference.
                </p>
              </div>
            </div>
            <div className="section-icon flex flex-row items-center gap-5  mb-10">
              <div className="w-[64px] h-[64px]">
                <img
                  className="w-full h-full"
                  src="/landing-page/user.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-black font-medium text-xl">
                  Experience driver
                </h3>
                <p className="text-base text-[#6D6D6D] max-w-[450px]">
                  Don&apos;t have driver? Don&apos;t worry, we have many
                  experienced driver for you.
                </p>
              </div>
            </div>
            <div className="section-icon flex flex-row items-center gap-5 mb-10">
              <div className="w-[64px] h-[64px]">
                <img
                  className="w-full h-full"
                  src="/landing-page/message.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-black font-medium text-xl">
                  24 hour car delivery
                </h3>
                <p className="text-base text-[#6D6D6D] max-w-[350px]">
                  Book your car anytime and we will deliver it directly to you.
                </p>
              </div>
            </div>
            <div className="section-icon flex flex-row items-center gap-5 ">
              <div className="w-[64px] h-[64px]">
                <img
                  className="w-full h-full"
                  src="/landing-page/chat.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-black font-medium text-xl">
                  24/7 technical support
                </h3>
                <p className="text-base text-[#6D6D6D] max-w-[350px]">
                  Have a question? Contact Rentcars support any time when you
                  have problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
