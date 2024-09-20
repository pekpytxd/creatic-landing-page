import robotImg from '../assets/images/ai-robot.png';

export default function About() {
    return (<div className="w-full bg-black h-dvh">
        <div className="grid grid-cols-2 gap-2">
            <div className="relative h-dvh">
                <div className="mt-20">
                    <img src={robotImg} alt="robot" className="absolute inset-0 w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-transparent-to-blue to-transparent"></div>
                </div>
            </div>
            <div className="flex flex-col justify-center space-y-4 w-3/4">
                    <span className="text-2xl text-defaultBlue uppercase mb-8">
                        About us
                    </span>
                <h1 className="text-white mt-2 text-6xl">
                    We Bring <span className="inline text-defaultBlue">Creative</span> ideas to life.
                </h1>
                <div className="border w-1/6"></div>
                <span className="text-xl text-defaultBlue">
                        We love Creating
                    </span>
                <span className="text-xl text-white">
                        Lorem ipsumNeque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum
                </span>
                <span className="text-xl text-white">
Neque porro Neque porro
                        Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Lorem ipsum Neque quis ipsum                </span>
                <button className="border-2 border-defaultBlue uppercase text-white w-32 h-8 text-xs">
                    Read More
                </button>
            </div>
        </div>
    </div>)
}