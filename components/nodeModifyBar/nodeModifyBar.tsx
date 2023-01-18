import { AiOutlineNodeIndex } from "react-icons/ai";
import { BsEmojiLaughing } from "react-icons/bs";
import { IoEllipsisHorizontalCircle } from "react-icons/io5";
import { MdOutlineFormatColorFill } from "react-icons/md";
import { TbCirclePlus } from "react-icons/tb";

export default function NodeModifyBar() {
  return (
    <div className="w-full h-14 rounded-lg bg-white flex items-center justify-evenly border">
      <button className="w-10 h-10 hover:bg-gray-100 rounded flex items-center justify-center">
        <IoEllipsisHorizontalCircle className="text-3xl" />
      </button>
      <button className="w-10 h-10 hover:bg-gray-100 rounded flex items-center justify-center">
        <TbCirclePlus className="text-3xl" />
      </button>
      <button className="w-10 h-10 hover:bg-gray-100 rounded flex items-center justify-center">
        <BsEmojiLaughing className="text-2xl" />
      </button>
      <button className="w-10 h-10 hover:bg-gray-100 rounded flex items-center justify-center">
        <MdOutlineFormatColorFill className="text-2xl" />
      </button>
      <button className="w-10 h-10 hover:bg-gray-100 rounded flex items-center justify-center">
        <AiOutlineNodeIndex className="text-2xl" />
      </button>
    </div>
  );
}
