import type { Meta, StoryObj } from "@storybook/react";

import { ProgrammationTable } from "@/pages/programmation/components/programmation-table";

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
