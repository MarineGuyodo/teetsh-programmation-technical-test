import type { Meta, StoryObj } from "@storybook/react";

import { ProgrammationTable } from "@/pages/programmation/components/programmation-table";

import type { ColumnDef } from "@tanstack/react-table";

import { domaines, domaineViewColumns } from "./domaine-view";
import { periodes, periodeViewColumns } from "./periode-view";

const meta = {
  title: "Tables/ProgrammationTable",
  component: ProgrammationTable,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    columns: { control: "object" }
  }
} as Meta<typeof ProgrammationTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    data: [],
    columns: [
      {
        accessorKey: "domaine.name",
        header: "Domaine"
      },
      {
        accessorKey: "some_imaginary_periode.name",
        header: "Periode 1"
      },
      {
        accessorKey: "another_imaginary_periode.name",
        header: "Etc."
      }
    ]
  }
};

export const DomaineView: Story = {
  args: {
    data: domaines,
    columns: domaineViewColumns as ColumnDef<unknown>[]
  }
};

export const PeriodeView: Story = {
  args: {
    data: periodes,
    columns: periodeViewColumns as ColumnDef<unknown>[]
  }
};
