import { useTranslation } from 'react-i18next'
import Img1 from '../../../../assets/imagens/img15.png'
import Img2 from '../../../../assets/imagens/img16.png'
import Img3 from '../../../../assets/imagens/img17.png'
import Img4 from '../../../../assets/imagens/img18.png'
import Img5 from '../../../../assets/imagens/img19.png'
import SectionWrapper from '../../../../components/sectionWrapper/sectionWrapper'
export default function AboutComponent() {


    const [t] = useTranslation("global");

    return (
        <SectionWrapper style={'fade-in-left'}>
            <div id="about" className="h-screen w-full flex md-max:flex-col justify-center items-center flex gap-10 relative overflow-hidden">
                <div className='uppercase font-bold text-[20.5rem] tracking-[-10px] top-0 left-[10px] inline-block text-[#4543431a] absolute'>{t("home-page.about.bg-text-1")}</div>
                <div className='uppercase font-bold text-[20.5rem] tracking-[-10px] bottom-0 left-[10px] inline-block text-[#4543431a] absolute'>{t("home-page.about.bg-text-2")}</div>
                <div className="w-[40vw] h-[70%] md-max:w-[90%] md-max:h-[40%] flex flex-col justify-center">
                    <div className="mb-[-10px] font-semibold text-[3.5rem] md-max:text-[2rem] tracking-[-2px] inline-block text-[#1a1a1a] uppercase">{t("home-page.about.title")}</div>
                    <div className="mb-[10px] font-semibold text-[1.5rem] md-max:text-[.8rem] mb-10 tracking-[-2px] inline-block text-[#1a1a1a] uppercase">{t("home-page.about.title")}</div>
                    <p className="font-ligth text-[1.1rem] md-max:text-[.8rem] tracking-[-1px] inline-block text-[#1a1a1a]">{t("home-page.about.description")}</p>
                    <a href='/galery' className="font-semibold w-[200px] h-[50px] rounded-md mt-5 z-30 cursor-pointer bg-[#1a1a1a] text-[1.2rem] text-[#fff] uppercase flex justify-center items-center items-center">{t("home-page.about.button")}</a>
                </div>
                <div className="transition-all duration-1000 ease-in-out w-[40vw] md-max:w-[90%] md-max:h-[40%] h-[60%] flex flex-col">
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