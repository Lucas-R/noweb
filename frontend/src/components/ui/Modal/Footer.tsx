import { tv, type VariantProps } from "tailwind-variants";

const footer = tv({
    base: "w-full py-4 px-6 flex items-center border-t border-border",
});

interface FooterProps extends VariantProps<typeof footer>, React.HTMLAttributes<HTMLDivElement> { }

export default function Footer({ children, className, ...rest }: FooterProps) {
    return (
        <div
            className={footer({ class: className })}
            {...rest}
        >
            {children}
        </div>
    )
}