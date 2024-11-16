import HeaderCompoent from "../../components/header";
import HomeComponent from "./home/text";
import AboutComponent from "./about";
import ImgBlocks from "./imgBlocks";
export default function Home() {

    return (
        <div style={{ backgroundColor: '#1a1a1a' }}>
            <HeaderCompoent />
            <HomeComponent />
            <AboutComponent />
            <ImgBlocks />
        </div>
    )
}