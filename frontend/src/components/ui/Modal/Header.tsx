import { tv, type VariantProps } from "tailwind-variants";

const header = tv({
    base: "w-full py-4 px-6 flex items-center border-b border-border",
});

interface HeaderProps extends VariantProps<typeof header>, React.HTMLAttributes<HTMLDivElement> { }

export default function Header({ children, className, ...rest }: HeaderProps) {
    return (
        <div
            className={header({ class: className })}
            {...rest}
        >
            {children}
        </div>
    )
}