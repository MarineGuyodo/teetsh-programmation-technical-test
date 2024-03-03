import Spinner from "@/components/ui/spinner";

const Loader = ({
  message = "Chargement en cours..."
}: {
  message?: string;
}) => (
  <div
    className="flex flex-col items-center justify-center gap-8 bg-gradient-to-tr from-background/75 to-background"
    data-testid="loader"
  >
    <div>
      <Spinner />
    </div>
    <p>{message}</p>
  </div>
);

export { Loader };
