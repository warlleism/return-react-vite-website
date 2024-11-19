import { useEffect } from 'react'
import GaleryCarousselCompoent from '../carousel'
import { useTranslation } from 'react-i18next';
import { PiMouseScroll } from "react-icons/pi";
export default function HomeComponent() {

    const [t] = useTranslation("global");

    useEffect(() => {
        const textContainer = document.querySelectorAll('#text-container')
        textContainer.forEach((textContainer, index) => {
            setTimeout(() => {
                textContainer.style.transform = 'translateX(0%)'
            }, index * 800)
        })
    }, [])

    return (
        <div className='w-full h-[100vh]'>
            <div className='text-container top-[20vh] w-full md-max:justify-center flex px-10 absolute box-border text-[#1a1a1a] -translate-x-1/2 transition ease-in-out duration-500 max-h-745:top-[20vh]' id='text-container'>
                <h1 className='text-7xl font-400 tracking-tight md-max:text-[2rem]'>{t("home-page.title")}</h1>
            </div>
            <div className='box-border w-full px-10 absolute top-[83vh] right-0 translate-x-full transition ease-in-out duration-500 flex justify-between items-center  ' id='text-container'>
                <a href='#about' className='font-thin text-[2.5rem] relative tracking-[-2px] inline-block text-[#1a1a1a] uppercase z-40 md-max:hidden'>scroll</a>
                <a href='#about' className='font-thin text-[2.5rem]  relative tracking-[-2px] inline-block text-[#1a1a1a]  uppercase z-40 hidden md-max:block md-max:m-auto'><PiMouseScroll /></a>
                <div className='font-thin text-[3.5rem] relative tracking-[-2px] inline-block text-[#1a1a1a] uppercase md-max:hidden'>{t("home-page.subtitle")}</div>
            </div>
            <GaleryCarousselCompoent />
        </div>
    )
}