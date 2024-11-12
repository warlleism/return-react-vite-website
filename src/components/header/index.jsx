import './style.scss'
export default function HeaderCompoent() {
    return (
        <div className='h-[10vh] flex box-border px-10 items-center justify-between bg-[#fbfbfb]'>
            <a href='/'>
                <div className='title text-3xl font-light relative inline-block'>VIVARTE</div>
            </a>
            <ul className='flex gap-6 items-center list-none ml-[878px] '>
                <li><a href='/' className='font-semibold tracking-tight text-base text-[#040404b6] no-underline'>Início</a></li>
                <li><a href='#' className='font-semibold tracking-tight text-base text-[#040404b6] no-underline'>Galeria</a></li>
                <li><a href='#' className='font-semibold tracking-tight text-base text-[#040404b6] no-underline'>Sobre</a></li>
                <li><a href='#' className='font-semibold tracking-tight text-base text-[#040404b6] no-underline'>Serviços</a></li>
            </ul>
            <a href='/contacts' className='hover:bg-[#0a0a0a] hover:text-[#fff] button-contact flex gap-1.5 cursor-pointer font-medium px-5 py-2.5 items-center bg-[#fbfbfb] text-[#0a0a0a] transition ease-in-out duration-500 no-underline rounded-bl-md border-l border-b border-[#0a0a0a]'>
                <span className="material-symbols-outlined">
                    call
                </span>
                Contato
            </a>
        </div>
    )
}
