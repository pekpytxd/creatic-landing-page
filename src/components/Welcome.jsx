import womanImg from '../assets/images/woman.png';

export default function Welcome() {
    return (<>
        <div className="w-full bg-black h-dvh">
            <div className="grid grid-cols-2">
                <div className="flex flex-col ml-32 mt-40">
                    <span className="uppercase text-defaultBlue mb-12">Welcome to Creatic</span>
                    <h1 className="uppercase text-white mt-2 text-6xl">
                        We are <span className="text-defaultBlue">creative</span> design agency
                    </h1>
                    <div className="border-t-2 border-defaultBlue my-6 w-1/6"></div>
                    <span className="text-white mb-4 text-xl">Lorem ipsumNeque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit Neque porro elit Neque porro quis ipsum</span>
                    <button className="border-2 mt-4 border-defaultBlue uppercase text-white w-32 h-8 text-xs">Get in
                        touch
                    </button>
                </div>
                <div className="relative h-dvh">
                    <div className="mt-20">
                        <img src={womanImg} alt="pidaraska" className="absolute inset-0 w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-blue-to-transparent-80 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}