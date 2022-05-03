import { ReactNode } from 'react'
import Image from 'next/image'
import { BiSearch, BiPlus } from 'react-icons/bi'
import { FcOk } from 'react-icons/fc'
import { AiOutlineClockCircle, AiFillSetting } from 'react-icons/ai'
import { BsPersonFill, BsChevronDown } from 'react-icons/bs'

const ChatBar = () => {
  return (
    <div className="flex h-screen w-full max-w-[400px] flex-col bg-[#191B1D] py-4">
      <div className="mx-auto flex w-[90%] rounded-lg bg-[#161819] p-4">
        <input
          placeholder="search for anything"
          className="w-full bg-[#161819] text-sm text-gray-200 placeholder-gray-300 focus:outline-none"
        />
        <BiSearch className="text-gray-300" />
      </div>
      <div className="mx-auto my-6 w-[90%] rounded-xl bg-[#27292D] p-4">
        <div className="flex space-x-4">
          <Image
            src="https://i.pravatar.cc/150?img=12"
            width={40}
            height={40}
            className="rounded-xl"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-200">Arindam</h2>
            <div className="flex items-center space-x-2">
              <FcOk className="text-2xl " />
              <p className="text-sm text-gray-500">Active for chat</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[90%] space-y-8">
        <NavItem
          icon={<AiOutlineClockCircle className="text-2xl" />}
          text={'All Updates'}
        />
        <NavItem
          icon={<BsPersonFill className="text-2xl" />}
          text={'Members'}
        />
        <NavItem
          icon={<AiFillSetting className="text-2xl" />}
          text={'Settings'}
        />
      </div>
      <div className="mx-auto w-[90%] py-4">
        <div className="flex items-center  space-x-2 text-gray-500">
          <BsChevronDown />
          <p>Contact</p>
        </div>
        <Channel icon="☁️" text="General Chat" msgcount={233} />
        <Channel icon="🎯" text="Design Supports" msgcount={10} />
        <Channel icon="✌️" text="product showcase" />
        <Channel icon="🏀" text="Games" msgcount={26} />
        <Channel icon="🏁" text="Goals" msgcount={65} />
      </div>
      <div className="mx-auto w-[90%]">
        <div className="flex items-center  space-x-2 text-gray-500">
          <BsChevronDown />
          <p>Message</p>
        </div>
        <MessageHead
          img={'https://i.pravatar.cc/150?img=12'}
          name="Ros dfnkna"
          msgc={12}
        />
        <MessageHead
          img="https://i.pravatar.cc/150?img=18"
          name="DUlipa nei"
          msgc={65}
        />
        <MessageHead
          img="https://i.pravatar.cc/150?img=25"
          name="Nataliya popes"
          msgc={32}
        />
        <div className="flex cursor-pointer items-center space-x-4 py-2 text-gray-400">
          <BiPlus />
          <p>Add Friend</p>
        </div>
      </div>
    </div>
  )
}

interface NavItemProps {
  icon: ReactNode
  text: string
}

const NavItem = ({ icon, text }: NavItemProps) => (
  <div className="flex items-center space-x-4 text-gray-200">
    {icon}
    <p className="text-sm font-medium">{text}</p>
  </div>
)

interface ChannelProps {
  icon: string
  text: string
  msgcount?: number
}

const Channel = ({ icon, text, msgcount }: ChannelProps) => (
  <div className="flex cursor-pointer items-center justify-between rounded-xl px-2 py-2 text-gray-300 hover:bg-gray-500">
    <div className="flex items-center space-x-4">
      <h2 className="text-2xl">{icon}</h2>
      <p className="text-sm font-bold">{text}</p>
    </div>
    {msgcount && (
      <div className="grid h-10 w-10 place-items-center rounded-full bg-slate-800">
        {msgcount}
      </div>
    )}
  </div>
)

interface messageHeadProps {
  img: string
  name: string
  msgc: number
}

const MessageHead = ({ img, name, msgc }: messageHeadProps) => (
  <div className="flex cursor-pointer items-center justify-between py-2 text-gray-200">
    <div className="flex items-center space-x-4">
      <Image src={img} width={40} height={40} className="rounded-lg" />
      <p>{name}</p>
    </div>
    <p>{msgc}</p>
  </div>
)

export default ChatBar
