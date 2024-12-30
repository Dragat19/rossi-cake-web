"use client"

import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { Element } from 'react-scroll';


export const Contact = () => {

    const { register, handleSubmit, formState: { isValid }, reset } = useForm({
        defaultValues: {
            name: '',
            products: '',
            details: '',
        }
    });

    const onSubmit = (data: any) => {
        const { name, products, details } = data;
        const mensaje = `
        ¡Hola! 👋

        Mi nombre es: *${name}*
        Estoy interesado(a) en: *${products}*

        📋 *Detalles adicionales:*
            ${details}

        ¡Gracias! Espero su respuesta. 😊
            `.trim();
        sendWhatsAppMessage(mensaje);
        reset();
    }


    const sendWhatsAppMessage = (message: string = '') => {
        const phone = "5491161750347";
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }

    return (
        <Element name='contact' id="contact" className="flex bg-white">
            <div className="flex md:py-0 w-full  md:container md:mx-auto">
                <div className='flex flex-col  py-4 md:py-12 items-center justify-start '>
                    <h2 className="font-brusher text-4xl text-slate-800">Contactanos</h2>
                    <div className="my-4 w-28 border border-dashed border-rose-500" />
                    <div className="flex flex-col gap-4 px-4">
                        <h4 className="text-xl text-slate-800 font-quicksand font-extrabold text-center">¿Planeas un evento o necesitas un pedido especial?</h4>
                        <p className="text-slate-500 font-quicksand font-light text-xs text-center leading-6">¡Estamos aquí para ayudarte! Ya sea una fiesta, una boda o simplemente un antojo de nuestras deliciosas galletas, no dudes en escribirnos. Ofrecemos opciones personalizadas y cantidades mayores para que tu ocasión sea inolvidable.</p>
                        <form className='flex flex-col gap-4 px-4 w-full' onSubmit={handleSubmit(onSubmit)}>
                            <input {...register('name', { required: true })} maxLength={40} className='border py-2 px-3 rounded-lg border-dashed focus-visible:bg-rose-50 focus-visible:outline-none focus-visible:border-rose-500 placeholder:text-sm text-slate-800' type="text" placeholder='Nombre' />
                            <input {...register('products', { required: true })} maxLength={40} className='border py-2 px-3 rounded-lg border-dashed focus-visible:bg-rose-50 focus-visible:outline-none focus-visible:border-rose-500 placeholder:text-sm text-slate-800' type="text" placeholder='Productos a solicitar' />
                            <textarea {...register('details', { required: true })} maxLength={150} className='border py-2 px-3 rounded-lg border-dashed focus-visible:bg-rose-50 focus-visible:outline-none focus-visible:border-rose-500 placeholder:text-sm text-slate-800 resize-none h-28' placeholder='Detalles adicionales' />
                            <div className='flex justify-center '>
                                {/* <input  className='bg-rose-500 text-center px-6 py-4 rounded-lg text-white font-medium cursor-pointer hover:opacity-70 focus-visible:outline-none ' type="submit" value="Enviar mensaje" /> */}

                                <button disabled={!isValid} type='submit' className='flex items-center px-6 py-3 gap-2  rounded-full border hover:border-rose-500 shadow   hover:bg-white hover:text-rose-500 font-medium bg-rose-500 text-white disabled:opacity-20 disabled:pointer-events-none'>
                                    <IonIcon name='logo-whatsapp' size='large' /> <span className='font-quicksand font-semibold text-sm'>¡Envía tu mensaje!</span>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
                <Image className='hidden md:block' src="/images/cookies-stack.avif" alt="Rosii Pasteleria" width={500} height={500} />
            </div>

        </Element>
    )
}
