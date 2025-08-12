import { tv, type VariantProps } from "tailwind-variants"

const textarea = tv({
    base: "w-full p-4 border border-border outline-0 placeholder:text-text-secondary focus:border-primary resize-none",
})

interface TextareaProps extends VariantProps<typeof textarea>, React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export default function Textarea({ className, children, ...rest }: TextareaProps) {
    return (
        <textarea className={textarea({ class: className })} {...rest}>
            {children}
        </textarea>
    )
}