"use client"
import { useState } from "react";
import { Element } from 'react-scroll';
import { CardSection } from '../ui/CardSection';
import { TabContent } from '../ui/tabs/TabContent';

enum MenuTabs {
    cookies = 1,
    promos,
    desserts
}

export type Price = {
    name?: string;
    variants: Variant[];
    description: string;
}

export type Variant = {
    name: string;
    value: string;
}

const mockPrices1: Price[] = [
    {
        name: "Chispa de chocolate (blanco o negro)",
        variants: [
            {
                name: "Sin relleno",
                value: "$2050"
            },
            {
                name: "Rellenas con nutella",
                value: "$2350"
            },
            {
                name: "Rellenas con DDL",
                value: "$2150"
            }
        ],
        description: "Galleta suave y dorada con trozos generosos de chocolate blanco o negro que se derriten en cada mordisco."
    },
    {
        name: "Ore + chips",
        variants: [
            {
                name: "Sin relleno",
                value: "$2050"
            },
            {
                name: "Rellenas con nutella",
                value: "$2350"
            },
            {
                name: "Rellenas con DDL",
                value: "$2150"
            }
        ],
        description: "Una irresistible combinación de trocitos de galleta Oreo y chips de chocolate, perfecta para los amantes del cacao."
    },
    {
        name: "Red Velvet",
        variants: [
            {
                name: "Sin relleno",
                value: "$2050"
            },
            {
                name: "Rellenas con nutella",
                value: "$2350"
            },
            {
                name: "Rellenas con DDL",
                value: "$2150"
            }
        ],
        description: "Galleta aterciopelada de color rojo intenso, con un toque de vainilla y trocitos de chocolate blanco."
    },
    {
        name: "Doble chocolate",
        variants: [
            {
                name: "Sin relleno",
                value: "$2050"
            },
            {
                name: "Rellenas con nutella",
                value: "$2350"
            },
            {
                name: "Rellenas con DDL",
                value: "$2150"
            }
        ],
        description: "Galleta de chocolate oscuro con trozos adicionales de chocolate, ideal para los más golosos."
    }
]


const mockPrices2: Price[] = [
    {
        name: "Super Promo",
        variants: [
            {
                name: "Surtidas mini",
                value: "$3500"
            },
        ],
        description: "Pack de 5 mini galletas surtidas."
    },
    {
        name: "Promo 1",
        variants: [
            {
                name: "Promo nutella",
                value: "$4500"
            },
        ],
        description: "Dos galletas rellenas con nutella."
    },
    {
        name: "Promo 2",
        variants: [
            {
                name: "Promo DDL",
                value: "$4100"
            },
        ],
        description: "Dos galletas rellenas de dulce de leche."
    },
    {
        name: "Promo 3",
        variants: [
            {
                name: "Promo Mellizas",
                value: "$3900"
            },
        ],
        description: "Dos galletas iguales sin relleno."
    },
    {
        name: "Promo 4",
        variants: [
            {
                name: "Promo Duo dulce",
                value: "$4300"
            },
        ],
        description: "Dos galletas rellenas, una con nutella y otra con dulce de leche."
    },
    {
        name: "Promo 5",
        variants: [
            {
                name: "Promo Delicia",
                value: "$4200"
            },
        ],
        description: "Dos galletas rellenas, una con nutella y otra sin relleno."
    },
    {
        name: "Promo 6",
        variants: [
            {
                name: "Promo Tentacion",
                value: "$4000"
            },
        ],
        description: "Dos galletas, una rellena con dulce de leche y una sin relleno."
    }
]


const mockPrices3: Price[] = [
    {
        name: "Brownie",
        variants: [
            {
                name: "Brownie: Pura tentación chocolatera",
                value: "$3000"
            },
        ],
        description: `Suave, chocolatoso y lleno de sabor. Ese postrecito que te da un abrazo en cada mordida. <br/>Perfecto para los amantes del chocolate!.`
    },
]


export const Menu = () => {

    const menus = [
        {
            id: 1,
            name: "Cookies",
            active: true,
        },
        {
            id: 2,
            name: "Promos Cookies",
            active: false,
        },
        {
            id: 3,
            name: "Postres",
            active: false,
        }
    ];

    const [tabs, setTabs] = useState(menus);


    const [title, setTitle] = useState<string>(menus[0]?.name);

    const [idTab, setIdTab] = useState<number>(menus[0]?.id);


    const handleTab = (index: number) => {
        const newMenus = menus.map((menu, i) => ({ ...menu, active: i === index }));
        const title = menus[index].name;
        setIdTab(menus[index].id);
        setTitle(title);
        setTabs(newMenus);
    }

    return (
        <Element name="menu" id="menu" className="bg-white flex">
            <div className="flex flex-col justify-center items-center py-6 md:py-12 w-full  md:container md:mx-auto" >
                <h2 className="font-brusher text-4xl text-slate-800">Nuestro Menu</h2>
                <div className="my-4 w-28 border border-dashed border-rose-500" />
                <div className="flex flex-col items-center px-4">
                    <div className="flex w-full pt-1 gap-2 md:gap-5  md:px-16 justify-center">
                        {tabs.map((menu, i) => (
                            <a key={menu.name} onClick={() => handleTab(i)} className={`py-3 px-4 md:px-9  ${menu.active ? 'bg-rose-500 text-white cursor-none' : 'bg-white text-rose-500 border border-rose-50   cursor-pointer'} rounded-tl-lg rounded-tr-lg font-quicksand shadow `}>{menu.name}</a>
                        ))}
                    </div>
                    <TabContent>
                        {idTab === MenuTabs.cookies && <CardSection title={title} img="/images/cookies-only.avif" prices={mockPrices1} />}
                        {idTab === MenuTabs.promos && <CardSection title={title} img="/images/gallery/3.avif" prices={mockPrices2} />}
                        {idTab === MenuTabs.desserts && <CardSection title={title} img="/images/brownie-only.avif" prices={mockPrices3} />}
                    </TabContent>
                </div>
            </div>
        </Element>
    )
}
