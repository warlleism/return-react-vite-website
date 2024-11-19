import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='h-[25vh] w-full flex box-border px-10 items-center justify-between m-auto bg-[#1a1a1a] relative'>
            <div className=" h-[80%] w-[20%]" >
                <a href='#'>
                    <div className='title text-[#fff] text-3xl font-light relative inline-block md-max:text-2xl'>VIVARTE</div>
                </a>
            </div>
            <div className=" h-[80%] w-[20%] flex flex-col items-center justify-center gap-5 text-white md-max:absolute md-max:h-[100px] md-max:top-[8vh] left-[15vw]">
                <div className="flex flex-col gap-2 h-full ">
                    <a href='#' className="text-[#959595] md-max:text-[.8rem]">início</a>
                    <a href='#' className="text-[#959595] md-max:text-[.8rem]">sobre</a>
                    <a href='#' className="text-[#959595] md-max:text-[.8rem]">contato</a>
                    <a href='#' className="text-[#959595] md-max:text-[.8rem]">serviços</a>
                </div>
            </div>
            <div className="h-[80%] w-[30%] flex justify-center">
                <div className="flex flex-col items-start justify-center gap-5 h-full md-max:mr-10 ">
                    <div className="flex flex-col gap-3 ">
                        <div className="flex items-center gap-2 ">
                            <CiLocationOn className="text-[#fff] text-[1.3rem] md-max:text-[2rem]" />
                            <p className="text-[#959595] tracking-tight text-[.8rem] md-max:text-[.6rem]">Av. Paulista, 9999 - Bela Vista, São Paulo - SP</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <MdEmail className="text-[#fff] text-[1.3rem] md-max:text-[1rem]" />
                            <p className="text-[#959595] text-[.8rem] md-max:text-[.6rem]">G8E0Z@example.com</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <FaPhone className="text-[#fff] text-[1.3rem] md-max:text-[1rem]" />
                            <p className="text-[#959595] text-[.8rem] md-max:text-[.6rem]">(11) 99999-9999</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <FaWhatsapp className="text-[#fff] text-[1.3rem] md-max:text-[1rem]" />
                            <p className="text-[#959595] text-[.8rem] md-max:text-[.6rem]">(11) 99999-9999</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="border-box px-1 py-1 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                            <FaInstagram className="text-[#1a1a1a] text-[1rem]" />
                        </div>
                        <div className="border-box px-1 py-1 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                            <FaFacebook className="text-[#1a1a1a] text-[1rem]" />
                        </div>
                        <div className="border-box px-1 py-1 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                            <BsTwitterX className="text-[#1a1a1a] text-[1rem]" />
                        </div>
                        <div className="border-box px-1 py-1 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                            <FaLinkedinIn className="text-[#1a1a1a] text-[1rem]" />
                        </div>
                        <div className="border-box px-1 py-1 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                            <FaWhatsapp className="text-[#1a1a1a] text-[1rem]" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}