import GaleryCarousselCompoent from "./home/galery"
import HeaderCompoent from "../../components/header"
import HeaderTextCompoent from "./home/text"
import AboutComponent from "./about"

export default function Home() {
    return (
        <div style={{ backgroundColor: '#fbfbfb' }}>
            <HeaderCompoent />
            <HeaderTextCompoent />
            <GaleryCarousselCompoent />
            <AboutComponent />
        </div>
    )
}