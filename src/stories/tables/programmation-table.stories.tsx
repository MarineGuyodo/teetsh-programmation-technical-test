import type { Meta, StoryObj } from "@storybook/react";

import { ProgrammationTable } from "@/pages/programmation/components/programmation-table";

import { domaines, domaineViewColumns } from "./domaine-view";

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
    columns: []
  }
};

export const DomaineView: Story = {
  args: {
    data: domaines,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: domaineViewColumns as any[]
  }
};
