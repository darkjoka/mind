import { BsFilterCircle, BsThreeDots } from "react-icons/bs";
import { CgArrowsExpandRight, CgBolt, CgSearch } from "react-icons/cg";
import { TbPlus } from "react-icons/tb";

export default function MapInformationBar() {
  return (
    <div className="w-72 h-full rounded-t-xl bg-white border">
      <div className="px-4 border-b">
        <div className="flex items-center justify-center">
          <div className="h-1 w-10 rounded-full bg-gray-200 my-1" />
        </div>
        <div className="flex justify-between items-center">
          <p className="space-x-2">
            <span className="text-lg font-medium">Outliner</span>
            <CgArrowsExpandRight className="inline" />
          </p>
          <button>
            <CgBolt />
          </button>
        </div>
        <div className="relative my-2">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="bg-gray-100 rounded-lg w-full p-1 border py-1 px-8"
          />
          <CgSearch className="absolute left-2 top-1/2 -translate-y-1/2" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 border-l pl-2">
            <button>
              <BsFilterCircle />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between my-2">
          <p className="text-lg grow font-medium">MindMap Concept</p>
          <div className="basis-12 flex items-center justify-between">
            <button>
              <BsThreeDots />
            </button>
            <button>
              <TbPlus />
            </button>
          </div>
        </div>
      </div>
      <div className="">{/* map content goes here */}</div>
    </div>
  );
}
