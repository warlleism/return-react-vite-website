import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import './style.scss'

export default function HeaderCompoent() {

    const [t, i18n] = useTranslation("global");
    const [menu, setMenu] = useState(false)

    const handleChangeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    useEffect(() => {
        const header = document.getElementById('header')
        if (menu) {
            header.style.zIndex = 50
        }
        document.addEventListener('scroll', () => {
            if (menu) {
                return header.style.zIndex = 50
            }
            if (window.scrollY > 0) {
                header.style.background = "#fff"
                header.style.zIndex = 20
            } else {
                header.style.background = "none"
                header.style.zIndex = 0
            }
        })
    }, [menu])

    return (
        <div id='header' style={{ zIndex: '10' }} className='h-[10vh] w-[100vw] flex box-border top-0 left-0 px-10 items-center justify-between position fixed transition-all duration-2000 ease-in-out'  >
            <a href='/'>
                <div className='title text-[#1a1a1a] text-3xl font-light relative inline-block'>{t("header.title")}</div>
            </a>
            <ul className='flex gap-6 items-center list-none ml-[878px] 2xl-max:ml-[0px] md-max:hidden'>
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
                    <a href='/contacts' className='font-semibold tracking-tight text-base text-[#1a1a1a] no-underline'> {t("header.contact")}</a>
                </li>
            </ul>
            <div className='flex items-center justify-center gap-3 md-max:hidden'>
                <button className={`${i18n.resolvedLanguage == 'en' ? 'text-[#000]' : 'text-[#0000004f]'}`} onClick={() => handleChangeLanguage('en')}>EN</button>
                <button className={`${i18n.resolvedLanguage == 'br' ? 'text-[#000]' : 'text-[#0000004f]'}`} onClick={() => handleChangeLanguage('br')}>PT</button>
            </div>

            <div className='hidden md-max:block' onClick={() => setMenu(!menu)}>
                <CiMenuFries className='text-[#1a1a1a] text-[2rem] cursor-pointer' />
            </div>

            <div className={`hidden md-max:flex z-50 flex justify-end absolute top-0 right-0  ${menu == true ? " translate-x-0" : "translate-x-full"} ?  w-full h-screen`}>
                <div onClick={() => setMenu(!menu)} className='absolute top-0 left-0 w-full h-screen bg-[#0000007a]' />
                <div className='flex flex-col justify-center align-center w-[80vw] h-screen bg-[#f7f7f7] z-50 relative'>
                    <div className='flex justify-between w-full absolute top-0 left-0 border-box p-5'>
                        <div className='flex justify-center items-center align-center border-box text-[#fff] bg-[#ebebeb] rounded-md'>
                            <button className={`w-[40px] h-[40px] text-[1.3rem] ${i18n.resolvedLanguage == 'en' ? 'text-[#000]' : 'text-[#0000004f]'}`} onClick={() => handleChangeLanguage('en')}>EN</button>
                            <button className={`w-[40px] h-[40px] text-[1.3rem] ${i18n.resolvedLanguage == 'br' ? 'text-[#000]' : 'text-[#0000004f]'}`} onClick={() => handleChangeLanguage('br')}>PT</button>
                        </div>
                        <IoClose className="font-bold  text-[#1a1a1a] text-[3rem] cursor-pointer " onClick={() => setMenu(!menu)} />
                    </div>
                    <ul className='flex flex-col gap-[5vh] items-center list-none'>
                        <li>
                            <a href='/' className='text-[1.6rem] font-semibold tracking-tight text-[#1a1a1a] no-underline'>{t("header.home")}</a>
                        </li>
                        <li>
                            <a href='/galery' className='text-[1.6rem] font-semibold tracking-tight text-[#1a1a1a] no-underline'>{t("header.galery")}</a>
                        </li>
                        <li>
                            <a href='/about' className='text-[1.6rem] font-semibold tracking-tight text-[#1a1a1a] no-underline'>{t("header.about")}</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
