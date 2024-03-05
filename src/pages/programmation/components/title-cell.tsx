import { cn } from "@/lib/utils";

import type { Row } from "@tanstack/react-table";
import type { Periode, Domaine } from "@/services/fakers/inferred-types.faker";

import type { ProgrammationView as View } from "@/enums/views";

export const TitleCell =
  (view?: View) =>
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
        view === "DOMAINE" && "dark:bg-opacity-75",
        view === "PERIODE" && "flex items-center justify-center",
        "bg-" + color
      )}
    >
      {name}
    </div>
  );
