import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Roadmap = () => {
  return (<div className="bg-[#0d42b2] pt-[120px] relative tokennomics">
    <div className="flex flex-col w-full z-40 relative">
      <div className="flex flex-col w-1/2 mx-auto">
        <div className=" text-4xl mb-5 section-head-s2 relative flex flex-col">
          <span className="text-[#7ab9ff] font-semibold text-base">ROADMAP</span>
          <span className=" font-bold">The Timeline</span>
        </div>
        <span className=" mb-10 text-white">
          With help from our teams, contributors and investors these are the milestones we are looking forward to achieve.
        </span>
      </div>
      <div className='w-3/4 mx-auto'>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            }>
            <h3 className="vertical-timeline-element-title">1st Quarter</h3>
            <div className='flex flex-col items-start text-xs w-3/4 mx-auto'>
              <p>- Token Launch</p>
              <p>- Fairaunch in DX</p>
              <p>- Liquidity added in PancakeSwap Finance</p>
              <p>- Social and Media Adv (Telegram, Reddit, Twitter Discord), AMA</p>
              <p>- Press release</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            }>
            <h3 className="vertical-timeline-element-title">2d Quarter</h3>
            <div className='flex flex-col items-start text-xs w-3/4 mx-auto'>
              <p>- CoinMarketCap & Coingecko Listing</p>
              <p>- AMA in Telegram</p>
              <p>- App and Mega Lottery Prize (Up to 5 million)</p>
              <p>- Engaging Partnership for eCommerce</p>
              <p>- DEX Listing (DEX-TRADE)</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          >
            <h3 className="vertical-timeline-element-title">3rd Quarter</h3>
            <div className='flex flex-col items-start text-xs w-3/4 mx-auto'>
              <p>- More DEX Listing CEX</p>
              <p>- AMA in Telegram </p>
              <p>- Real Estate Platform Release</p>
              <p>- Summit Event in the UAE</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          >
            <h3 className="vertical-timeline-element-title">4th Quarter</h3>
            <div className='flex flex-col items-start text-xs w-3/4 mx-auto'>
              <p>- Implementing Wedge App for Future Retailers and Buyers</p>
              <p>- More DEX Listing</p>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className=" xl:pt-[120px] pt-[112px] relative max-w-6xl mx-auto text-white z-10">
        <div className="flex justify-between w-full z-20 items-center">
          <div className="w-7/12 px-4 flex items-start flex-col space-y-4">
            <span className=" text-3xl font-bold text-start">How to add the contract in Binance and MetaMask Wallet</span>
            <div className='flex flex-col text-[#7ab9ff] font-semibold text-start space-y-4'>
              <p>Binance Smart Chain: </p>
              <p>1. Copy the contract below, click on the “+”  key at the bottom, </p>
              <p>2. Select “Custom Asset”, in the Contract Address box, </p>
              <p>3. Paste the contract and click “Add asset”, </p>
              <p>4. That’s All!</p>
              <p>the address is verified:</p>
              <a target="_blank" href={"https://bscscan.com/token/0x0e4be24920a04b3af1a5fa29a8ab2c263f06dc19"} rel="noreferrer">
                <div className="text-[#41faa4] cursor-pointer hover:text-[#2fb275] transition-all font-bold">https://bscscan.com/token/0x0e4be24920a04b3af1a5fa29a8ab2c263f06dc19</div></a>
            </div>
          </div>
          <div className="w-5/12 flex items-end">
            <img src={`${process.env.PUBLIC_URL}/images/buy-crypto-removebg-preview.png`} />
          </div>
        </div>
        {/* <div className=" absolute left-0 top-0 w-[400px] h-[600px] z-0"> */}
          <div className="mask_image">
          </div>
        {/* </div> */}
      </div>
    </div>
  </div>)
}

export default Roadmap