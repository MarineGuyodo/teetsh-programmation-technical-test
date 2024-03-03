// HOOKS
import { useQuery } from "@tanstack/react-query";
import useProgrammation from "./hooks/useProgrammation";

// SERVICES
import { getProgrammation } from "@/services/programmations.services";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { ProgrammationTable } from "@/pages/programmation/components/programmation-table";

function ProgrammationPage() {
  const {
    data: programmation,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["programmation"],
    queryFn: async () => await getProgrammation(),
    staleTime: Infinity
  });

  const { columns, data, view, handleToggleView } = useProgrammation();

  return (
    <div className="flex h-full w-full flex-col p-8 pt-0">
      {isLoading && <div>Chargement en cours...</div>}

      {isError && <div>Oups ! {error.message}</div>}

      <Button onClick={handleToggleView} data-testid="view-toggle">
        Par {view === "domaine" ? "période" : "domaine"}
      </Button>

      {!isLoading && !isError && !!programmation && (
        <ProgrammationTable columns={columns} data={data} />
      )}
    </div>
  );
}

export default ProgrammationPage;
