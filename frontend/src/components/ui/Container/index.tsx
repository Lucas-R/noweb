import { tv, type VariantProps } from 'tailwind-variants';

const container = tv({
    base: "mx-auto",
    variants: {
        size: {
            full: "max-w-full",
            default: "max-w-full md:max-w-[48rem] lg:max-w-[64rem] xl:max-w-[80rem]"
        },
        py: {
            none: "py-0"
        },
        px: {
            none: "px-0",
            default: "px-4"
        }
    },
    defaultVariants: {
        size: "default",
        px: "default"
    }
})

interface ContainerProps extends
    VariantProps<typeof container>,
    React.HTMLAttributes<HTMLDivElement> { }

export default function Container({ children, size, className, ...rest }: ContainerProps) {
    return (
        <div className={container({ size, class: className })} {...rest}>
            {children}
        </div>
    )
}