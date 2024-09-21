import facebook from '../assets/svgs/facebook.svg'
import instagram from '../assets/svgs/instagram.svg'
import whatsapp from '../assets/svgs/whatsapp.svg'
import linkedin from '../assets/svgs/linkedin.svg'
import pinterest from '../assets/svgs/pinterest.svg'
import twitter from '../assets/svgs/twitter.svg'

export default function Footer() {
    const categories = ['Categories', 'About', 'Services', 'Portfolio', 'Pages', 'Support'];
    const icons = [facebook, instagram, whatsapp, linkedin, pinterest, twitter]
    return (
        <div className="flex flex-col items-center bg-black bg-top-bottom-to-almost-transparent h-[32.57rem] py-4">
            <h1 className="text-defaultBlue uppercase text-5xl my-2">Creatic</h1>
            <span className="uppercase tracking-wider text-white text-xl font-thin">Creative agency</span>
            <div className="border text-white w-32 my-4"></div>
            <div className="flex inline gap-8 mb-4">
                {categories.map((category, i) => (
                    <span key={i} className="text-defaultBlue text-2xl">
                        {category}
                    </span>
                ))}
            </div>
            <div className="w-1/3 flex items-center justify-center my-8">
            <span className="text-white text-center text-xl">
                Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque
            </span>
            </div>
            <div className="flex inline gap-8 mt-2">
                {icons.map((icon, i) => (
                    <img key={i} src={icon} className="text-defaultBlue text-2xl" />
                ))}
            </div>
            <span className="text-white mt-auto">Copyright © 2003-2023 Creatic Agency All rights reserved.</span>
        </div>
    )
}