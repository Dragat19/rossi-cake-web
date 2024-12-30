"use client"
import IonIcon from "@reacticons/ionicons";
import { useState } from "react";
import { Link } from 'react-scroll';
import { Logo } from './ui/Logo';

type List = {
    name: string;
    href: string;
    active: boolean;
}

const linksData: List[] = [
    { name: "Inicio", href: "home", active: true },
    { name: "Menu", href: "menu", active: false },
    { name: "Galeria", href: "gallery", active: false },
    { name: "Contacto", href: "contact", active: false },
];

export const NavBar = () => {

    const [links, setLinks] = useState<List[]>([...linksData])

    const onClick = (id: number) => {
        const newLinks = links.map((link, i) => ({ ...link, active: i === id }));
        setLinks(newLinks);
        setIsOpen(false);
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-rose-500  p-4 text-white  shadow-lg md:py-0  md:px-0 ">
            <div className="container mx-auto flex justify-between md:justify-around  items-center">

                <Logo size="small" />

                <button
                    className="flex justify-center items-center hover:opacity-70 md:hidden text-rose-500  bg-white w-12 h-12  rounded-full text-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <IonIcon name="menu" size="large" />
                </button>

                <div className="hidden md:flex flex-row items-center">
                    {links.map((link, i) => (
                        <Link
                            id={`link-${i}`}
                            key={link.name}
                            to={link.href}
                            smooth={true}
                            offset={-70}
                            duration={400}
                            activeClass="activeLink"
                            onClick={() => onClick(i)}
                            className={`p-6 active:bg-rose-50 hover:bg-rose-50 hover:text-rose-500  font-bold text-sm  ${link.active ? 'bg-rose-50 text-rose-500' : 'text-white'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className={`absolute top-20 left-0 w-full bg-rose-500 text-white md:hidden flex flex-col items-center p-4 gap-4 transition-all ease-in-out duration-300 ${isOpen ? 'block' : 'hidden'
                    }`}>
                    {links.map((link, i) => (
                        <Link
                            id={`link-${i}`}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            key={link.name}
                            activeClass="activeLink"
                            onClick={() => onClick(i)}
                            className={` w-full p-4 active:bg-rose-50 hover:bg-rose-50 hover:text-rose-500 text-center  font-bold text-sm text-white`}
                            to={link.href}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

            </div>
        </nav>
    )
}
