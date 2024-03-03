import { cn } from "@/lib/utils";

import { Row } from "@tanstack/react-table";
import { Periode } from "@/services/fakers/inferred-types.faker";
import { Domaine } from "@/services/fakers/inferred-types.faker";

export const TitleCell =
  (type?: "domaine" | "periode") =>
  ({
    row: {
      original: { name, color }
    }
  }: {
    row: Row<Domaine> | Row<Periode>;
  }) => (
    <div
      className={cn(
        "h-full text-balance p-4 text-center font-bold dark:text-black",
        type === "domaine" && "dark:bg-opacity-75",
        type === "periode" && "flex items-center justify-center",
        "bg-" + color
      )}
    >
      {name}
    </div>
  );
