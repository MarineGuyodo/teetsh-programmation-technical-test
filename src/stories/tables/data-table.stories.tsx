import type { Meta, StoryObj } from "@storybook/react";

// import { createColumnHelper } from "@tanstack/react-table";

import { DataTable } from "@/components/data-table";

const meta = {
  title: "Tables/DataTable",
  component: DataTable,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object", required: true },
    columns: { control: "object", required: true }
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

export const Empty: Story = {
  args: {
    data: [],
    columns: basicColumns
  }
};

/**
 * Two dimensions table
 */

type Task = {
  id: number;
  name: string;
  description: string;
};

const tasks: Task[] = [
  { id: 1, name: "First task", description: "test..." },
  { id: 2, name: "Second task", description: "test..." },
  { id: 3, name: "Third task", description: "test..." }
];

// const assignations = [
//   { name: "Monday", taskId: 2 },
//   { name: "Tuesday", taskId: 3 },
//   { name: "Wednesday", taskId: 2 },
//   { name: "Thursday", taskId: 1 }
// ];

// const helper = createColumnHelper<Task>();

// const taskColumns = [helper.accessor("name", { header: "Task" })];

const taskColumnsWithoutHelper = [
  { accessorKey: "id", header: "ID" },
  { accessorKey: "name", header: "Task" },
  { accessorKey: "description", header: "Description" }
];

export const TwoDimensions: Story = {
  args: {
    data: tasks,
    // columns: taskColumns
    columns: taskColumnsWithoutHelper
  }
};
