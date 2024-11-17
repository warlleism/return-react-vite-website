import { useEffect } from 'react'
import GaleryCarousselCompoent from '../carousel'
export default function HomeComponent() {

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
            <div className='text-container top-[20vh] w-full flex px-10 absolute box-border text-[#1a1a1a] -translate-x-1/2 transition ease-in-out duration-500 max-h-745:top-[20vh]' id='text-container'>
                <h1 className='text-7xl font-400 tracking-tight'>PALETA VIBRANTE</h1>
            </div>
            <div className='box-border w-full px-10 absolute top-[83vh] right-0 translate-x-full transition ease-in-out duration-500 flex justify-between items-center ' id='text-container'>
                <a href='#about' className='font-thin text-[2.5rem] relative tracking-[-2px] inline-block text-[#1a1a1a] uppercase z-50'>scroll</a>
                <div className='font-thin text-[3.5rem] relative tracking-[-2px] inline-block text-[#1a1a1a] uppercase'>INSPIRAÇÃO ARTÍSTICA</div>
            </div>
            <GaleryCarousselCompoent />
        </div>
    )
}