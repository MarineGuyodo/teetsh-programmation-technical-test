import type { Meta, StoryObj } from "@storybook/react";

import { DataTable } from "@/components/data-table";

const meta = {
  title: "Tables/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
    columns: { control: "object" }
  }
} as Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicData = [
  { skill: "Nombres jusqu'à 10", level: 1, subject: "Mathématiques" },
  { skill: "Additions", level: 3, subject: "Mathématiques" },
  { skill: "Matrices", level: 42, subject: "Mathématiques" }
];

const basicColumns = [
  { accessorKey: "subject", header: "Matière" },
  { accessorKey: "skill", header: "Compétence" },
  { accessorKey: "level", header: "Niveau" }
];

export const Basic: Story = {
  args: {
    data: basicData,
    columns: basicColumns
  }
};
