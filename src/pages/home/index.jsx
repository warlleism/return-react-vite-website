import GaleryCaroussel from "./components/galery"
import Header from "../../components/header"
import HeaderText from "./components/text"

export default function Home() {
    return (
        <div style={{ backgroundColor: '#fbfbfb' }}>
            <Header />
            <HeaderText />
            <GaleryCaroussel />
        </div>
    )
}