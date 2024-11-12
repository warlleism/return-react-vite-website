import { useEffect, useState } from "react"
import { Images } from "./images";
export default function GaleryCaroussel() {

    const [active, setActive] = useState({
        block: 0,
        active: false
    })

    const handleClick = (block) => {

        if (!block) {
            setActive((prev) => ({
                block: prev.block,
                active: false
            }))
        }
        const image = document.querySelectorAll('#image')

        image.forEach((img, index) => {
            if (index === block) {
                setActive(() => ({
                    block,
                    active: true
                }))
                img.style.height = '100%'
            } else {
                img.style.height = '300px'
            }
        })
    }

    useEffect(() => {
        document.addEventListener('click', (event) => {
            if (event.target.id !== 'image') {
                handleClick()
            }
        })
    }, [])

    return (
        <div id="galery" className="w-full h-[90vh] flex  items-center justify-center transition-all duration-1000">
            {
                Images?.map((image, index) => {
                    return (
                        <div key={index}
                            id="image"
                            className="w-full h-[300px] relative transition-all duration-1000 ease-in-out overflow-y-auto scrollbar-none scroll-smooth cursor-pointer"
                            onClick={() => handleClick(index)} style={{
                                transform: active.active && active.block !== index ? 'scale(0.8)' : 'scale(1)',
                            }}>
                            <img src={image.imagens[0]} className="flex justify-center items-center object-cover z-50 transition-all duration-1000 ease-in-out" style={{ filter: active.active && active.block == index ? 'grayscale(0%)' : 'grayscale(100%)', pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%' }} />
                            <img src={image.imagens[1]} className="flex justify-center items-center object-cover z-40 transition-all duration-1000 ease-in-out" style={{ filter: active.active && active.block == index ? 'grayscale(0%)' : 'grayscale(100%)', pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%' }} />
                            <img src={image.imagens[2]} className="flex justify-center items-center object-cover z-30 transition-all duration-1000 ease-in-out" style={{ filter: active.active && active.block == index ? 'grayscale(0%)' : 'grayscale(100%)', pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%' }} />
                            <img src={image.imagens[3]} className="flex justify-center items-center object-cover z-20 transition-all duration-1000 ease-in-out" style={{ filter: active.active && active.block == index ? 'grayscale(0%)' : 'grayscale(100%)', pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%' }} />
                            <img src={image.imagens[4]} className="flex justify-center items-center object-cover z-10 transition-all duration-1000 ease-in-out" style={{ filter: active.active && active.block == index ? 'grayscale(0%)' : 'grayscale(100%)', pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%' }} />
                        </div>
                    )
                })
            }
        </div>
    )
}
