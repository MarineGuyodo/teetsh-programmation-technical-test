import { cn } from "@/lib/utils";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";

import { ArrowUpDownIcon } from "lucide-react";

import {
  FR_PROGRAMMATION_VIEWS as VIEWS,
  type ProgrammationView as View
} from "@/enums/views";

interface ProgrammationTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  view?: View;
  handleToggleView?: () => void;
}

export function ProgrammationTable<TData, TValue>({
  columns,
  data,
  view,
  handleToggleView
}: ProgrammationTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Table
      className="h-full overflow-scroll border bg-neutral-50 dark:bg-neutral-900"
      data-testid="programmation-table"
    >
      <TableHeader className="sticky top-0 z-10 before:absolute before:-inset-y-[1px] before:inset-x-0 before:-z-10 before:bg-neutral-200/75 before:backdrop-blur-md dark:before:bg-neutral-700/75">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => {
              return (
                <TableHead
                  key={header.id}
                  className="text-center"
                  data-testid="column-header"
                >
                  {index === 0 && view && handleToggleView ? (
                    <Button
                      onClick={handleToggleView}
                      className="group w-full"
                      variant="ghost"
                      data-testid="view-toggle"
                    >
                      {VIEWS[view]}
                      <ArrowUpDownIcon className="ml-2 transition-all group-hover:rotate-90" />
                    </Button>
                  ) : header.isPlaceholder ? null : (
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} data-testid="data-row">
              {row.getVisibleCells().map((cell, index) => (
                <TableCell
                  key={cell.id}
                  className={cn(
                    "h-full w-[1%] min-w-52 p-0",
                    index === 0 && "min-w-20"
                  )}
                  data-testid="data-cell"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow data-testid="data-row--empty">
            <TableCell
              colSpan={columns.length}
              className="h-24 text-center"
              data-testid="data-cell--empty"
            >
              Cette programmation est encore vide.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
