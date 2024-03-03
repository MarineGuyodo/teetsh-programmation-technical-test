import { ProgrammationTable } from "@/pages/programmation/components/programmation-table";

function ProgrammationPage() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      <ProgrammationTable columns={[]} data={[]} />
    </div>
  );
}

export default ProgrammationPage;
