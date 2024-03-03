import { useMemo, useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import {
  Programmation,
  Periode,
  Domaine,
  Item
} from "@/services/fakers/inferred-types.faker";

import { ItemCell } from "../components/item-cell";

type View = "domaine" | "periode";

function useProgrammation(programmation?: Programmation) {
  const [view, setView] = useState<View>("domaine");

  const handleToggleView = () =>
    setView((previousView) =>
      previousView === "domaine" ? "periode" : "domaine"
    );

  const data = useMemo(() => {
    if (!programmation) return [];

    return view === "domaine"
      ? programmation.attributes.matieres[0].domaines
      : programmation.attributes.periodes;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [programmation, view]) as any[];

  const columns = useMemo(() => {
    if (!programmation) return [];

    return view === "domaine"
      ? generateDomaineViewColumns(programmation)
      : generatePeriodeViewColumns(programmation);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [programmation, view]) as any[];

  return {
    data,
    columns,
    view,
    handleToggleView
  };
}

export default useProgrammation;

// DOMAINE VIEW
const generateDomaineViewColumns = (programmation: Programmation) => {
  const periodes = programmation.attributes.periodes;

  const domaineColumnHelper = createColumnHelper<Domaine>();

  const findItemByPeriodeId = (periodeId: string) => (row: Domaine) =>
    row.items.find((item: Item) => item.periodeId === periodeId);

  return [
    domaineColumnHelper.accessor("name", { header: "Domaine" }),
    ...periodes.map((periode) =>
      domaineColumnHelper.accessor(findItemByPeriodeId(periode.id), {
        header: periode.name,
        cell: ItemCell
      })
    )
  ];
};

// PERIODE VIEW
const generatePeriodeViewColumns = (programmation: Programmation) => {
  const domaines = programmation.attributes.matieres[0].domaines;

  const periodeColumnHelper = createColumnHelper<Periode>();

  const findDomaineItemsById = (domaineId: string) =>
    domaines.find((domaine) => domaine.id === domaineId)?.items || [];

  const findItemByDomaineId = (domaineId: string) => (row: Periode) =>
    findDomaineItemsById(domaineId).find(
      (item: Item) => item.periodeId === row.id
    );

  return [
    periodeColumnHelper.accessor("name", { header: "Période" }),
    ...domaines.map((domaine) =>
      periodeColumnHelper.accessor(findItemByDomaineId(domaine.id), {
        header: domaine.name,
        cell: ItemCell
      })
    )
  ];
};
