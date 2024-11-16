import Img1 from '../../../assets/imagens/img15.png'
import Img2 from '../../../assets/imagens/img16.png'
import Img3 from '../../../assets/imagens/img17.png'
import Img4 from '../../../assets/imagens/img18.png'
import Img5 from '../../../assets/imagens/img19.png'
import SectionWrapper from '../../../components/sectionWrapper/sectionWrapper'
export default function AboutComponent() {

    return (
        <SectionWrapper style={'fade-in'} >
            <div id="about" className="h-screen w-full flex justify-center items-center flex gap-10 relative overflow-hidden">
                <div className='uppercase font-bold text-[20.5rem] tracking-[-10px] top-0 left-[10px] inline-block text-[#4543431a] absolute'>contemporâneo</div>
                <div className='uppercase font-bold text-[20.5rem] tracking-[-10px] bottom-0 left-[10px] inline-block text-[#4543431a] absolute'>Criatividade</div>
                <div className="w-[40vw] h-[70%] flex flex-col justify-center">
                    <div className="mb-[-10px] font-semibold text-[3.5rem] tracking-[-2px] inline-block text-[#fff] uppercase">ARTE CONCEITOS</div>
                    <div className="mb-[10px] font-semibold text-[1.5rem] mb-10 tracking-[-2px] inline-block text-[#fff] uppercase">ARTE CONCEITOS</div>
                    <p className="font-ligth text-[1.1rem] tracking-[-1px] inline-block text-[#fff]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed distinctio veritatis aspernatur iusto nam. Ipsam dignissimos quisquam consequuntur id! Beatae incidunt eveniet alias distinctio repudiandae, ut nostrum ipsum laborum?</p>
                    <button className="font-semibold w-[200px] h-[50px] rounded-md mt-5 z-30 cursor-pointer bg-[#fff] text-[1.2rem] tracking-[-2px] inline-block text-[#0a0a0a] uppercase">Saiba Mais</button>
                </div>
                <div className="transition-all duration-1000 ease-in-out w-[40vw] h-[60%] flex flex-col">
                    <div className="transition-all duration-1000 ease-in-out flex w-full h-[50%]">
                        <div className='w-[33.3%] h-[100%] hover:z-50'>
                            <img src={Img1} className="transition-all duration-1000 ease-in-out w-[100%] h-[100%] object-cover filter grayscale hover:filter-none hover:scale-125" />
                        </div>
                        <div className='w-[33.3%] h-[100%] hover:z-50'>
                            <img src={Img5} className="transition-all duration-1000 ease-in-out w-[100%] h-[100%] object-cover filter grayscale hover:filter-none hover:scale-125" />
                        </div>
                        <div className='w-[33.3%] h-[100%] hover:z-50'>
                            <img src={Img2} className="transition-all duration-1000 ease-in-out w-[100%] h-[100%] object-cover filter grayscale hover:filter-none hover:scale-125" />
                        </div>
                    </div>
                    <div className="transition-all duration-1000 ease-in-out flex w-full h-[50%] gap-0">
                        <div className="w-[50%] h-[100%] hover:z-50 p-0 m-[-.3px]">
                            <img src={Img3} className="transition-all duration-1000 ease-in-out w-full h-full object-cover filter grayscale hover:filter-none hover:scale-125 block" />
                        </div>
                        <div className="w-[50%] h-[100%] hover:z-50 p-0 m-[0px]">
                            <img src={Img4} className="transition-all duration-1000 ease-in-out w-full h-full object-cover filter grayscale hover:filter-none hover:scale-125 block" />
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>

    )

}