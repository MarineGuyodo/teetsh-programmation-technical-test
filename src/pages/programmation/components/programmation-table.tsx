import { cn } from "@/lib/utils";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

interface ProgrammationTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function ProgrammationTable<TData, TValue>({
  columns,
  data
}: ProgrammationTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <Table className="h-full overflow-scroll border" data-testid="data-table">
      <TableHeader className="sticky top-0 z-50 h-20 bg-muted/75 backdrop-blur-md">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header, index) => {
              return (
                <TableHead
                  key={header.id}
                  className="text-center"
                  data-testid={index === 0 ? "origin-header" : "column-header"}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
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
