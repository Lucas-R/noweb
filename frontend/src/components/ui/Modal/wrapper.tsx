import { tv, type VariantProps } from "tailwind-variants";

const wrapper = tv({
    base: "fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen max-h-screen p-4 backdrop-blur-sm",
    variants: {
        bg: {
            dark: "bg-black/75",
            light: "bg-white/75",
        }
    },
    defaultVariants: {
        bg: "light"
    }
});

const content = tv({
    base: "w-full max-w-4xl max-h-full flex flex-col",
    variants: {
        bg: {
            dark: "bg-white",
            light: "bg-white",
        }
    },
    defaultVariants: {
        bg: "light"
    }
});

interface WrapperProps extends VariantProps<typeof wrapper>, React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
    isOpen: boolean
    wrapperClass?: string
    contentClass?: string
}

export default function Wrapper({ children, bg, isOpen, wrapperClass, contentClass, ...rest }: WrapperProps) {
    if (!isOpen) return null;

    return (
        <div
            role="dialog"
            aria-modal={isOpen}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            className={wrapper({ bg, class: wrapperClass })}
            {...rest}
        >
            <div className={content({ bg, class: contentClass })}>
                {children}
            </div>
        </div>
    )
}