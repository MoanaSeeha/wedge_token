const GradientButton2 = ({ title, onClickBtn }) => {
  // let css_1 = "linear-gradient(to right, #16a3fe 0%, #41faa4 100%)";
  // let css_2 = "linear-gradient(to left, #16a3fe 0%, #41faa4 100%)";
  return (<div 
    className="flex w-fit text-white rounded-full transition-all cursor-pointer text-sm px-8 leading-[46px] bg-gradient-to-r hover:from-[#0d9ee0] hover:to-[#340075] from-[#340075] to-[#0d9ee0]"
    onClick={() => { onClickBtn() }}
  >
    {title}
  </div>)
}

export default GradientButton2