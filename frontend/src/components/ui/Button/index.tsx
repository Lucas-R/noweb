import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
    base: "font-semibold",
    variants: {
        variant: {
            outline: "bg-transparent border border-border",
            default: "bg-primary"
        },
        size: {
            default: "h-[3.5rem] text-base"
        },
        px: {
            none: "px-0",
            default: "px-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default",
        px: "default"
    }
});

interface ButtonProps extends VariantProps<typeof button>, React.HTMLAttributes<HTMLButtonElement> { }

export default function Button({ children, variant, size, px, className, ...rest }: ButtonProps) {
    return (
        <button className={button({ variant, size, px, class: className })} {...rest}>
            {children}
        </button>
    )
}