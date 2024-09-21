import leftWoman from '../assets/images/left-woman.png'
import rightWoman from '../assets/images/right-woman.png'
import ellipseWoman from '../assets/images/ellipse-woman.png'
import commas from '../assets/svgs/Coomas.svg'

export default function ClientFeedback() {
    return (
        <div className="grid grid-cols-3 bg-black h-fit">
            <img src={leftWoman} className="w-full"/>
            <div className="py-24 px-24 flex flex-col items-center">
                <h1 className="text-center text-white uppercase text-5xl">
                    What <span className="text-defaultBlue">our</span> clients say?
                </h1>
                <div className="border-2 border-defaultBlue w-64 my-4"></div>
                <span className="text-white tracking-wider uppercase">TESTIMONIALS</span>
                <div className="mt-32 rounded-3xl bg-bottom-top-to-almost-transparent h-fit px-16 py-8 mb-16">
                    <span className="text-white text-left text-xl font-thin tracking-wider">Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit </span>
                    <div className="flex mt-12 items-center">
                        <img src={ellipseWoman} className="mr-4"/>
                        <div className="flex flex-col justify-center mr-4">
                            <span className="text-white text-xl">
                                Carol Chaves
                            </span>
                            <span className="text-defaultBlue text-sm italic font-thin opacity-70">
                                @caroles.gmail.com
                            </span>
                        </div>
                        <div className="flex">
                            <img src={commas} className="w-8 h-8"/>
                        </div>
                    </div>
                </div>
                <button className="border-2 border-defaultBlue uppercase text-white w-fit tracking-wider py-2 px-4 text-xs">
                    VIEW ALL TESTIMONIALS
                </button>
            </div>
            <img src={rightWoman} className="w-full"/>
        </div>)
}