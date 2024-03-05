import parse from "html-react-parser";

import type { Getter } from "@tanstack/react-table";
import type { Item } from "@/services/fakers/inferred-types.faker";

export const ItemCell = ({ getValue }: { getValue: Getter<Item> }) => {
  const content = getValue()?.value;

  return content ? (
    <div className="[&_ul]:list-image-check h-full p-4 transition-all hover:scale-[98%] hover:cursor-pointer hover:rounded-md hover:bg-background hover:shadow-lg [&_ul]:list-inside">
      {parse(content, { trim: true })}
    </div>
  ) : (
    "Vide..."
  );
};
