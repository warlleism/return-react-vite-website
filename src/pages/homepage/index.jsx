import HeaderCompoent from "../../components/header";
import HomeComponent from "./components/home/text";
import AboutComponent from "./components/about";
import ImgBlocks from "./components/imgBlocks";
import Footer from "../../components/footer";
import CarouselCompoent from "./components/carousel";
import GaleryComponent from "./components/galery";
export default function Home() {

    return (
        <div>
            <HeaderCompoent />
            <HomeComponent />
            <AboutComponent />
            <ImgBlocks />
            <GaleryComponent />
            <CarouselCompoent />
            <Footer />
        </div>
    )
}