// HELPERS
import { createColumnHelper } from "@tanstack/react-table";

// COMPONENTS
import { ItemCell } from "@/pages/programmation/components/item-cell";
import { TitleCell } from "@/pages/programmation/components/title-cell";

// TYPES
import type {
  Periode,
  Domaine,
  Item
} from "@/services/fakers/inferred-types.faker";
import { FR_PROGRAMMATION_VIEWS } from "@/enums/views";

// DATA
import faker from "@/services/fakers/response.faker.json";

const domaines = faker.data.attributes.matieres[0].domaines as Domaine[];

const periodes = faker.data.attributes.periodes as Periode[];

const periodeColumnHelper = createColumnHelper<Periode>();

const findDomaineItemsById = (domaineId: string) =>
  domaines.find((domaine) => domaine.id === domaineId)?.items || [];

const findItemByDomaineId = (domaineId: string) => (row: Periode) =>
  findDomaineItemsById(domaineId).find(
    (item: Item) => item.periodeId === row.id
  );

const periodeViewColumns = [
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

export { periodes, periodeViewColumns };
