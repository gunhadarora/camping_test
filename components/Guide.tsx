import Image from "next/image";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className=" padding-container max-container w-full">
        <Image src={`/camp.svg`} alt="camp" height={50} width={50} />
        <p className="uppercase mb-3 bold-18 text-green-50">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="capitalize bold-40 lg:bold-64 xl:max-w-[400px]">
            Guide you to easy path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="flexCenter padding-container max-container relative w-full mt-20">
        <Image
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center rounded-5xl"
        />
        <div className="absolute flex bg-white py-8 px-7 gap-3 rounded-3xl border shadow-lg md:left-[10%] lg:top-[10%] max-h-full">
          <Image
            src="/meter.svg"
            alt="meter"
            height={158}
            width={16}
            className="w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 min</p>
              </div>
              <p className="bold-20 mt-1">Lake Dum Dum</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 mt-1 whitespace-nowrap">Gurgaon</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
