export type ProgrammationView = "DOMAINE" | "PERIODE";

const FR_PROGRAMMATION_VIEWS: {
  [key in ProgrammationView]: string;
} = {
  DOMAINE: "Domaine",
  PERIODE: "Période"
};

export { FR_PROGRAMMATION_VIEWS };
