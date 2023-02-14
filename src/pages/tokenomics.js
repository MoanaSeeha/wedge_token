import { PieChart } from "react-minimal-pie-chart"
import GradientButton2 from "../components/GradientButton_2"

const Tokenomics = () => {
  return (<div className="bg-[#0c0c17] pt-[120px] relative tokennomics">
    <div className="flex flex-col lg:w-full mx-auto w-11/12 z-40 relative">
      {/* <div className="flex flex-col w-1/2 mx-auto">
        <div className=" text-4xl mb-5 section-head-s2 relative flex flex-col">
          <span className="text-[#7ab9ff] font-semibold text-base">TOKENS</span>
          <span className=" font-bold">Pre-Sale & Tokenomics</span>
        </div>
        <span className=" mb-10 text-white">
          To make sure our early investors are well compensated, we are going to list the token at 0.00005$ so we can get the ball rolling
        </span>
      </div> */}
      {/* <div className="flex flex-col sm:flex-row sm:items-start items-center max-w-[1140px] mx-auto w-full">
        <div className="sm:w-[55%] w-[90%] flex flex-wrap">
          <div className="sm:w-1/2 w-1/3 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">0.000005$</span>
            </div>
          </div>
          </div>
          <div className="sm:w-1/2 w-1/3 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">0.000005$</span>
            </div>
          </div>
          </div>
          <div className="sm:w-1/2 w-1/3 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">0.000005$</span>
            </div>
          </div>
          </div>
          <div className="sm:w-1/2 w-1/3 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">0.000005$</span>
            </div>
          </div>
          </div>
          <div className="sm:w-1/2 w-1/3 mb-10"><div className="flex flex-col">
            <div className="relative ml-5 text-start text-lg font-bold flex flex-col">
              <span className="bg-[#41faa4] absolute top-[22%] -left-5 rounded-full w-[5px] h-[5px]" />Seed Sale
              <span className="text-[#7ab9ff] font-normal">ETH, BNB</span>
            </div>
          </div>
          </div>
        </div>
        <div className="sm:w-[45%] w-[90%]">
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
      </div> */}
      {/* <div className="flex flex-col max-w-[1140px] mx-auto w-full mt-10">
        <span className=" sm:text-6xl text-4xl font-bold mb-5">TOKENOMICS</span>
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
              fill: "#f4e4f4",
              fontSize: '4px',
              fontFamily: 'sans-serif'
            })}
            lineWidth={40}
          // segmentsShift={(index) => (0.5)}
          />
        </div>
      </div> */}
      <div className="flex flex-col max-w-[1140px] mx-auto w-full mt-10">
        <span className=" sm:text-6xl text-4xl mb-5 font-bold">VESTING SCHEDULE</span>
        <div className="xl:w-[90%] md:w-[95%] w-[99%] mx-auto overflow-visible">
          <table className="tokenomics-table">
            {/* <thead>
              <tr>
                <th>Total Supply</th>
                <th>Locked</th>
                <th>Circulating Supply</th>
                <th>Owners</th>
                <th>Marketing & Research</th>
              </tr>
            </thead> */}
            <tbody className=" text-start">
              <tr>
                <td>Locked</td>
                <td>5,000,000,000,000 </td>
              </tr>
              <tr>
                <td>Circulating Supply</td>
                <td>75,000,000,000,000 </td>
              </tr>
              <tr>
                <td>Owners</td>
                <td>10,000,000,000,000 </td>
              </tr>
              <tr>
                <td>Marketing & Research</td>
                <td>10,000,000,000,000 </td>
              </tr>

            </tbody>
          </table>
          <span className=" text-gray-700 font-bold text-3xl text-start w-full inline-block ml-5 break-all">TOTAL 1,000,000,000,000,000</span>
        </div>
      </div>
    </div>
    <div>
      <div className="mask-tokennomics"></div>
    </div>
  </div>)
}

export default Tokenomics