const About = () => {
  return (<div className=" xl:pt-[120px] pt-[112px] relative max-w-6xl mx-auto text-white">
    <div className="relative flex flex-wrap justify-between w-full z-20 items-center">
      <div className="md:w-2/5 w-3/4 px-4 flex items-start flex-col space-y-4">
        <span className=" text-[#16a4fd]">ABOUT</span>
        <span className=" text-4xl font-bold">Wedge Finance Token</span>
        <div className="flex flex-col items-start space-y-4 text-[#7ab9ff]">
          <div className="relative ml-5"><span className="bg-[#41faa4] absolute top-[40%] -left-5 rounded-full w-[5px] h-[5px]"/>Name: Wedge Finance Token</div>
          <div className="relative ml-5"><span className="bg-[#41faa4] absolute top-[40%] -left-5 rounded-full w-[5px] h-[5px]"/>Ticker: WEDGE</div>
          <div className="relative ml-5  text-start"><span className="bg-[#41faa4] absolute top-[40%] -left-5 rounded-full w-[5px] h-[5px]"/>Contract Address: 0x0E4bE24920a04b3AF1A5fa29a8aB2C263F06Dc19</div>
          <div className="relative ml-5"><span className="bg-[#41faa4] absolute top-[40%] -left-5 rounded-full w-[5px] h-[5px] text-start"/>Chain: BNB (BEP20)</div>
        </div>
        <div className=" text-lg font-semibold text-start">
        Wedge Finance Provide Frictionless Decentralised Finance transactions in a block chain Environment
        </div>
      </div>
      <div className="md:w-2/5 w-1/4 flex items-end">
        <img src={`${process.env.PUBLIC_URL}/images/section1.png`} alt=""/>
      </div>
    </div>
    <div className=" absolute left-0 top-0 sm:w-[400px] w-[200px] h-[600px]">
      <div className="mask_image">
      </div>
    </div>
  </div>)
}

export default About
