import { FC } from "react";
import { Price } from "../main/Menu";

type Props = {
    price: Price
    mode?: 'v1' | 'v2'
}

export const CardPriceItem: FC<Props> = ({ price: { name, description, variants }, mode = 'v1' }) => {
    return (
        <div className={`flex flex-col gap-4  rounded-lg shadow ${mode === 'v1' ? 'bg-white border border-rose-50  p-4' : 'bg-rose-50 p-6'}`}>
            <div className="flex flex-col gap-2 justify-between ">
                <div>
                    <h3 className="text-rose-500 font-brusher text-2xl">{name}</h3>
                    <p className="text-slate-500 font-quicksand font-light text-xs" dangerouslySetInnerHTML={{ __html: description }} />
                </div>

                <div className="flex flex-col gap-1">
                    {variants.map(({ name, value }, i) => (
                        <div key={i} className="flex justify-between items-center ">
                            <span className="flex-1 text-sm font-semibold border-b-2 border-dashed text-slate-800 ">{name}</span>
                            <span className="text-rose-500 text-base font-bold">{value}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
