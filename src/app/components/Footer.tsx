


import IonIcon from "@reacticons/ionicons";
import { Logo } from "./ui/Logo";

export const Footer = () => {
    return (
        <footer className="flex flex-col gap-4 items-center justify-center h-auto py-6 bg-rose-500">
            <Logo />
            <div className="flex flex-row gap-4 items-center">
                <a
                    className=" flex flex-row justify-center items-center  text-rose-500  bg-white hover:text-white  hover:bg-transparent hover:border-2 hover:border-white   w-12 h-12  rounded-full text-center"
                    href="https://www.instagram.com/pasteleriarossi17?igsh=YzljYTk1ODg3Zg=="
                    target="_blank"
                >
                    <IonIcon name="logo-instagram" size="large" />
                </a>


                <a
                    className="flex flex-row justify-center items-center   text-rose-500  bg-white  w-12 h-12 rounded-full hover:text-white hover:bg-transparent hover:border-2 hover:border-white"
                    href="https://api.whatsapp.com/send?phone=5491161750347&text=Hola%2C%20%C2%BFc%C3%B3mo%20est%C3%A1s%3F"
                    target="_blank"
                >
                    <IonIcon name="logo-whatsapp" size="large" />
                </a>

            </div>
            <p className="font-quicksand  text-white text-xs">
                Copyright © 2024 - Designed by <span className="font-bold">Asanchez</span>
            </p>
        </footer>
    )
}
