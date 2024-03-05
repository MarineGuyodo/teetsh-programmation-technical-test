// HOOKS
import { useQuery } from "@tanstack/react-query";
import useProgrammation from "./hooks/useProgrammation";

// SERVICES
import { getProgrammation } from "@/services/programmations.services";

// COMPONENTS
import { Loader } from "@/components/ui/loader";
import { Error } from "@/components/ui/error";
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
    <div className="flex h-full w-full flex-col items-center rounded-lg border md:bg-muted md:p-2 md:shadow-lg lg:p-4">
      {(isLoading || isError) && (
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-gradient-to-tr from-background/75 to-background">
          {isLoading && <Loader />}

          {isError && <Error message={error?.message} />}
        </div>
      )}

      {!isLoading && !isError && programmation && (
        <>
          <ProgrammationTable {...{ columns, data, view, handleToggleView }} />
          <div className="flex w-full grow flex-col justify-end border bg-neutral-50 dark:bg-neutral-900" />
        </>
      )}
    </div>
  );
}

export default ProgrammationPage;
