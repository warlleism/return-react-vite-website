import './style.scss'
import { FaSun } from "react-icons/fa";
export default function HeaderCompoent() {
    return (
        <div id='header' style={{ zIndex: '10' }} className='h-[10vh] w-full flex box-border top-0 left-0 px-10 items-center justify-between position fixed transition-all duration-2000 ease-in-out'  >
            <a href='/'>
                <div className='title text-[#fff] text-3xl font-light relative inline-block'>VIVARTE</div>
            </a>
            <ul className='flex gap-6 items-center list-none ml-[878px] '>
                <li><a href='#' className='font-semibold tracking-tight text-base text-[#fff] no-underline'>Início</a></li>
                <li><a href='#' className='font-semibold tracking-tight text-base text-[#fff] no-underline'>Galeria</a></li>
                <li><a href='#' className='font-semibold tracking-tight text-base text-[#fff] no-underline'>Sobre</a></li>
                <li><a href='#' className='font-semibold tracking-tight text-base text-[#fff] no-underline'>Serviços</a></li>
            </ul>
            <div className='flex items-center justify-center gap-3'>
                <a href='/contacts' className='hover:bg-[#1a1a1a] hover:text-[#fff] button-contact flex gap-1.5 cursor-pointer font-medium px-5 py-2.5 items-center bg-[#fbfbfb] text-[#0a0a0a] transition ease-in-out duration-500 no-underline rounded-bl-md border-l border-b border-[#0a0a0a]'>
                    <span className="material-symbols-outlined">
                        call
                    </span>
                    Contato
                </a>
                <FaSun className='text-[#fff] text-[2rem] cursor-pointer cursor-pointer' />
            </div>

        </div>
    )
}
