import { tv, type VariantProps } from 'tailwind-variants';

const container = tv({
    base: "mx-auto",
    variants: {
        size: {
            full: "max-w-full",
            default: "max-w-full md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]"
        },
        py: {
            none: "py-0",
            default: "py-20 lg:py-[7.5rem]"
        },
        px: {
            none: "px-0",
            default: "px-4"
        }
    },
    defaultVariants: {
        size: "default",
        py: "default",
        px: "default"
    }
})

interface ContainerProps extends
    VariantProps<typeof container>,
    React.HTMLAttributes<HTMLDivElement> { }

export default function Container({ children, size, py, px, className, ...rest }: ContainerProps) {
    return (
        <div className={container({ size, py, px, class: className })} {...rest}>
            {children}
        </div>
    )
}