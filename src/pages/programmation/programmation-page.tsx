// HOOKS
import { useQuery } from "@tanstack/react-query";

// SERVICES
import { getProgrammation } from "@/services/programmations.services";
import { domaines, domaineViewColumns } from "@/stories/tables/domaine-view";

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
    queryFn: async () => await getProgrammation(),
    staleTime: Infinity
  });

  console.log({ programmation, isLoading, isError, error });

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-4">
      {isLoading && <div>Chargement en cours...</div>}

      {isError && <div>Oups ! {error.message}</div>}

      {!isLoading && !isError && !!programmation && (
        <ProgrammationTable
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          columns={domaineViewColumns as any[]}
          data={domaines}
        />
      )}
    </div>
  );
}

export default ProgrammationPage;
