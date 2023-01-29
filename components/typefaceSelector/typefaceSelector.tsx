import React from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronRightIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";


const typefaces = [
  {
    type: "sans serif",
    supported: ["Arial", "Century Gothic", "Helvetica", "Impact", "Tahoma", "Trebuchet MS"],
  },
  {
    type: "serif",
    supported: ["EB Garamond", "Merriweather","Noto Serif", "Source Serif Pro"],
  },
  {
    type: "mono",
    supported: ["Courier", "Roboto Mono", "Inconsolata", "Source Code Pro"]
  }
]

export default function TypefaceSelector() {
  return (
    <Select.Root>
    <Select.Trigger className="flex justify-between items-center rounded bg-white w-32" aria-label="Food">
      <Select.Value placeholder="Default font"/>
      <Select.Icon className="SelectIcon">
        <ChevronRightIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Portal>
      <Select.Content className="overflow-hidden bg-white rounded shadow-sm border">
        <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-violet-900">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport className="p-1">
          {
            typefaces.map(({type, supported})=> <Select.Group key={type}><Select.Label>{type}</Select.Label>{
              supported.map((value)=><SelectItem key={value} value={value.toLowerCase()}>{value}</SelectItem>)
            }</Select.Group>)
          }
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-violet-900">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>
  </Select.Root>
); 
}

const SelectItem = React.forwardRef(({ children, ...props }: any, forwardedRef) => {
  return (
    <Select.Item className="rounded flex items-center h-6 py-0 px-9 data-[disabled]:text-gray-300 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:text-violet-800 data-[highlighted]:bg-violet-200 data-[highlighted]:cursor-pointer" {...props} ref={forwardedRef as any}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-6 flex items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

SelectItem.displayName = "SelectItem";
