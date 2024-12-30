"use client"
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import { Price } from '../main/Menu';
import { CardPriceItem } from './CardPriceItem';

type SectionProps = {
    title: string;
    img: string;
    prices: Price[];
}

export const CardSection: FC<SectionProps> = ({ title, img, prices }) => {

    const [begin, setBegin] = useState<number>(1);
    const [hasLowItem, setHasLowItem] = useState<boolean>(false);

    useEffect(() => {
        if (prices.length <= 2) {
            setHasLowItem(true);
            setBegin(0);
        }
        console.log({ title });

    }, []);

    const sendWhatsApp = () => {
        const phone = "5491161750347";
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}`;
        window.open(whatsappLink, '_blank');
    }


    return (
        <>
            <div className="flex flex-col gap-7 w-full animate-fade ">
                <div className='relative md:origin-center flex justify-center ' >
                    <Image className='border-8 border-white border-b-[65px] shadow-lg' src={img} alt="Rosii Pasteleria" width={800} height={600} />
                    <h2 className="font-brusher text-4xl absolute bottom-3 text-center w-full text-slate-800">{title}</h2>
                </div>

                {!hasLowItem && prices.slice(0, 1).map((data, i) => (
                    <CardPriceItem mode={title.includes('Promo') ? 'v2' : 'v1'} key={i} price={data} />
                ))}

            </div>
            <div className="flex flex-col gap-7 self-start   animate-fade">
                {prices.slice(begin,).map((data, i) => (
                    <CardPriceItem mode={prices.length <= 2 ? 'v2' : 'v1'} key={i} price={data} />
                ))}

                <div className='flex justify-center'>
                    <button onClick={sendWhatsApp} className='flex items-center px-6 py-3 gap-2  rounded-full border hover:border-rose-500 shadow   hover:bg-white hover:text-rose-500 font-medium bg-rose-500 text-white'>
                        <IonIcon name='logo-whatsapp' size='large' /> <span className='font-quicksand font-semibold text-sm'>¡Haz tu pedido ahora!</span>
                    </button>
                </div>

            </div>
        </>
    )
}
