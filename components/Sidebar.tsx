import { BiPlus } from 'react-icons/bi'

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-full max-w-[90px] flex-col items-center bg-[#1C1E1F]">
      <button className="my-5 rounded-lg bg-[#236BFE] p-4">
        <BiPlus className="text-2xl text-white " />
      </button>
    </aside>
  )
}

export default Sidebar
