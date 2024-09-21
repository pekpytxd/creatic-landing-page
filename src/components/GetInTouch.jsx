import geolocation from '../assets/svgs/geolocation.svg'
import phone from '../assets/svgs/mobile-phone.svg'
import mail from '../assets/svgs/gmail.svg'

export default function GetInTouch() {

    const data = [
        {
            title: 'Office Address',
            info: '98, Arca St, PR City, 33414 , Indonesia',
            image: geolocation
        },
        {
            title: 'Call Us',
            info: '(+BK) 123 456 7891',
            image: phone
        },
        {
            title: 'Mail Us',
            info: 'info@creaticagency.com',
            image: mail
        }
    ]

    return (
        <div className="grid grid-cols-2 gap-24 bg-black h-fit py-36 px-72">
            <div className="h-[32rem]">
                <h1 className="text-white uppercase text-5xl mb-4">Get in <span
                    className="text-defaultBlue">Touch</span>
                </h1>
                <div className="border font-thin text-white w-28 mb-4"></div>
                <span className="text-white tracking-wider font-thin text-xl">Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro </span>
                <div className="mt-16">
                    {data.map((card, index) => (
                        <div key={index} className="flex mt-12 items-center">
                            <img src={card.image} className="mr-4"/>
                            <div className="flex flex-col justify-center mr-4">
                            <span className="text-white text-xl">
                                {card.title}
                            </span>
                                <span className="text-defaultBlue text-sm italic font-thin opacity-70">
                                {card.info}
                            </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="h-[38rem] bg-bottom-top-to-almost-transparent w-[33.8rem] rounded-[34px] py-16 px-16">
                <div className="mb-3">
                    <span className="text-white uppercase text-xl tracking-wider font-thin">
                        Your name
                    </span>
                    <input className="border border-white w-full bg-transparent h-12 mt-2"/>
                </div>
                <div className="mb-3">
                    <span className="text-white uppercase text-xl tracking-wider font-thin">
                        Your name
                    </span>
                    <input className="border border-white w-full bg-transparent h-12 mt-2"/>
                </div>
                <div className="mb-3">
                    <span className="text-white uppercase text-xl tracking-wider font-thin">
                        Your name
                    </span>
                    <textarea className="border border-white w-full bg-transparent h-44 mt-2"/>
                </div>
                <div className="flex flex-row justify-center mt-2">
                    <button className="bg-defaultBlue uppercase p-3">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    )
}