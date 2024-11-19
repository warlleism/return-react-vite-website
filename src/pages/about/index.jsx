import HeaderCompoent from "../../components/header";
import FooterCompoent from "../../components/footer";
import Img1 from "../../assets/imagens/img18.png";
import Img2 from "../../assets/imagens/img19.png";
import Img3 from "../../assets/imagens/img20.png";
import SectionWrapper from "../../components/sectionWrapper/sectionWrapper";
import './style.scss';

export default function About() {
    return (
        <>
            <HeaderCompoent />
            <div className="w-full flex flex-col items-center flex-wrap justify-center border-box p-40 lg-max:p-0 lg-max:pt-[120px] ">
                <div className="text-[3rem] font-light text-[#1a1a1a] text-center mb-[120px] lg-max:text-[2rem] lg-max:mb-[60px]">SOBRE NÓS</div>
                <div className="text-[1.2rem] font-light text-[#1a1a1a] text-start w-[60%] mb-20 flex flex-col gap-[140px] lg-max:w-[90%] lg-max:gap-[90px]">
                    <SectionWrapper style={'fade-in'}>
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex justify-between w-full lg-max:flex-col">
                                <div className="img-about w-[30%] h-[300px] lg-max:w-full">
                                    <img src={Img1} alt="Full image" className="object-cover rounded-[5px] img-about w-[100%] h-[100%]" />
                                </div>
                                <p className="text-about-container text-[1.3rem] w-[68%] tracking-tight lg-max:w-full lg-max:text-[1rem] lg-max:mt-9">
                                    Nosso compromisso é proporcionar um espaço onde a arte seja acessível a todos.
                                    Acreditamos que cada obra carrega uma história única, um olhar sobre o mundo
                                    e uma emoção que merece ser compartilhada. Nosso objetivo é conectar pessoas
                                    com a arte, promovendo uma troca cultural enriquecedora e incentivando o
                                    desenvolvimento criativo em todas as formas.
                                </p>
                            </div>
                            <p className="text-[1.3rem] tracking-tight lg-max:w-full lg-max:text-[1rem]">
                                Aqui, você encontrará não apenas exposições de obras fascinantes, mas também
                                recursos educativos que exploram as profundezas do universo artístico. Desde
                                tutoriais sobre técnicas clássicas e contemporâneas até histórias inspiradoras
                                de grandes artistas, queremos que você mergulhe no fascinante mundo da criatividade.
                            </p>
                            <p className="text-[1.3rem] tracking-tight lg-max:w-full lg-max:text-[1rem]">
                                Além disso, promovemos eventos e workshops para aqueles que desejam se aprofundar
                                no aprendizado prático. Seja você um amante da arte, um colecionador ou um
                                aspirante a artista, há algo aqui para inspirar sua paixão e ampliar seus horizontes.
                            </p>
                        </div>
                    </SectionWrapper>
                    <SectionWrapper style={'fade-in'}>
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex justify-between w-full lg-max:flex-col">
                                <div className="img-about w-[30%] h-[300px] lg-max:w-full">
                                    <img src={Img2} alt="Artistic representation" className="object-cover rounded-[5px] img-about w-[100%] h-[100%]" />
                                </div>
                                <div className="flex flex-col w-[68%] lg-max:w-full">
                                    <p className="text-about-container text-[1.3rem] w-[68%] tracking-tight lg-max:w-full lg-max:text-[1rem] lg-max:mt-9">
                                        Cada obra de arte é um universo em si, repleto de histórias, emoções e significados.
                                        Quem foram os mestres por trás dessas criações? Quais vivências os inspiraram?
                                        Nosso objetivo é revelar as narrativas ocultas, permitindo que você mergulhe mais
                                        profundamente no mundo artístico e compreenda a riqueza cultural por trás de cada peça.
                                    </p>
                                    <p className="text-[1.3rem] tracking-tight lg-max:w-full lg-max:text-[1rem]">
                                        No nosso portal, você embarca em uma viagem ao longo do tempo, explorando movimentos
                                        artísticos e suas influências.
                                    </p>
                                </div>
                            </div>
                            <p className="text-[1.3rem] tracking-tight lg-max:w-full lg-max:text-[1rem]">
                                Seja admirando as obras renascentistas ou descobrindo
                                as mais recentes tendências digitais, aqui você encontrará uma oportunidade única
                                de entender como a arte reflete a sociedade e molda o futuro.
                                Acreditamos que arte não é apenas algo para ser visto, mas também experimentado. Por isso,
                                criamos um espaço onde curiosidade e aprendizado se encontram, revelando a evolução da
                                criatividade humana e como ela transcende fronteiras.
                            </p>
                        </div>
                    </SectionWrapper>
                    <SectionWrapper style={'fade-in'}>
                        <div className="flex flex-col gap-5 w-full">
                            <div className="flex justify-between w-full lg-max:flex-col">
                                <div className="img-about w-[30%] h-[300px] lg-max:w-full">
                                    <img src={Img3} alt="Inspiring art" className="object-cover rounded-[5px] img-about w-[100%] h-[100%]" />
                                </div>
                                <div className="flex flex-col w-[68%] lg-max:w-full">
                                    <p className="text-about-container text-[1.3rem] w-[68%] tracking-tight lg-max:w-full lg-max:text-[1rem] lg-max:mt-9">
                                        Nossa visão é transformar a arte em um elo de conexão entre pessoas de todos os
                                        lugares. Através de exposições, discussões e compartilhamento, buscamos criar
                                        um ambiente onde a troca de ideias flua livremente, enriquecendo todos os envolvidos.
                                    </p>
                                    <p className="text-[1.3rem] tracking-tight lg-max:w-full lg-max:text-[1rem]">
                                        Ao visitar nosso espaço, você está contribuindo para um movimento que valoriza a
                                        expressão criativa em todas as suas formas. Junte-se a nós para celebrar o poder
                                        transformador da arte, construindo pontes entre culturas e promovendo um futuro mais vibrante.
                                    </p>
                                </div>
                            </div>
                            <p className="text-[1.3rem] tracking-tight lg-max:w-full lg-max:text-[1rem]">
                                Seja você um criador, apreciador ou apenas curioso, este é o seu lugar para se inspirar, aprender
                                e crescer. Descubra um universo de cores, formas e significados que desafiam o comum e celebram
                                o extraordinário.
                            </p>
                        </div>
                    </SectionWrapper>
                </div>
            </div>
            <FooterCompoent />
        </>
    );
}
