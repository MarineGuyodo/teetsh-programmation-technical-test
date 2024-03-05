import { useMemo, useState } from "react";
import { generateColumns } from "@/pages/programmation/hooks/programmationColumnsFactory";

import type { Programmation } from "@/services/fakers/inferred-types.faker";
import type { ProgrammationView as View } from "@/enums/views";

function useProgrammation(programmation?: Programmation) {
  const [view, setView] = useState<View>("PERIODE");

  const handleToggleView = () =>
    setView((previousView) =>
      previousView === "PERIODE" ? "DOMAINE" : "PERIODE"
    );

  const { data, columns } = useMemo(() => {
    if (!programmation)
      return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: [] as any[],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        columns: [] as any[]
      };

    return {
      data:
        view === "PERIODE"
          ? programmation.attributes.periodes
          : programmation.attributes.matieres[0].domaines,
      columns: generateColumns(programmation, view)
    };
  }, [programmation, view]);

  return {
    data,
    columns,
    view,
    handleToggleView
  };
}

export default useProgrammation;
