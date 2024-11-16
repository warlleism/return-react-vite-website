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
        <div className='h-[38vh] w-full flex box-border px-10 items-center justify-between m-auto bg-[#1a1a1a]'>
            <div className=" h-[80%] w-[20%]" >
                <a href='#'>
                    <div className='title text-[#fff] text-3xl font-light relative inline-block'>VIVARTE</div>
                </a>
            </div>
            <div className=" h-[80%] w-[20%]" />
            <div className="h-[80%] w-[30%] flex flex-col items-start gap-5 justify-center">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 ">
                        <CiLocationOn className="text-[#fff] text-[1.6rem]" />
                        <p className="text-[#959595] tracking-tight">Av. Paulista, 9999 - Bela Vista, São Paulo - SP</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <MdEmail className="text-[#fff] text-[1.6rem]" />
                        <p className="text-[#959595]">G8E0Z@example.com</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <FaPhone className="text-[#fff] text-[1.6rem]" />
                        <p className="text-[#959595]">(11) 99999-9999</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                        <FaWhatsapp className="text-[#fff] text-[1.6rem]" />
                        <p className="text-[#959595]">(11) 99999-9999</p>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="border-box px-3 py-3 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                        <FaInstagram className="text-[#1a1a1a] text-[1.3rem]" />
                    </div>
                    <div className="border-box px-3 py-3 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                        <FaFacebook className="text-[#1a1a1a] text-[1.3rem]" />
                    </div>
                    <div className="border-box px-3 py-3 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                        <BsTwitterX className="text-[#1a1a1a] text-[1.3rem]" />
                    </div>
                    <div className="border-box px-3 py-3 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                        <FaLinkedinIn className="text-[#1a1a1a] text-[1.3rem]" />
                    </div>
                    <div className="border-box px-3 py-3 bg-[#fff] inline-block rounded-[100px] cursor-pointer">
                        <FaWhatsapp className="text-[#1a1a1a] text-[1.3rem]" />
                    </div>
                </div>
            </div>
        </div>
    )
}