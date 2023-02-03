
const GradientButton = ({ title, onClickBtn, link }) => {
  // let css_1 = "linear-gradient(to right, #16a3fe 0%, #41faa4 100%)";
  // let css_2 = "linear-gradient(to left, #16a3fe 0%, #41faa4 100%)";
  return (<div>{link ?
    <a target="_blank" href={"https://"+link} rel="noreferrer"
    ><div className=" rounded transition-all cursor-pointer text-sm px-8 leading-[46px] bg-gradient-to-r hover:from-[#41faa4] hover:to-[#16a3fe] from-[#16a3fe] to-[#41faa4]">{title}</div></a> :
    <div
      className=" rounded transition-all cursor-pointer text-sm px-8 leading-[46px] bg-gradient-to-r hover:from-[#41faa4] hover:to-[#16a3fe] from-[#16a3fe] to-[#41faa4]"
      onClick={() => { onClickBtn() }}
    >
      {title}
    </div>
  }</div>
  )

}

export default GradientButton