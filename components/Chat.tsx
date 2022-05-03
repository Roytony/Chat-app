import React from 'react'
import Image from 'next/image'
import { BsMicFill } from 'react-icons/bs'
import { AiFillPlusSquare } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'

const Chat = () => {
  return (
    <div className="flex h-screen flex-1 flex-col bg-[#161819]">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4 ">
          <h2 className="text-2xl">🎯</h2>
          <p className="text-gray-200">Design and Supports</p>
        </div>
        <div className="flex space-x-2">
          <div>
            <Image
              src="https://i.pravatar.cc/150?img=7"
              className="rounded-lg"
              width={40}
              height={40}
            />
          </div>
          <div>
            <Image
              src="https://i.pravatar.cc/150?img=13"
              width={40}
              height={40}
              className="rounded-xl"
            />
          </div>
          <div>
            <Image
              src="https://i.pravatar.cc/150?img=20"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-4 overflow-y-scroll">
        <div className="mx-4 max-w-[55%] rounded-xl bg-[#27292D] px-4 py-2 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          corrupti.
        </div>
        <div className="mx-4 max-w-[60%] rounded-xl bg-[#27292D] px-4 py-2 text-gray-300">
          Lorem ipsum dolor sit amet consectetur
        </div>
        <div className="mx-4 max-w-[60%] rounded-xl bg-[#27292D] px-4 py-2 text-gray-300">
          Lorem ipsum dolor sit .
        </div>
      </div>
      <div>
        <div className="mx-auto mb-4 flex h-16 w-[90%] items-center justify-between rounded-lg bg-[#27292D] px-4">
          <BsMicFill className="text-2xl text-gray-200" />
          <input
            className="ml-4 w-full bg-[#27292D] text-sm font-medium text-gray-200 focus:outline-none"
            placeholder="message anything you want"
          />
          <div className="flex space-x-4">
            <AiFillPlusSquare className="text-2xl text-gray-200" />
            <IoMdSend className="text-2xl text-gray-200" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
