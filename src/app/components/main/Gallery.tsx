"use client"
import Image from 'next/image';
import { Element } from 'react-scroll';
export const Gallery = () => {
    return (
        <Element name="gallery" id="gallery" className="flex bg-rose-50 ">
            <div className="flex flex-col justify-center items-center py-6 md:py-12 w-full  md:container md:mx-auto">
                <h2 className="font-brusher text-4xl text-slate-800">Nuestra Galeria</h2>
                <div className="my-4 w-28 border border-dashed border-rose-500" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 px-4 md:px-0 animate-fade">
                    <div className="grid gap-4">
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto w-full max-w-full rounded-lg shadow bg-gray-300" src="/images/gallery/12.avif" alt='' />
                        </div>
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/gallery/6.avif" alt='' />
                        </div>
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/gallery/3.avif" alt='' />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/brownie+cookies2.avif" alt='' />
                        </div>
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/gallery/10.avif" alt='' />
                        </div>
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/gallery/18.avif" alt='' />
                        </div>
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/cookies-only2.avif" alt='' />
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/gallery/4.avif" alt='' />
                        </div>
                        <div className="hidden md:block className='animate-fade'">
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/gallery/2.avif" alt='' />
                        </div>
                        <div className='animate-fade'>
                            <Image width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg shadow" src="/images/gallery/5.avif" alt='' />
                        </div>
                    </div>
                </div>

            </div>

        </Element>
    )
}
