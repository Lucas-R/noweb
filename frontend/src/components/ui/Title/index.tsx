import { tv, type VariantProps } from "tailwind-variants"

const title = tv({
    base: "font-title",
    variants: {
        as: {
            h1: "",
            h2: "text-6xl lg:text-[6.25rem] lg:leading-[7.25rem]",
            h3: "text-[3.6rem] leading-16",
            h4: "text-[2.5rem] leading-[3.125rem]",
            h5: "text-7-5 leading-10",
            h6: "text-2xl",
            default: "text-base"
        }
    },
    defaultVariants: {
        as: "default"
    }
});

interface TitleProps extends VariantProps<typeof title>, React.HTMLAttributes<HTMLHeadingElement> {
    heading: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export default function Title({ heading: Heading, as, children, className }: TitleProps) {
    return (
        <Heading
            className={title({ as, class: className })}
        >{children}</Heading>
    )
}