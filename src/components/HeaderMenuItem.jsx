export default function HeaderMenuItem({menuItem}) {
    return (
        <>
           <a className="menu-item text-white pt-2 pl-3 pr-3 pb-2 text-l hover:text-defaultBlue cursor-pointer">
               {menuItem}
           </a>
        </>
    )
}