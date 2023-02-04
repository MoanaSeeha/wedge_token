const Description = () => {
  return (<div className=" xl:pt-[120px] pt-[112px] relative max-w-6xl mx-auto text-white">
    <div className="relative flex justify-between w-full z-20 items-center">
      <div className="md:w-2/5 w-3/4 px-4 flex items-start flex-col space-y-4">
        <div className="flex flex-col items-start text-start space-y-4 text-lg">
          <span>
            Wedge Finance as It’s Core aim to provide frictionless transaction incentivising token circulation.
            Staking Platform And Allocation – AMM
          </span>
          <span>
            Using the “Full Life Cycle” system on business analysis (test, run, check, retest and rerun), to assure completeness.
          </span>
          <span>
            Wedge Finance provide a reasonable and realistic rate of returns, and targets, that can be achieved in a middle – long term
          </span>
        </div>
      </div>
      <div className="md:w-2/5 w-1/4 flex items-end">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
      </div>
    </div>
    <div className=" absolute left-0 top-0 sm:w-[400px] w-[200px] h-[600px]">
      <div className="mask_image">
      </div>
    </div>
  </div>)
}

export default Description
