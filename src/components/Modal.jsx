'use client'

import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

export default function Modal({ message }) {
    const [modalOpen, setModalOpen] = useState(true)

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <div
            className={`text-black inset-0 backdrop-blur-xs flex justify-center items-center ${modalOpen ? 'fixed' : 'hidden'}`}
        >
            <div className="sm:w-[50vw] w-[75vw] bg-white p-3 sm:p-5 flex flex-col items-end text-center">
                <div onClick={handleModal} className="text-2xl">
                    <AiOutlineClose className="cursor-pointer hover:text-black/50" />
                </div>

                <p className="w-full flex-col flex items-center text-xs md:text-sm lg:text-md xl:text-lg">
                    {message}
                </p>
            </div>
        </div>
    )
}
