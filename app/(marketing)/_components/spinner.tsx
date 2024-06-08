import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";


const spinnerVariants = cva(
    " text-muted-foreground animate-spin",
    {
        variants: {
            size: {
                default: " h-4 w-4",
                sm: " h-2 w-2",
                lg: " h-2 w-2",
                icon: 'h-10 w-10'
            }
        },
        defaultVariants: {
            size: "default",
        }
    }
)

// interface Spin