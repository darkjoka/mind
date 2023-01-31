import { BsChevronLeft, BsCloudCheck, BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowUpOnSquare } from "react-icons/hi2";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbArrowBackUp, TbArrowForwardUp } from "react-icons/tb";

export default function NavigationBar() {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-6">
        <button className="rounded p-2 hover:bg-gray-200">
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
      <div className="flex h-10 space-x-2">
        <div className="flex h-full items-center  rounded-md border bg-white p-0 text-xl">
          <button className="m-0 h-full w-full rounded-l-md px-4 hover:bg-gray-100">
            <TbArrowBackUp />
          </button>
          <span className="h-8 w-[2px] bg-gray-100" />
          <button className="m-0 h-full rounded-r-md px-4 text-slate-500 hover:bg-gray-100">
            <TbArrowForwardUp />
          </button>
        </div>
        <button className="rouned-md rounded-md border bg-white px-5 text-xl hover:bg-gray-100">
          <IoPersonCircleOutline />
        </button>
        <button className="rouned-md rounded-md border bg-white px-5 text-xl hover:bg-gray-100">
          <HiOutlineArrowUpOnSquare />
        </button>
        <button className="rouned-md rounded-md border bg-white px-5 text-xl hover:bg-gray-100">
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
}
