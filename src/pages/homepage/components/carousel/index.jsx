import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Itens } from "./itens";
import { useState } from "react";
import SectionWrapper from '../../../../components/sectionWrapper/sectionWrapper'

export default function CarouselComponent() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        const carousel = document.getElementById("carousel");
        carousel.style.opacity = 0;
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % Itens.length);
            carousel.style.opacity = 1;
        }, 1000)
    };

    const handlePrev = () => {
        const carousel = document.getElementById("carousel");
        carousel.style.opacity = 0;
        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex - 1 + Itens.length) % Itens.length);
            carousel.style.opacity = 1;
        }, 1000)
    };

    const currentItem = Itens[index];

    return (
        <SectionWrapper style={'fade-in-left'} >
            <div className="w-full h-[100vh] flex Itens-center justify-center">
                <div className="m-auto w-[70%] h-[70%] bg-[#fff] shadow-2xl overflow-hidden sm-max:w-[90%] lg-max:w-[90%]">
                    {currentItem && (
                        <div id="carousel" className="flex flex-col gap-10 w-full h-[100%] border-box p-10 justify-center transition-all duration-1000 ease-in-out md-max:gap-0 md-max:justify-start">
                            <div className="text-[3rem] font-semibold h-[20%] flex Itens-center justify-start text-center text-[#1a1a1a] md-max:text-[2rem] sm-max:h-[15%]">
                                {currentItem.title}
                            </div>
                            <div className="flex md-max:flex-col justify-between h-[70%]">
                                <div className="w-[35%] md-max:w-[100%] h-full relative">
                                    {currentItem.url && (
                                        <div
                                            dangerouslySetInnerHTML={{ __html: currentItem.url }}
                                            className="w-full h-full"
                                        />
                                    )}
                                </div>
                                <div className="w-[60%] h-full md-max:w-full md-max:mt-2">
                                    <div className="font-semibold text-[1.6rem] xl-max:text-[1rem] text-[#454545]">"{currentItem.description}"</div>
                                    <div className="font-light text-[1rem] xl-max:text-[.8rem] box-border py-4 ">{currentItem.text}</div>
                                    <div className="flex gap-3 Itens-center mt-10 md-max:mt-0">
                                        <button
                                            className="border-2 border-[#000] rounded-full p-3 cursor-pointer"
                                            onClick={handlePrev}
                                        >
                                            <FaArrowLeftLong className="text-[1rem]" />
                                        </button>
                                        <button
                                            className="border-2 border-[#000] rounded-full p-3 cursor-pointer"
                                            onClick={handleNext}
                                        >
                                            <FaArrowRightLong className="text-[1rem]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </SectionWrapper>

    );
}
