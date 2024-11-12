import { useEffect } from 'react'
import Img1 from '../../../assets/imagens/img15.png'
import Img2 from '../../../assets/imagens/img16.png'
import Img3 from '../../../assets/imagens/img17.png'
import Img4 from '../../../assets/imagens/img18.png'
export default function AboutComponent() {

    useEffect(() => {
        const imagesContainer = document.getElementById('images-container')
        const galeryImagesContainer = document.querySelectorAll('#galery-images-container')

        imagesContainer.addEventListener('mouseover', () => {
            galeryImagesContainer.forEach((galeryImagesContainer) => {
                galeryImagesContainer.style.gap = '10px'
                imagesContainer.style.gap = '10px'
            })
        })

        imagesContainer.addEventListener('mouseout', () => {
            galeryImagesContainer.forEach((galeryImagesContainer) => {
                galeryImagesContainer.style.gap = '0px'
                imagesContainer.style.gap = '0px'
            })
        })
    }, [])

    return (
        <div id="about" className="h-screen w-full flex justify-center items-center flex gap-10 relative">
            <div className='uppercase font-bold text-[8.5rem]  tracking-[-10px] top-0 left-5 inline-block text-[#0000000d] absolute'>contemporâneo</div>
            <div className='uppercase font-bold text-[8.5rem]  tracking-[-10px] bottom-0 right-5 inline-block text-[#0000000d] absolute'>Criatividade</div>
            <div className="w-[40vw] h-[70%] flex flex-col justify-center">
                <div className="mb-[-10px] font-semibold text-[3.5rem] tracking-[-2px] inline-block text-[#1a1a1a] uppercase">ARTE CONCEITOS</div>
                <div className="mb-[10px] font-semibold text-[1.5rem] mb-10 tracking-[-2px] inline-block text-[#1a1a1a] uppercase">ARTE CONCEITOS</div>
                <p className="font-ligth text-[1.1rem] tracking-[-1px] inline-block text-[#1a1a1a70]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed distinctio veritatis aspernatur iusto nam. Ipsam dignissimos quisquam consequuntur id! Beatae incidunt eveniet alias distinctio repudiandae, ut nostrum ipsum laborum?</p>
                <button className="font-semibold w-[200px] h-[50px] rounded-md mt-10 bg-[#1a1a1a] text-[1.2rem] tracking-[-2px] inline-block text-[#fff] uppercase">Saiba Mais</button>
            </div>
            <div id='images-container' className="transition-all duration-1000 ease-in-out w-[40vw] h-[60%] flex flex-col gap-[0px]">
                <div id='galery-images-container' className="transition-all duration-1000 ease-in-out flex w-full h-[50%] gap-[0px]">
                    <div className='w-[100%] h-[100%]'>
                        <img src={Img1} className="transition-all duration-1000 ease-in-out w-[100%] h-[100%] object-cover filter grayscale hover:filter-none" />
                    </div>
                    <div className='w-[100%] h-[100%]'>
                        <img src={Img2} className="transition-all duration-1000 ease-in-out w-[100%] h-[100%] object-cover filter grayscale hover:filter-none" />
                    </div>
                </div>
                <div id='galery-images-container' className="transition-all duration-1000 ease-in-out flex w-full h-[50%] gap-[0px]">
                    <div className='w-[100%] h-[100%]'>
                        <img src={Img3} className="transition-all duration-1000 ease-in-out w-[100%] h-[100%] object-cover filter grayscale hover:filter-none" />
                    </div>
                    <div className='w-[100%] h-[100%]'>
                        <img src={Img4} className="transition-all duration-1000 ease-in-out w-[100%] h-[100%] object-cover filter grayscale hover:filter-none" />
                    </div>
                </div>
            </div>
        </div>
    )

}