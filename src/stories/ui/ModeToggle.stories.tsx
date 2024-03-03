import type { Meta, StoryObj } from "@storybook/react";

import { ModeToggle } from "@/components/mode-toggle";

const meta = {
  title: "UI/ModeToggle",
  component: ModeToggle
} as Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
