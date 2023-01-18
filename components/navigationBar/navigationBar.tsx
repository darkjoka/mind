import { BsChevronLeft, BsCloudCheck, BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbArrowBackUp, TbArrowForwardUp } from "react-icons/tb";

export default function NavigationBar() {
  return (
    <div className="flex justify-between p-4 items-center">
      <div className="flex items-center space-x-6">
        <button className="hover:bg-gray-200 rounded p-2">
          <BsChevronLeft className="text-slate-600" />
        </button>
        <div>
          <p className="text-2xl font-semibold">MindMap Concept</p>
          <p className="text-sm text-slate-600">
            Last Edited - June 28, 2022
            <BsCloudCheck className=" ml-2 inline" />
          </p>
        </div>
      </div>
      <div className="flex space-x-2 h-10">
        <div className="flex rounded-md bg-white  text-xl h-full items-center border p-0">
          <button className="rounded-l-md hover:bg-gray-100 h-full w-full px-4 m-0">
            <TbArrowBackUp />
          </button>
          <span className="w-[2px] bg-gray-100 h-8" />
          <button className="rounded-r-md text-slate-500 hover:bg-gray-100 h-full px-4 m-0">
            <TbArrowForwardUp />
          </button>
        </div>
        <button className="rounded-md bg-white rouned-md text-xl px-5 hover:bg-gray-100 border">
          <IoPersonCircleOutline />
        </button>
        <button className="rounded-md bg-white rouned-md text-xl px-5 hover:bg-gray-100 border">
          <HiOutlineArrowUpOnSquare />
        </button>
        <button className="rounded-md bg-white rouned-md text-xl px-5 hover:bg-gray-100 border">
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
}
