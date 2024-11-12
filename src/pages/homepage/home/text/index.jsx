import { useEffect } from 'react'
export default function HeaderTextCompoent() {

    useEffect(() => {
        const textContainer = document.querySelectorAll('#text-container')
        textContainer.forEach((textContainer, index) => {
            setTimeout(() => {
                textContainer.style.transform = 'translateX(0%)'
            }, index * 800)
        })
    }, [])

    return (
        <>
            <div className='text-container top-[28vh] w-full flex px-10 absolute box-border text-[#1a1a1a] -translate-x-1/2 transition ease-in-out duration-500 max-h-745:top-[20vh]' id='text-container'>
                <h1 className='text-7xl font-400 tracking-tight'>PALETA VIBRANTE</h1>
            </div>
            <div className='box-border px-10 absolute top-[83vh] right-0 translate-x-full transition ease-in-out duration-500' id='text-container'>
                <h1 className='font-thin text-[3.5rem] relative tracking-[-2px] inline-block text-[#1a1a1a] uppercase'>INSPIRAÇÃO ARTÍSTICA</h1>
            </div>
        </>
    )
}