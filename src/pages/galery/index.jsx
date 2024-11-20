import { artGallery } from "./images";
import HeaderCompoent from "../../components/header";
import { MdDownload } from "react-icons/md";
import { FaExpand } from "react-icons/fa";
import { useCallback, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiZoomIn } from "react-icons/ci";
import { CiZoomOut } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import FooterCompoent from "../../components/footer";

export default function Galery() {
    const [images, setImage] = useState('');
    const [zoom, setZoom] = useState(1);
    const [filteredImage, setFilteredImage] = useState([]);
    const data = filteredImage.length !== 0 ? filteredImage : artGallery;

    const handleZoom = useCallback(() => {
        setZoom((prevZoom) => (prevZoom === 1 ? 2 : 1));
    }, [zoom]);

    const handleModal = useCallback((image) => {
        setZoom(1);
        setImage(image || '');
    }, [zoom]);

    const handleFilter = useCallback((e) => {
        const gallery = document.getElementById('gallery-container');
        gallery.style.opacity = 0;

        setTimeout(() => {
            const value = e.target.value.toLowerCase();
            const filtered = artGallery.filter((item) =>
                item.title.toLowerCase().trim().includes(value.trim())
            );
            setFilteredImage(filtered.length === 0 ? artGallery : filtered);
        }, 900)

        setTimeout(() => {
            gallery.style.opacity = 1;
        }, 900)
    }, []);

    return (
        <>
            {
                images && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  z-30 cursor-">
                        <div className="absolute top-2 right-5 text-[3rem] text-white cursor-pointer flex gap-2 z-50">
                            {
                                zoom == 2 ?
                                    <div><CiZoomOut onClick={() => handleZoom()} className="transition-all duration-1000 ease-in-out hover:scale-125" /></div>
                                    :
                                    <div><CiZoomIn onClick={() => handleZoom()} className="transition-all duration-1000 ease-in-out hover:scale-125" /></div>
                            }
                            <a href={images} download={`image.jpg`}>
                                <MdDownload className="transition-all duration-1000 ease-in-out hover:scale-125" />
                            </a>
                            <IoClose className="transition-all duration-1000 ease-in-out hover:scale-125" onClick={() => handleModal('')} />
                        </div>
                        <img src={images} alt="Full image" className={`w-[50%] h-[80%] object-cover z-50 ${zoom == 2 ? 'scale-125' : ''}  transition-all duration-1000 ease-in-out md-max:w-[90%] h-[40%]`} />
                        <div className="absolute w-full z-40 h-full left-0 top-0 bg-[#0000004f]" onClick={() => handleModal('')} />
                    </div>
                )
            }
            <HeaderCompoent />
            <div className="w-full flex flex-col items-center flex-wrap justify-center border-box py-40">
                <div className="text-[3rem] font-ligth text-[#1a1a1a] text-center mb-5">GALERIA</div>
                <div className="text-[1.2rem] font-light text-[#1a1a1a] text-center w-[60%] mb-20 flex md-max:text-[1rem] md-max:w-[90%] ">
                    Aqui você encontrará um espaço dedicado à expressão criativa, onde a arte ganha vida em formas, cores e texturas.
                    Minha paixão por arte plástica se manifesta em obras que exploram sentimentos, perspectivas e histórias, conectando o espectador a um mundo de possibilidades visuais.
                </div>
                <div className="justify-center w-full mb-5">
                    <div className="flex items-center w-[90%] m-auto shadow-lg h-[5vh] rounded-[100px] overflow-hidden">
                        <div className="h-full w-[3%] flex items-center justify-center bg-[#1c1c1c] lg-max:w-[10%]">
                            <CiSearch className=" text-[#fff] text-[2rem] md-max:text-[1.3rem]" />
                        </div>
                        <input type="text" className="w-[97%] h-[100%] outline-none border-box pl-5 bg-[#dddddd] lg-max:w-[90%]" onChange={(e) => handleFilter(e)} />
                    </div>
                </div>
                <div id="gallery-container" className="w-full flex items-center flex-wrap justify-center transition-all duration-1000 ease-in-out">
                    {data.map((image, index) => (
                        <div key={index} className="w-[30vw] h-[50vh] relative flex items-center justify-center hover:scale-105 hover:z-10 transition-all duration-1000 ease-in-out lg-max:w-[30vw] lg-max:h-[30vh]">
                            <div className="absolute flex justify-center items-center w-[100%] h-[100%] bg-[#0000004f] text-center text-white text-[2rem] hover:hover:opacity-0 transition-all duration-1000 ease-in-out lg-max:text-[.8rem] ">
                                {image.title}
                            </div>
                            <div className="absolute top-2 left-2 text-[2rem] text-white  flex gap-2 cursor-pointer">
                                <FaExpand className="transition-all duration-1000 ease-in-out hover:scale-125 bg-[#ffffffcf] text-[#000] rounded-[5px] p-1" onClick={() => handleModal(image.url)} />
                                <a href={image.url} download={`image-${index + 1}.jpg`}>
                                    <MdDownload className="transition-all duration-1000 ease-in-out hover:scale-125 bg-[#ffffffcf] text-[#000] rounded-[5px] p-1" />
                                </a>
                            </div>
                            <div className="transition-all duration-1000 ease-in-out w-[100%] h-[100%] flex items-center justify-center cursor-pointer ">
                                <img src={image.url} alt={`Gallery image ${index + 1}`} className="w-[100%] h-[100%] object-cover" onClick={() => handleModal(image.url)} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterCompoent />
        </>
    );
}
