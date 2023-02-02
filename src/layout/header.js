
const headerRoutes = [
  {name: "HOME", url: ""},
  {name: "ABOUT", url: "#about"},
  {name: "TOKENOMICS", url: "#token"},
  {name: "ROADMAP", url: "#roadmap"},
  {name: "CONTACT US", url: "#contact"},
]
const Header = () => {
  return (<div className="w-full absolute top-0 left-0 bg-[#0b3795] z-50">
    <div className="flex justify-between max-w-6xl items-center w-[85%] mx-auto">
      <div className=" mt-5 mb-5 mr-4 h-6 w-7">
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" className="w-full h-full"/>
      </div>
      <div className="flex space-x-3">
        {
          headerRoutes.map((r, i) => (
            <div className="text-white hover:text-green-300 transition-all cursor-pointer text-sm" key={i}>
              {r.name}
            </div>
          ))
        }
      </div>
    </div>
  </div>)
}

export default Header