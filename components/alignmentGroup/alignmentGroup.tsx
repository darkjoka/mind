import * as ToggleGroup from "@radix-ui/react-toggle-group";
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  TextAlignJustifyIcon,
} from "@radix-ui/react-icons";

export default function AlignmentGroup() {
  return (
    <ToggleGroup.Root
      className="flex items-center justify-between h-7 my-1 rounded border"
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      {alignmentItems.map(({ value, label, icon }) => (
        <ToggleGroup.Item
          className="flex-1 h-full rounded hover:bg-gray-50 flex items-center justify-center data-[state=on]:bg-gray-100"
          value={value}
          aria-label={label}
          key={value}
        >
          {icon}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}

const alignmentItems = [
  {
    value: "left",
    label: "Left aligned",
    icon: <TextAlignLeftIcon />,
  },
  {
    value: "center",
    label: "center aligned",
    icon: <TextAlignCenterIcon />,
  },
  {
    value: "right",
    label: "Right aligned",
    icon: <TextAlignRightIcon />,
  },
  {
    value: "justify",
    label: "Justify",
    icon: <TextAlignJustifyIcon />,
  },
];
