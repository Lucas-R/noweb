import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { AlignRight, ChevronDown, X } from "lucide-react";
import type { MenuLinksProps } from "@schemas/MenuLinksSchema";
import { navigation } from "@constants/navigation";
import Container from "@components/ui/Container";
import Brand from "@assets/brands/brand.svg";

interface ItemProps extends React.HTMLAttributes<HTMLButtonElement> {
    data: MenuLinksProps
}

function Item({ data, ...rest }: ItemProps) {
    const [open, setOpen] = useState(false);

    function handleItem(data: MenuLinksProps) {
        if (data.sub?.length) {
            setOpen(prev => !prev);
            return;
        }
        console.log(data.to);
    }

    return (
        <>
            <button
                className="flex items-center"
                onClick={() => handleItem(data)}
                {...rest}
            >
                {data.label}
                {data.sub
                    && <ChevronDown className={`size-4 stroke-1 duration-500 ${open ? "rotate-180" : "rotate-0"}`} />
                }
            </button>
            <div className={`
                w-full overflow-hidden duration-500
                ${open ? "max-h-96" : "max-h-0"} 
            `}>
                {data.sub?.map(sub => (
                    <Link key={sub.label} to={sub.to}>{sub.label}</Link>
                ))}
            </div>
        </>
    )
}

export default function Menu() {
    const [active, setActive] = useState(false);

    function handleMenu() {
        setActive(prev => !prev);
    }

    return (
        <div className="border-b border-border">
            <Container className="h-20 md:h-[6.5rem] flex items-center justify-between">
                <Link to="/">
                    <img
                        src={Brand}
                        alt="Logo"
                        className="h-10 md:h-14"
                    />
                </Link>

                <button
                    className="w-10 h-10 border border-border flex items-center justify-center rounded-sm md:hidden"
                    onClick={handleMenu}
                >
                    {active
                        ? <X className="size-6 stroke-1" />
                        : <AlignRight className="size-6 stroke-1" />
                    }
                </button>

                <nav className={`
                    absolute top-20 w-full h-[calc(100vh-80px)] flex flex-col bg-white duration-500 border-t border-border pt-6 px-4
                    ${active ? "left-0" : "-left-full"}
                    md:border-0 md:p-0 md:w-auto md:h-auto
                `}>
                    <p className="text-xs uppercase mb-10 md:hidden">menu</p>
                    <div className="grow flex flex-col">
                        {navigation.map(nav => (
                            <Item key={nav.label} data={nav} />
                        ))}
                    </div>
                </nav>
            </Container>
        </div>
    )
}