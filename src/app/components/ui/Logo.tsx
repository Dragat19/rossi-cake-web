
import Image from 'next/image';
type Props = {
    size?: 'small' | 'large'
}
export const Logo = ({ size = 'large' }: Props) => {
    return (
        <div className='flex flex-row gap-4 items-center '>
            <Image src="/images/rossi-logo.avif" alt="Rosii Pasteleria" width={56} height={56} />
            <h1 className={`text-white font-brusher ${size === 'large' ? 'text-3xl  md:text-4xl' : 'text-2xl  md:text-3xl '} font-bold`}>Pastelería Rossi</h1>
        </div>
    )
}
