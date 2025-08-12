import { tv, type VariantProps } from "tailwind-variants";

const body = tv({
    base: "grow w-full py-4 px-6 overflow-auto",
});

interface BodyProps extends VariantProps<typeof body>, React.HTMLAttributes<HTMLDivElement> { }

export default function Body({ children, className, ...rest }: BodyProps) {
    return (
        <div
            className={body({ class: className })}
            {...rest}
        >
            {children}
        </div>
    )
}