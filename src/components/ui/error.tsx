import { forwardRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type ErrorProps = {
  message?: string;
  className?: string;
  children?: ReactNode;
};

const Error = forwardRef<HTMLDivElement, ErrorProps>(
  ({ message, className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("m-auto p-4", className)} {...props}>
        <p className="text-xl font-bold">Oups !</p>
        <p className="text-lg">{message || "Une erreur est survenue..."}</p>
        {children}
      </div>
    );
  }
);
Error.displayName = "Error";

export { Error };
