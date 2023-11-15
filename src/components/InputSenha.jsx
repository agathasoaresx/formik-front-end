'use client'

import { useState } from "react"
import {
    Eye,
    EyeSlash
} from 'iconsax-react'


const InputSenha = () => {
    const [isVisible, setIsVisible] = useState(false)

    const visible = () => {
        console.log(isVisible)
        setIsVisible(!isVisible)


    }

    return (
        <>
            <div className="relative">
                <input id="password" className={`mb-6 border-solid border-2 border-gray-900 border-opacity-10 text-[#A2A3A4] px-2 font-normal text-base h-[48px] rounded w-[100%]`}
                    type={isVisible ? "text" : "password"} name='Senha' placeholder="Senha"></input>
                {
                    isVisible
                        ? <EyeSlash size={20} onClick={visible} className="absolute cursor-pointer top-[15px] right-[11px] text-[#A2A3A4]" />
                        : <Eye size={20} onClick={visible} className="absolute cursor-pointer top-[15px] right-[11px] text-[#A2A3A4]" />
                }
            </div>


        </>
    )
}

export default InputSenha