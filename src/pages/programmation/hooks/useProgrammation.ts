import { useMemo, useState } from "react";

import { domaines, domaineViewColumns } from "@/stories/tables/domaine-view";
import { periodes, periodeViewColumns } from "@/stories/tables/periode-view";

type View = "domaine" | "periode";

function useProgrammation() {
  const [view, setView] = useState<View>("domaine");

  const handleToggleView = () =>
    setView((previousView) =>
      previousView === "domaine" ? "periode" : "domaine"
    );

  const data = useMemo(() => {
    return view === "domaine" ? domaines : periodes;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [view]) as any[];

  const columns = useMemo(() => {
    return view === "domaine" ? domaineViewColumns : periodeViewColumns;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [view]) as any[];

  return {
    data,
    columns,
    view,
    handleToggleView
  };
}

export default useProgrammation;
