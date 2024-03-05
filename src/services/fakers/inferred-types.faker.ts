import type faker from "@/services/fakers/response.faker.json";

export type Programmation = typeof faker.data;

export type Periode = (typeof faker.data.attributes.periodes)[number];

export type Matiere = (typeof faker.data.attributes.matieres)[number];

export type Domaine = Matiere["domaines"][number];

export type Item = Matiere["domaines"][number]["items"][number];
