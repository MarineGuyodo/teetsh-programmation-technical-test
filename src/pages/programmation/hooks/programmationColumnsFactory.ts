// HELPERS
import { createColumnHelper } from "@tanstack/react-table";

// COMPONENTS
import { ItemCell } from "../components/item-cell";
import { TitleCell } from "../components/title-cell";

// TYPES AND ENUMS
import type { ColumnDef } from "@tanstack/react-table";
import type {
  Programmation,
  Periode,
  Domaine,
  Item
} from "@/services/fakers/inferred-types.faker";
import type { ProgrammationView as View } from "@/enums/views";

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
      header: "Période",
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
      header: "Domaine",
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

const generateColumns = (programmation: Programmation, view: View) => {
  return (
    view === "PERIODE" ? generatePeriodeViewColumns : generateDomaineViewColumns
  )(programmation) as ColumnDef<unknown>[];
};

export { generateColumns };
