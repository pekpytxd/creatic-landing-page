import {ServiceCard} from "./ServiceCard.jsx";
import {serviceCards} from "../data/service-cards-data.js";

export default function OurService() {
    return (
        <div className="w-full bg-black h-dvh">
            <div className="grid grid-cols-2 h-screen gap-2">
                <div className="flex justify-center items-center h-screen">
                    <div className="flex flex-col justify-center space-y-4 w-3/4">
                    <span className="text-2xl text-defaultBlue uppercase mb-8">
                        our services
                    </span>
                        <h1 className="text-white mt-2 text-6xl">
                            Experience the power of <span className="inline text-defaultBlue">Innovation</span>
                        </h1>
                        <div className="border w-1/6"></div>
                        <span className="text-xl text-white">
                        Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Neque porro quisquam est qui do lorem ipsum quia dolor sit amets ipsum                     </span>
                        <button className="border-2 border-defaultBlue uppercase text-white w-32 h-8 text-xs">
                            VIEW ALL
                        </button>
                    </div>
                </div>
                <div className="grid gap-0 justify-center items-center">
                    <div className="grid grid-cols-2 gap-0">
                        {serviceCards.map((card, index) => (
                            <ServiceCard key={index} serviceCard={card}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}