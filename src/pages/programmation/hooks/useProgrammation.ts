import { useMemo, useState } from "react";

import { createColumnHelper } from "@tanstack/react-table";

import type {
  Programmation,
  Periode,
  Domaine,
  Item
} from "@/services/fakers/inferred-types.faker";

import { ItemCell } from "../components/item-cell";
import { TitleCell } from "../components/title-cell";

import {
  FR_PROGRAMMATION_VIEWS,
  type ProgrammationView as View
} from "@/enums/views";

function useProgrammation(programmation?: Programmation) {
  const [view, setView] = useState<View>("PERIODE");

  const handleToggleView = () =>
    setView((previousView) =>
      previousView === "PERIODE" ? "DOMAINE" : "PERIODE"
    );

  const data = useMemo(() => {
    if (!programmation) return [];

    return view === "DOMAINE"
      ? programmation.attributes.matieres[0].domaines
      : programmation.attributes.periodes;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, [programmation, view]) as any[];

  const columns = useMemo(() => {
    if (!programmation) return [];

    return view === "DOMAINE"
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
    periodeColumnHelper.accessor("name", {
      header: FR_PROGRAMMATION_VIEWS.PERIODE,
      cell: TitleCell("PERIODE")
    }),
    ...domaines.map((domaine) =>
      periodeColumnHelper.accessor(findItemByDomaineId(domaine.id), {
        header: domaine.name,
        cell: ItemCell
      })
    )
  ];
};

// DOMAINE VIEW
const generateDomaineViewColumns = (programmation: Programmation) => {
  const periodes = programmation.attributes.periodes;

  const domaineColumnHelper = createColumnHelper<Domaine>();

  const findItemByPeriodeId = (periodeId: string) => (row: Domaine) =>
    row.items.find((item: Item) => item.periodeId === periodeId);

  return [
    domaineColumnHelper.accessor("name", {
      header: FR_PROGRAMMATION_VIEWS.DOMAINE,
      cell: TitleCell("DOMAINE")
    }),
    ...periodes.map((periode) =>
      domaineColumnHelper.accessor(findItemByPeriodeId(periode.id), {
        header: periode.name,
        cell: ItemCell
      })
    )
  ];
};
