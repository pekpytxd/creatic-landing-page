import SvgIcon from '../assets/svgs/check-mark.svg'

export default function WhyUs() {
    return (<>
        <div className="bg-black px-20 py-8">
            <span className="text-white uppercase mb-4 bg-black">Why Us</span>
            <div className="border w-16 border-defaultBlue"></div>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-between bg-black h-fit px-16 pb-64">
            <div className="p-4">
                <h1 className="text-5xl uppercase text-white mb-12">25 years of <span
                    className="text-defaultBlue mb-2">experience</span> as a creative agency</h1>
                <button
                    className="text-white border-2 text-sm tracking-wide text-center uppercase px-4 py-2 w-32 border-defaultBlue mb-2">
                    Read More
                </button>
            </div>
            <div className="py-4 whitespace-normal w-1/2 gap-y-2">
                <div className="mb-4">
            <span className="text-left text-white mb-8">
                Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum
            </span>
                </div>
                <div className="flex inline mb-2">
                    <img className="mb-0 mr-2" src={SvgIcon}/>
                    <span className="text-white text-lg">Happy Customer</span>
                </div>
                <div className="flex inline mb-2">
                    <img className="mb-0 mr-2" src={SvgIcon}/>
                    <span className="text-white text-lg">Happy Customer</span>
                </div>
                <div className="flex inline mb-2">
                    <img className="mb-0 mr-2" src={SvgIcon}/>
                    <span className="text-white text-lg">Happy Customer</span>
                </div>
            </div>
        </div>
    </>)
}