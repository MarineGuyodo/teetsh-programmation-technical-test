// HOOKS
import { useQuery } from "@tanstack/react-query";
import useProgrammation from "./hooks/useProgrammation";

// SERVICES
import { getProgrammation } from "@/services/programmations.services";

// COMPONENTS
import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";
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
    queryFn: async () => getProgrammation(10),
    staleTime: Infinity
  });

  const { columns, data, view, handleToggleView } =
    useProgrammation(programmation);

  return (
    <div className="flex h-full w-full flex-col items-center justify-evenly p-8 pt-0">
      {isLoading && <Loader />}

      {isError && <Error message={error?.message} />}

      {!isLoading && !isError && !!programmation && (
        <>
          <Button
            onClick={handleToggleView}
            className="my-4"
            data-testid="view-toggle"
          >
            Par {view === "domaine" ? "période" : "domaine"}
          </Button>

          <ProgrammationTable columns={columns} data={data} />
        </>
      )}
    </div>
  );
}

export default ProgrammationPage;
