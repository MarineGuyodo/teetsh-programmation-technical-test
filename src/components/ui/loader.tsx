import { cn } from "@/lib/utils";

import Spinner from "@/components/ui/spinner";

const Loader = ({
  message = "Chargement en cours...",
  className
}: {
  message?: string;
  className?: string;
}) => (
  <div
    className={cn("flex flex-col items-center justify-center gap-8", className)}
    data-testid="loader"
  >
    <div>
      <Spinner />
    </div>
    <p>{message}</p>
  </div>
);

export { Loader };
