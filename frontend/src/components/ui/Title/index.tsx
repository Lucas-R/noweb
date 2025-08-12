import { tv, type VariantProps } from "tailwind-variants"

const title = tv({
    variants: {
        as: {
            h1: "font-secondary text-[5.625rem] leading-[6rem] lg:text-[12.5rem] lg:leading-[13rem]",
            h2: "font-title text-6xl lg:text-[6.25rem] lg:leading-[7.25rem]",
            h3: "font-title text-[3.6rem] leading-16",
            h4: "font-title text-[2.5rem] leading-[3.125rem]",
            h5: "font-title text-7-5 leading-10",
            h6: "font-title text-2xl",
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