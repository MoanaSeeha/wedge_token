import GradientButton from "../components/GradientButton"

const Features = () => {
  return (<div className="bg-[#0d42b2] pt-[120px] relative">
    <div className=" max-w-[1140px] mx-auto ">
      <div className="flex flex-col items-center mx-auto w-2/3">
        <span className=" text-4xl mb-5 section-head-s2 relative font-bold">FEATURES</span>
        <span className=" mb-10 text-[#3c3c3c]">The network WedgeToken is sitting in BRP-20 therefore, for every transaction you only pay a ridiculous amount of fee, just select the right network!</span>
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/liquidity_provider.7e8372e6-removebg-preview.png`} alt="features_1"
            className=" max-w-[300px]"
          />
        </div>
        <span className="my-5 font-semibold text-2xl">
          Interaction with Liquidity Pool
        </span>
        <p className="text-[#7ab9ff]">
          The liquidity pool is a special wallet that doesn’t receive rewards, the purpose of the design is to prevent growing the amount of Wedge Finance token in the pool and diluting the token values for holders
        </p>
        <div className="mt-7 mb-2">
          <img src={`${process.env.PUBLIC_URL}/images/1_8lyXTL9Qlx6y1unS-NGb4w-removebg-preview.png`} alt="features_1"
            className=" max-w-[300px]" />
        </div>
        <span className="my-5 font-semibold text-2xl">
          Wedge Finance Ecosystem
        </span>
        <p className="text-[#7ab9ff]">
          The goal of Wedge Finance Ecosystem is to endorse value into everything, regardless of its location. The decentralized smart contract hosts the consensus.
        </p>
        <div className=" my-5 flex">
          <div className=' mr-5 my-3'><GradientButton title="DOWNLOAD WHITEPAPER" onClickBtn={() => {

          }} /></div>
          <div className=' mr-5 my-3'><GradientButton title="BUY TOKEN" onClickBtn={() => {

          }} /></div>
        </div>
        <a class=" text-sm font-semibold" href="https://t.me/WedgeFinanceOfficial">
          Join us on Telegram</a>
      </div>
    </div>
    <div className="mask-features"></div>
  </div>)
}

export default Features