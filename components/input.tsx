import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full px-5 py-2 text-[1.0625rem] text-neutral-950 dark:text-neutral-50 placeholder:text-neutral-950/20 dark:placeholder:text-neutral-50/20 font-text bg-transparent flex w-full focus-visible:outline-none focus-visible:ring-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }