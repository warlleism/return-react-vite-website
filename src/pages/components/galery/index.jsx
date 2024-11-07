import { useEffect, useState } from "react"
import { Images } from "./images";
import './style.scss'
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
                setActive((prev) => ({
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
        <div id="galery" className="galery">
            {
                Images.map((image, index) => {
                    return (
                        <div key={index}
                            id="image"
                            className="card"
                            onClick={() => handleClick(index)} style={{
                                transform: active.active && active.block !== index ? 'scale(0.8)' : 'scale(1)',
                            }}>
                            <img src={image.imagens[0]} style={{ pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', objectFit: 'cover', zIndex: 5, transition: ".6s ease-in-out" }} />
                            <img src={image.imagens[1]} style={{ pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', objectFit: 'cover', zIndex: 4, transition: ".6s ease-in-out" }} />
                            <img src={image.imagens[2]} style={{ pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', objectFit: 'cover', zIndex: 3, transition: ".6s ease-in-out" }} />
                            <img src={image.imagens[3]} style={{ pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', objectFit: 'cover', zIndex: 2, transition: ".6s ease-in-out" }} />
                            <img src={image.imagens[4]} style={{ pointerEvents: 'none', borderRadius: active.active ? 5 : 0, marginBottom: active.active && active.block == index ? '20px' : '0', position: active.active && active.block == index ? 'relative' : 'absolute', width: '100%', height: active.active && active.block == index ? '420px' : '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', objectFit: 'cover', zIndex: 1, transition: ".6s ease-in-out" }} />
                        </div>

                    )
                })
            }


        </div>
    )
}
