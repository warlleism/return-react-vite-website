import './style.scss'
import Img1 from '../../../../assets/imagens/img1.png'
import Img2 from '../../../../assets/imagens/img6.png'
import Img3 from '../../../../assets/imagens/img10.png'
import SectionWrapper from '../../../../components/sectionWrapper/sectionWrapper'

export default function ImgBlocks() {

    return (
        <SectionWrapper style={'fade-in'}>
            <div className="w-full h-[270vh] mb-10 overflow-hidden relative lg-max:hidden">
                <div className='w-[60%] m-auto mt-[120px] mb-[120px] text-center text-[#1a1a1aa3] text-2xl font-light'>A arte é o encontro da criatividade com a emoção. Ela traduz sentimentos em imagens, sons e gestos, comunicando o que palavras não conseguem expressar. Seja visual, sonora ou performática, a arte conecta pessoas, inspira reflexões e celebra a beleza do mundo, transformando realidades e tocando o coração humano.</div>
                <div className='w-[56vw] h-full relative  m-auto'>
                    <div id='first-block' className="w-[30vw] h-[60vh] absolute left-0 bg-[#1a1a1a] ">
                        <div id='img-content' className='border-[#1a1a1a] border-[80px] w-full h-full'>
                            <img src={Img1} className='w-full h-full border-[#fff] border-[20px] transition-all duration-1000 ease-in-out w-full h-full filter grayscale object-cover hover:filter-none' />
                        </div>
                    </div>
                    <div id='second-block' className="w-[30vw] h-[60vh] absolute right-0 top-[80vh] bg-[#1a1a1a]">
                        <div id='img-content' className='border-[#1a1a1a] border-[80px] w-full h-full'>
                            <img src={Img2} className='w-full h-full border-[#fff] border-[20px] transition-all duration-1000 ease-in-out w-full h-full filter grayscale object-cover hover:filter-none' />
                        </div>
                    </div>
                    <div id='third-block' className="w-[30vw] h-[60vh] absolute left-0 top-[160vh] bg-[#1a1a1a]">
                        <div id='img-content' className='border-[#1a1a1a] border-[80px] w-full h-full'>
                            <img src={Img3} className='w-full h-full border-[#fff] border-[20px] transition-all duration-1000 ease-in-out w-full h-full filter grayscale object-cover hover:filter-none' />
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>

    )
}