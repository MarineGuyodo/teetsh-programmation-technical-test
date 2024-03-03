import { createColumnHelper } from "@tanstack/react-table";

import faker from "@/services/fakers/response.faker.json";
import { Periode, Domaine, Item } from "@/services/fakers/inferred-types.faker";

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
  periodeColumnHelper.accessor("name", { header: "Période" }),
  ...domaines.map((domaine) =>
    periodeColumnHelper.accessor(findItemByDomaineId(domaine.id), {
      header: domaine.name,
      cell: ({ getValue }) => getValue()?.value || "Vide..."
    })
  )
];

export { periodes, periodeViewColumns };
