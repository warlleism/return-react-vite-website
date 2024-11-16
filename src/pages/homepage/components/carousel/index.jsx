import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { Items } from "./items";
import { useEffect, useState } from "react";

export default function CarouselComponent() {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        const carousel = document.getElementById("carousel");
        carousel.style.opacity = 0;
        carousel.style.transform = "translateX(100%)";

        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex + 1) % Items.length);
            carousel.style.opacity = 1;
            carousel.style.transform = "translateX(0%)";
        }, 1000)

    };

    const handlePrev = () => {
        const carousel = document.getElementById("carousel");
        carousel.style.opacity = 0;
        carousel.style.transform = "translateX(-100%)";

        setTimeout(() => {
            setIndex((prevIndex) => (prevIndex - 1 + Items.length) % Items.length);
            carousel.style.opacity = 1;
            carousel.style.transform = "translateX(0%)";

        }, 1000)

    };

    const currentItem = Items[index];


    return (
        <div className="w-full border-box px-10 py-10 h-[100vh] flex items-center justify-center">
            <div className="m-auto w-[70%] bg-[#fff] shadow-2xl overflow-hidden rounded-[20px]">
                {currentItem && (
                    <div id="carousel" className="flex  flex-col gap-10 w-full h-[80%] border-box p-10 justify-center transition-all duration-1000 ease-in-out">
                        <div className="text-[3rem] font-semibold h-[20%] flex items-center justify-start text-center">
                            {currentItem.title}
                        </div>
                        <div className="flex justify-between h-[70%]">
                            <div className="w-[35%] h-full object-cover">
                                <img
                                    src={currentItem.image}
                                    alt={currentItem.title}
                                    className="w-[100%] h-[100%] rounded-lg object-cover"
                                />
                            </div>
                            <div className="w-[60%] h-full">
                                <div className="font-semibold text-[1.6rem] ">"{currentItem.description}"</div>
                                <div className="font-light text-[1rem] box-border py-4">{currentItem.text}</div>
                                <div className="flex gap-3 items-center mt-10">
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
    );
}
