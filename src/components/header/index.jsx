import { useEffect } from 'react';
import { FaSun } from "react-icons/fa";
import './style.scss'
import { useTranslation } from 'react-i18next';

export default function HeaderCompoent() {

    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    useEffect(() => {
        const header = document.getElementById('header')
        document.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.style.background = "#fff"
                header.style.zIndex = 20
            } else {
                header.style.background = "none"
                header.style.zIndex = 0
            }
        })
    }, [])

    return (
        <div id='header' style={{ zIndex: '10' }} className='h-[10vh] w-full flex box-border top-0 left-0 px-10 items-center justify-between position fixed transition-all duration-2000 ease-in-out'  >
            <a href='/'>
                <div className='title text-[#1a1a1a] text-3xl font-light relative inline-block'>{t("header.title")}</div>
            </a>
            <ul className='flex gap-6 items-center list-none ml-[878px] '>
                <li>
                    <a href='/' className='font-semibold tracking-tight text-base text-[#1a1a1a] no-underline'>{t("header.home")}</a>
                </li>
                <li>
                    <a href='/galery' className='font-semibold tracking-tight text-base text-[#1a1a1a] no-underline'>{t("header.galery")}</a>
                </li>
                <li>
                    <a href='/about' className='font-semibold tracking-tight text-base text-[#1a1a1a] no-underline'>{t("header.about")}</a>
                </li>
                <li>
                    <a href='#' className='font-semibold tracking-tight text-base text-[#1a1a1a] no-underline'>{t("header.services")}</a>
                </li>
            </ul>
            <div className='flex items-center justify-center gap-3'>
                <a href='/contacts' id='button-contact' className='hover:bg-[#1a1a1a] hover:text-[#fff] button-contact flex gap-1.5 cursor-pointer font-medium px-5 py-2.5 items-center  text-[#0a0a0a] no-underline rounded-bl-md border-l border-b border-[#0a0a0a]'>
                    <span className="material-symbols-outlined">
                        call
                    </span>
                    {t("header.contact")}
                </a>
                <FaSun className='text-[#1a1a1a] text-[1.5rem] cursor-pointer cursor-pointer' />
                <button onClick={() => handleChangeLanguage('en')}>en</button>
                <button onClick={() => handleChangeLanguage('br')}>pt</button>
            </div>

        </div>
    )
}
