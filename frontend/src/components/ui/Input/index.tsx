import { tv, type VariantProps } from "tailwind-variants"

const input = tv({
    base: "w-full h-10 px-4 border border-border outline-0 placeholder:text-text-secondary focus:border-primary",
})

interface InputProps extends VariantProps<typeof input>, React.InputHTMLAttributes<HTMLInputElement> { }

export default function Input({ className, ...rest }: InputProps) {
    return (
        <input className={input({ class: className })} {...rest} />
    )
}