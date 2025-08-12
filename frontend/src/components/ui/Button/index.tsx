import { tv, type VariantProps } from "tailwind-variants";

const button = tv({
    base: "font-semibold duration-500 hover:scale-105",
    variants: {
        variant: {
            outline: "bg-transparent border border-border",
            danger: "bg-danger border border-border",
            default: "bg-primary"
        },
        size: {
            circle: "w-[9.5rem] h-[9.5rem] flex items-center justify-center rounded-full",
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