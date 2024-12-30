import { PropsWithChildren } from "react"



export const TabContent = ({ children }: PropsWithChildren) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2  gap-7  rounded-lg md:py-20 md:px-16  border-4 border-rose-500 p-4">
            {children}
        </div>
    )
}
