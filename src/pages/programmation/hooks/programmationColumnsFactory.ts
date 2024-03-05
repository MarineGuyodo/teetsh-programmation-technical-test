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
import {
  FR_PROGRAMMATION_VIEWS,
  type ProgrammationView as View
} from "@/enums/views";

/**
 * UTILS
 */

const periodeColumnHelper = createColumnHelper<Periode>();
const domaineColumnHelper = createColumnHelper<Domaine>();

const findItemByPeriodeId = (items: Item[], periodeId: string) =>
  items.find((item) => item.periodeId === periodeId);

/**
 * COLUMNS
 */

// PERIODE VIEW
const generatePeriodeViewColumns = (programmation: Programmation) => {
  const domaines = programmation.attributes.matieres[0].domaines;

  const findItemsByDomaineId = (domaineId: string) =>
    domaines.find((domaine) => domaine.id === domaineId)?.items || [];

  const findItem = (domaineId: string) => (row: Periode) =>
    findItemByPeriodeId(findItemsByDomaineId(domaineId), row.id);

  return [
    periodeColumnHelper.accessor("name", {
      header: FR_PROGRAMMATION_VIEWS.PERIODE,
      cell: TitleCell("PERIODE")
    }),
    ...domaines.map((domaine) =>
      periodeColumnHelper.accessor(findItem(domaine.id), {
        header: domaine.name,
        cell: ItemCell
      })
    )
  ];
};

// DOMAINE VIEW
const generateDomaineViewColumns = (programmation: Programmation) => {
  const periodes = programmation.attributes.periodes;

  const findItem = (periodeId: string) => (row: Domaine) =>
    findItemByPeriodeId(row.items, periodeId);

  return [
    domaineColumnHelper.accessor("name", {
      header: FR_PROGRAMMATION_VIEWS.DOMAINE,
      cell: TitleCell("DOMAINE")
    }),
    ...periodes.map((periode) =>
      domaineColumnHelper.accessor(findItem(periode.id), {
        header: periode.name,
        cell: ItemCell
      })
    )
  ];
};

/**
 * EXPORTS
 */

const generateColumns = (programmation: Programmation, view: View) => {
  return (
    view === "PERIODE" ? generatePeriodeViewColumns : generateDomaineViewColumns
  )(programmation) as ColumnDef<unknown>[];
};

export { generateColumns };
