import { BsPlus } from "react-icons/bs";
import NodeModifyBar from "../nodeModifyBar";
import { HiMinus } from "react-icons/hi2";
import AlignmentGroup from "../alignmentGroup/alignmentGroup";
import TypefaceSelector from "../typefaceSelector/typefaceSelector";

export default function NodeCharacterBar() {
  return (
    <div className="w-72 h-full flex flex-col space-y-2 pb-6">
      <div className="w-full grow bg-white rounded-lg border">
        <div className="rounded-t-lg bg-gray-100 border-b flex items-center justify-between px-4 py-1">
          <p className="font-medium text-sm">NODE</p>
          <button className="text-xs">RESET</button>
        </div>
        <div className="divide-y-2">
          <div className="px-4 py-1">
            <div className="text-gray-400 text-xs uppercase">General</div>
            <div className="divide-y">
              <div className="py-1 flex justify-between">
                <p>Shape</p>
                <div className="w-5 h-5 rounded border"></div>
              </div>
              <div className="py-1 flex justify-between">
                <p>Fill Color</p>
                <div className="w-5 h-5 rounded border"></div>
              </div>
            </div>
          </div>
          <div className="px-4 py-1">
            <div className="text-gray-400 text-xs uppercase">Border</div>
            <div className="divide-y">
              <div className="py-1 flex justify-between">
                <p>Width</p>
                <div className="flex items-center space-x-1">
                  <button className="rounded-full border p-1 hover:bg-gray-100">
                    <HiMinus />
                  </button>
                  <p>1pt</p>
                  <button className="rounded-full border p-1 hover:bg-gray-100">
                    <BsPlus />
                  </button>
                </div>
              </div>
              <div className="py-1 flex justify-between">
                <p>Shape</p>
                <div className="w-14 h-6 rounded border"></div>
              </div>
              <div className="py-1 flex justify-between">
                <p>Color</p>
                <div className="w-5 h-5 rounded border"></div>
              </div>
            </div>
          </div>
          <div className="px-4 py-1">
            <div className="text-gray-400 text-xs uppercase">Text</div>
            <div className="divide-y">
              <div className="py-1 flex justify-between">
                <p>Typeface</p>
                <div className="flex items-center space-x-1">
                  {/*  */}
                  <TypefaceSelector />
                  {/*  */}
                </div>
              </div>
              <AlignmentGroup />
              <div className="py-1 flex justify-between">
                <p>Color</p>
                <div className="w-5 h-5 rounded border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NodeModifyBar />
    </div>
  );
}
