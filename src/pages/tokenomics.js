import { PieChart } from "react-minimal-pie-chart"
import GradientButton2 from "../components/GradientButton_2"

const Tokenomics = () => {
  return (<div className="bg-[#0d42b2] pt-[120px] relative tokennomics">
    <div className="flex flex-col w-full z-40 relative">
      <div className="flex flex-col w-1/2 mx-auto">
        <div className=" text-4xl mb-5 section-head-s2 relative flex flex-col">
          <span className="text-[#7ab9ff] font-semibold text-base">TOKENS</span>
          <span className=" font-bold">Pre-Sale & Tokenomics</span>
        </div>
        <span className=" mb-10 text-white">
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
            <div className="my-5"><GradientButton2 title="JOIN & BUY TOKEN NOW" /></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-[1140px] mx-auto w-full mt-10">
        <span className=" text-6xl font-bold">TOKENOMICS</span>
        <div className="xl:w-1/4 md:w-1/3 w-1/2 mx-auto overflow-visible">
          <PieChart className="w-full h-full overflow-visible"
            animate
            data={[
              { title: 'TREASURY 30%', value: 30, color: '#E38627' },
              { title: 'TEAM & ADVISORS 15%', value: 15, color: '#C13C37' },
              { title: 'TOKEN SALES 25%', value: 25, color: '#6A2135' },
              { title: 'MARKETING 20%', value: 20, color: '#196b3c' },
              { title: 'LIQUDITY 10%', value: 10, color: '#7f368f' },
            ]}
            labelPosition={90}
            label={({ dataEntry }) => dataEntry.title}
            labelStyle={(index) => ({
              fill: "#1b1b41",
              fontSize: '4px',
              fontFamily: 'sans-serif'
            })}
            lineWidth={30}
          // segmentsShift={(index) => (0.5)}
          />
        </div>
      </div>
      <div className="flex flex-col max-w-[1140px] mx-auto w-full mt-10">
        <span className=" text-6xl font-bold">VESTING SCHEDULE</span>
        <div className="xl:w-[90%] md:w-[95%] w-[99%] mx-auto overflow-visible">
          <table className="tokenomics-table">
            <thead>
              <tr>
                <th>StakeHolders</th>
                <th>TotalSupply</th>
                <th>%</th>
                <th>TGE</th>
                <th>Locked</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Seed Sale</td>
                <td>25,000,000,000</td>
                <td>5%</td>
                <td>5%</td>
                <td>One month cliff/5% per month</td>
              </tr>
              <tr>
                <td>Private Sale</td>
                <td>40,000,000,000</td>
                <td>8%</td>
                <td>10%</td>
                <td>One month cliff/10% per month</td>
              </tr>
              <tr>
                <td>Liquidity</td>
                <td>50,000,000,000</td>
                <td>10%</td>
                <td>100%</td>
                <td>Locked in TGE</td>
              </tr>
              <tr>
                <td>Public Sale</td>
                <td>60,000,000,000</td>
                <td>12%</td>
                <td>20%</td>
                <td>10% per month</td>
              </tr>
              <tr>
                <td>Treasury</td>
                <td>150,000,000,000</td>
                <td>30%</td>
                <td></td>
                <td>5 year lock/10% per 6 month</td>
              </tr>
              <tr>
                <td>Team</td>
                <td>50,000,000,000</td>
                <td>10%</td>
                <td></td>
                <td>30 month lock/10% per 3 month</td>
              </tr>
              <tr>
                <td>Advisors & Partners</td>
                <td>25,000,000,000</td>
                <td>5%</td>
                <td></td>
                <td>One month cliff/5% per month</td>
              </tr>
              <tr>
                <td>Marketing & Community</td>
                <td>100,000,000,000</td>
                <td>20%</td>
                <td></td>
                <td>One month cliff/5% per month</td>
              </tr>
            </tbody>
          </table>
          <span className=" text-gray-700 font-bold text-3xl text-start w-full inline-block ml-5">TOTAL 500,000,000,000</span>
        </div>
      </div>
    </div>
    <div>
      <div className="mask-tokennomics"></div>
    </div>
  </div>)
}

export default Tokenomics