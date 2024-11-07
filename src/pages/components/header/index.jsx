import './style.scss'
export default function Header() {
    return (
        <div className='header-container'>
            <a href='#' style={{ color: "#040404" }}><h1 className='title'>NATURE</h1></a>
            <ul>
                <li><a href='#'>Início</a></li>
                <li><a href='#'>Sobre</a></li>
                <li><a href='#'>Serviços</a></li>
                <li><a href='#'>Galeria</a></li>
            </ul>
            <buttom className='button-contact'>
                <span class="material-symbols-outlined">
                    call
                </span>
                Contato</buttom>
        </div>
    )
}
