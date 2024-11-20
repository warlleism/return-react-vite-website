import Img from "../../../../assets/imagens/bg-galery-homepage.png";

export default function GaleryComponent() {

    return (
        <div
            className="w-full h-[130vh] transition-all duration-1000 ease-in-out relative flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat bg-fixed md-max:h-[70vh]"
            style={{ backgroundImage: `url(${Img})` }}
        >
            <h1 className="text-[#fff] text-[10rem] font-light z-40 lg-max:text-[5rem]">ARTE</h1>
            <p className="text-[#fff] text-[1.4rem] font-light text-center w-[50%] z-40 lg-max:text-[.9rem] lg-max:w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident porro soluta incidunt ducimus laudantium facere corporis harum fugiat, nesciunt ullam aspernatur deleniti omnis aperiam dignissimos temporibus consectetur. Obcaecati, aliquam quos!</p>
            <button className="text-[#1a1a1a] text-[1.4rem] font-light text-center w-[200px] h-[50px] rounded-md mt-5 z-40 cursor-pointer bg-[#fff]"><a href="/galery" className="w-full h-full flex items-center justify-center font-semibold">Veja mais</a></button>
        </div>
    )
}