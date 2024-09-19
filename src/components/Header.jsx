import HeaderMenuItem from "./HeaderMenuItem.jsx";
import {FaSearch} from "react-icons/fa";

export default function Header() {

    const menuItems = ['Home', 'About us', 'Services', 'Portfolio', 'Pages', 'Contact Us'];

    return (
        <>
            <div className=" bg-gradient-to-r from-transparent to-black">
                <div className="bg-black w-full h-24">
                    <div className="pt-2 pl-0 px-16  grid grid-cols-2 items-center">
                        <div className="mr-64">
                            <h1 className="text-defaultBlue text-4xl uppercase text-center mt-2">Creatic</h1>
                            <span className="uppercase text-white text-xs block text-center">Creative agency</span>
                        </div>
                        <div className="menu-items flex items-center justify-end mr-16 mt-2 space-x-4">
                            {menuItems.map((menuItem, index) => (
                                <HeaderMenuItem key={index} menuItem={menuItem}/>
                            ))}
                            <FaSearch className="text-defaultBlue hover:text-white cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}