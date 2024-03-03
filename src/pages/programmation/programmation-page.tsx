// HOOKS
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getProgrammation } from "@/services/programmations.services";

// COMPONENTS
import { ProgrammationTable } from "@/pages/programmation/components/programmation-table";

function ProgrammationPage() {
  const {
    data: programmation,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ["programmation"],
    queryFn: async () => await getProgrammation(10),
    staleTime: Infinity
  });

  console.log({ programmation, isLoading, isError, error });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      {isLoading && <div>Chargement en cours...</div>}

      {isError && <div>Oups ! {error.message}</div>}

      {!isLoading && !isError && !!programmation && (
        <ProgrammationTable columns={[]} data={[]} />
      )}
    </div>
  );
}

export default ProgrammationPage;
