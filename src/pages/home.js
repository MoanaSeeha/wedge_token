import GradientButton from "../components/GradientButton"

const Home = () => {
  return (
    <div className='flex flex-wrap justify-center home-bg z-10'>
      <div className='flex flex-wrap w-full h-full pt-127 max-w-6xl '>
        <div className='w-1/2 px-4 flex flex-col items-start'>
          <span className=' text-5xl mb-3 text-start font-semibold'>Wedge Finance ($WEDGE)</span>
          <span className=' font-semibold mb-4'>Wedge Finance Token holders will benefit from 3 main features:</span>
          <div className='flex flex-col w-full items-start text-lg mb-5'>
            <span>– Frictionless Transactions</span>
            <span>– Full Life Cycle</span>
            <span>– Realistic ROI</span>
          </div>
          <div className='flex flex-wrap'>
            <div className=' mr-5 my-3'><GradientButton title="DEX-TRADE.COM LAUNCHPAD" onClickBtn={() => {

            }} link="dex-trade.com/ieo/wedge"/></div>
            <div className=' mr-5 my-3'><GradientButton title="WHITEPAPER" onClickBtn={() => {
            }} link="wedge-v3.gitbook.io/wedge-finance-whitepaper/"/></div>
            <div className=' mr-5 my-3'><GradientButton title="HOW TO BUY" onClickBtn={() => {
            }} link="wedge-v3.gitbook.io/wedge-finance-whitepaper/"/></div>
            <div className=' mr-5 my-3'><GradientButton title="TELEGRAM" onClickBtn={() => {
            }} link="t.me/WedgeFinanceOfficial"/></div>
          </div>
        </div>
        <div className='w-1/2'>
          <img src="" alt="_logo" />
        </div>
        <div className='w-full flex justify-between items-center px-4'>
          <div className='w-[15%] text-start'>
            <span className=' capitalize '>Our <br />Partners</span>
          </div>
          <div className='w-[15%]'><img src={`${process.env.PUBLIC_URL}/images/obsidian_council.png`} alt="" /></div>
          <div className='w-[15%]'><img src={`${process.env.PUBLIC_URL}/images/download-removebg-preview-1.png`} alt="" /></div>
          <div className='w-[15%]'><img src={`${process.env.PUBLIC_URL}/images/dextools-logo-removebg-preview.png`} alt="" /></div>
          <div className='w-[15%]'><img src={`${process.env.PUBLIC_URL}/images/bitkeep-logo.png`} alt="" /></div>
          <div className='w-[15%]'><img src={`${process.env.PUBLIC_URL}/images/BscScan-logo-1.webp`} alt="" /></div>
        </div>
      </div>
    </div>)
}

export default Home