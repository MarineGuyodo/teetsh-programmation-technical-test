import { createColumnHelper } from "@tanstack/react-table";

import { ItemCell } from "@/pages/programmation/components/item-cell";
import { TitleCell } from "@/pages/programmation/components/title-cell";

import faker from "@/services/fakers/response.faker.json";
import { Periode, Domaine, Item } from "@/services/fakers/inferred-types.faker";

const domaines = faker.data.attributes.matieres[0].domaines as Domaine[];

const periodes = faker.data.attributes.periodes as Periode[];

const domaineColumnHelper = createColumnHelper<Domaine>();

const findItemByPeriodeId = (periodeId: string) => (row: Domaine) =>
  row.items.find((item: Item) => item.periodeId === periodeId);

const domaineViewColumns = [
  domaineColumnHelper.accessor("name", {
    header: "Domaine",
    cell: TitleCell("domaine")
  }),
  ...periodes.map((periode) =>
    domaineColumnHelper.accessor(findItemByPeriodeId(periode.id), {
      header: periode.name,
      cell: ItemCell
    })
  )
];

export { domaines, domaineViewColumns };