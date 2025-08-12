import { tv, type VariantProps } from "tailwind-variants"

const tag = tv({
    base: "text-text-secondary",
    variants: {
        variant: {
            bigger: "uppercase font-bold text-base leading-6 mb-[1.875rem]",
            smaller: "text-sm leading-6",
            default: "text-base"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

interface TagProps extends VariantProps<typeof tag>, React.HTMLAttributes<HTMLParagraphElement> { }

export default function Tag({ children, variant, className }: TagProps) {
    return (
        <p className={tag({ variant, class: className })}>{children}</p>
    )
}