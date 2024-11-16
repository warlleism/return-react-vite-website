import Header from "../../components/header"
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Contacts() {

    return (
        <>
            <Header />
            <div className="w-screen h-[120vh] flex items-center justify-center bg-[#fbfbfb]">
                <div className="w-[45vw] h-[70vh] mt-[160px] m-auto bg-[#fff] relative shadow-2xl flex items-center justify-end">
                    <div style={{ backgroundColor: '#1a1a1a' }} className="flex flex-col justify-center gap-10 shadow-2xl absolute left-[-55px] top-1/2 transform -translate-y-1/2 w-[50%] h-[85%]  rounded-[5px] border-box px-7 py-7">
                        <h1 className="text-[#fff] text-[2rem] font-ligth ">Contate-nos</h1>
                        <div className="flex items-center gap-2 ">
                            <CiLocationOn className="text-[#1a1a1a] text-[1.6rem]" />
                            <p className="text-[#959595] tracking-tight">Av. Paulista, 9999 - Bela Vista, São Paulo - SP</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <MdEmail className="text-[#1a1a1a] text-[1.6rem]" />
                            <p className="text-[#959595]">G8E0Z@example.com</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <FaPhone className="text-[#1a1a1a] text-[1.6rem]" />
                            <p className="text-[#959595]">(11) 99999-9999</p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <FaWhatsapp className="text-[#1a1a1a] text-[1.6rem]" />
                            <p className="text-[#959595]">(11) 99999-9999</p>
                        </div>
                        <div className="flex gap-5 pl-5 mt-10">
                            <FaInstagram className="text-[#959595] text-[1.8rem] cursor-pointer" />
                            <FaFacebook className="text-[#959595] text-[1.8rem] cursor-pointer" />
                            <BsTwitterX className="text-[#959595] text-[1.8rem] cursor-pointer" />
                            <FaLinkedinIn className="text-[#959595] text-[1.8rem] cursor-pointer" />
                        </div>
                    </div>
                    <form action="" className="w-[55%] h-[100%] box-border px-10 py-10 flex flex-col gap-3 align-center justify-center">
                        <div className="flex flex-col mb-5">
                            <h1 className="text-[#0e0e0e] text-[2rem] font-semibold ">Entre em Contato</h1>
                            <p className="text-[#959595] tracking-tight">sinta-se à vontade para nos deixar uma mensagem!</p>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="text" id="email" className="bg-[#fff] border border-gray-300 text-gray-900 text-sm  block w-full p-3 outline-none" placeholder=" usuario@email" required />
                        </div>
                        <div>
                            <label for="contato" className="block mb-2 text-sm font-medium text-gray-900">Contato</label>
                            <input type="text" id="contato" className="bg-[#fff] border border-gray-300 text-gray-900 text-sm  block w-full p-3 outline-none" placeholder="(11) 99999-9999" pattern="^\(\d{2}\)\s\d{4, 5}-\d{4)" required />
                        </div>
                        <div>
                            <label for="assunto" className="block mb-2 text-sm font-medium text-gray-900">Assunto</label>
                            <input type="text" id="assunto" className="bg-[#fff] border border-gray-300 text-gray-900 text-sm  block w-full p-3 outline-none" placeholder="(11) 99999-9999" pattern="^\(\d{2}\)\s\d{4, 5}-\d{4)" required />
                        </div>
                        <div>
                            <label for="descricao" className="block mb-2 text-sm font-medium text-gray-900">Descrição</label>
                            <textarea type="text" id="descricao" className="bg-[#fff] border border-gray-300 text-gray-900 text-sm  block w-full p-3 outline-none" placeholder="" pattern="^\(\d{2}\)\s\d{4, 5}-\d{4)" required />
                        </div>
                        <button className="shadow-2xl w-[200px] text-white bg-[#0a0a0a] hover:bg-[#040404] font-medium rounded-[100px] px-3 py-4 text-center text-[1.2rem]">Enviar</button>
                    </form>
                </div>
            </div >
        </>
    )
}