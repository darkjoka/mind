import { BsFilterCircle, BsThreeDots } from "react-icons/bs";
import { CgArrowsExpandRight, CgBolt, CgSearch } from "react-icons/cg";
import { TbPlus } from "react-icons/tb";

export default function MapInformationBar() {
  return (
    <div className="h-full w-72 rounded-t-xl border bg-white">
      <div className="border-b px-4">
        <div className="flex items-center justify-center">
          <div className="my-1 h-1 w-10 rounded-full bg-gray-200" />
        </div>
        <div className="flex items-center justify-between">
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
            className="w-full rounded-lg border bg-gray-100 p-1 py-1 px-8"
          />
          <CgSearch className="absolute left-2 top-1/2 -translate-y-1/2" />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 border-l pl-2">
            <button>
              <BsFilterCircle />
            </button>
          </div>
        </div>
        <div className="my-2 flex items-center justify-between">
          <p className="grow text-lg font-medium">MindMap Concept</p>
          <div className="flex basis-12 items-center justify-between">
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
