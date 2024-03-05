// HELPERS
import { createColumnHelper } from "@tanstack/react-table";

// COMPONENTS
import { ItemCell } from "@/pages/programmation/components/item-cell";
import { TitleCell } from "@/pages/programmation/components/title-cell";

// TYPES AND ENUMS
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

const domaineColumnHelper = createColumnHelper<Domaine>();

const findItemByPeriodeId = (periodeId: string) => (row: Domaine) =>
  row.items.find((item: Item) => item.periodeId === periodeId);

const domaineViewColumns = [
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

export { domaines, domaineViewColumns };
