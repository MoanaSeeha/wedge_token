import { Input, Textarea } from "@material-tailwind/react";
import GradientButton from "../components/GradientButton";

const Contact = () => {
  return (
    <div className=" xl:pt-[120px] pt-[112px] relative  mx-auto text-white">
      <div className="flex flex-col w-full z-40 relative max-w-6xl mx-auto">
        <div className="flex flex-col w-1/2 mx-auto">
          <div className=" text-4xl mb-5 section-head-s2 relative flex flex-col">
            <span className="text-[#7ab9ff] font-semibold text-base">CONTACT</span>
            <span className=" font-bold">Get In Touch</span>
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-4/5 mx-auto items-start justify-between">
          <div className="md:w-[45%] w-5/6 mx-auto  flex flex-col space-y-3 break-all">
            <span className="text-start mb-10">Any question? Reach out to us and we’ll get back to you shortly.</span>
            <div className="flex items-center text-[#41faa4] group cursor-pointer">
              <a target="_blank" href={"https://t.me/WedgeFinanceOfficial"} rel="noreferrer" className="flex items-center">
                <div className="contact-icon_button flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 z-10 relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <p className=" transition-all group-hover:text-[#2fb275]">+971551500598</p>
              </a>
            </div>
            <div className="flex items-center text-[#41faa4] group cursor-pointer">
              <a target="_blank" href={"https://t.me/WedgeFinanceOfficial"} rel="noreferrer" className="flex items-center">
                <div className="contact-icon_button flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 z-10 relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>

                </div>
                <p className=" transition-all group-hover:text-[#2fb275]">wedgetoken@gmail.com</p>
              </a>
            </div>
            <div className="flex items-center text-[#41faa4] group cursor-pointer">
              <a target="_blank" href={"https://t.me/WedgeFinanceOfficial"} rel="noreferrer" className="flex items-center">
                <div className="contact-icon_button flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 z-10 relative top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </div>
                <p className=" transition-all group-hover:text-[#2fb275]">Join us on Telegram</p>
              </a>
            </div>
          </div>
          <div className="md:w-[50%] w-5/6 mx-auto flex flex-col space-y-5">
            <Input variant="standard" label="Your Name" success />
            <Input variant="standard" label="Your Email" success />
            <Textarea variant="standard" label="Your Message" success />
            <div className="flex"><GradientButton title="SUBMIT" onClickBtn={() => { }} /></div>
          </div>
        </div>
        <div className="bg-[#0c0c17] pt-[120px] relative h-[200px]">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" className="w-auto h-full mx-auto" />
        </div>
      </div>
      <div className="mask-contact"></div>
    </div>)
}

export default Contact