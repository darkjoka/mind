import NodeModifyBar from "../nodeModifyBar";

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
        </div>
      </div>

      <NodeModifyBar />
    </div>
  );
}
