import GradientButton2 from "../components/GradientButton_2"

const Tokenomics = () => {
  return (<div className="bg-[#0d42b2] pt-[120px] relative tokennomics">
    <div className="flex flex-col w-full z-40 relative">
      <div className="flex flex-col w-1/2 mx-auto">
        <div className=" text-4xl mb-5 section-head-s2 relative flex flex-col">
          <span className="text-[#7ab9ff] font-semibold text-base">TOKENS</span>
          <span className=" font-bold">Pre-Sale & Tokenomics</span>
        </div>
        <span className=" mb-10 text-[#3c3c3c]">
          To make sure our early investors are well compensated, we are going to list the token at 0.00005$ so we can get the ball rolling
        </span>
      </div>
      <div className="flex max-w-[1140px] mx-auto w-full">
        <div className="w-[55%] flex flex-wrap">
          <div className="w-1/2 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">0.000005$</span>
            </div>
          </div>
          </div>
          <div className="w-1/2 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">0.000005$</span>
            </div>
          </div>
          </div>
          <div className="w-1/2 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">0.000005$</span>
            </div>
          </div>
          </div>
          <div className="w-1/2 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">0.000005$</span>
            </div>
          </div>
          </div>
          <div className="w-1/2 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">ETH, BNB</span>
            </div>
          </div>
          </div>
        </div>
        <div className="w-[45%]">
          <div className="countdown-box flex flex-col items-center">
            <span className=" text-xl font-semibold text-white pb-5">
              ICO WILL START IN
            </span>
            <div className="flex w-full justify-between max-w-[300px] mx-auto">
              <div><span className="countdown-time flex flex-col items-center">00</span>
                <p className=" text-[#340075] text-xs font-semibold uppercase">Days</p>
              </div>
              <div><span className="countdown-time flex flex-col items-center">00</span>
                <p className=" text-[#340075] text-xs font-semibold uppercase">hours</p>
              </div>
              <div><span className="countdown-time flex flex-col items-center">00</span>
                <p className=" text-[#340075] text-xs font-semibold uppercase">minutes</p>
              </div>
              <div><span className="countdown-second flex flex-col items-center">00</span>
                <p className=" text-[#340075] text-xs font-semibold uppercase">seconds</p>
              </div>
            </div>
            <div className="my-5"><GradientButton2 title="JOIN & BUY TOKEN NOW"/></div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="mask-tokennomics"></div>
    </div>
  </div>)
}

export default Tokenomics