import { useState } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { Link, useNavigate } from "@tanstack/react-router";
import { AlignRight, ArrowUpRight, ChevronDown, Search, X } from "lucide-react";
import type { MenuLinksProps } from "@schemas/MenuLinksSchema";
import { navigation } from "@constants/navigation";
import Container from "@components/ui/Container";
import Button from "@components/ui/Button";
import { Modal } from "@components/ui/Modal";
import Title from "@components/ui/Title";
import Brand from "@assets/brands/brand.svg";
import Input from "@components/ui/Input";
import Textarea from "@components/ui/Textarea";

const actions = tv({
    base: "flex items-center justify-center gap-6",
});

interface ActionsProps extends VariantProps<typeof actions>, React.HtmlHTMLAttributes<HTMLDivElement> {
    onSearch: () => void
}

function Actions({ className, onSearch }: ActionsProps) {
    return (
        <div className={actions({ class: className })}>
            <Button
                variant="outline"
                px="none"
                className="w-[3.5rem] flex items-center justify-center"
                onClick={() => onSearch()}
            >
                <Search className="size-4" />
            </Button>
            <Button className="flex items-center justify-center">
                Get A Quote <ArrowUpRight className="size-4" />
            </Button>
        </div>
    )
}

export default function Menu() {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [search, setSearch] = useState(false);
    const [item, setItem] = useState("");

    function handleSearch() {
        setSearch(prev => !prev);
    }

    function handleMenu() {
        setActive(prev => !prev);
    }

    function handleItem(selected: MenuLinksProps) {
        if (!selected.sub) {
            navigate({
                to: selected.to,
            });

            return;
        }

        if (item === selected.label) {
            setItem("");
            return;
        }

        setItem(selected.label);
    }

    return (
        <>
            <div className="fixed top-0 z-50 w-full h-auto bg-white border-b border-border">
                <Container py="none" className="h-20 lg:h-[6.5rem] flex items-center justify-between">
                    <Link to="/">
                        <img
                            src={Brand}
                            alt="Logo"
                            className="h-10 lg:h-14"
                        />
                    </Link>

                    <button
                        className="w-10 h-10 border border-border flex items-center justify-center rounded-sm lg:hidden"
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
                        lg:border-0 lg:p-0 lg:w-auto lg:h-auto lg:relative lg:top-0 lg:left-0
                        `}>
                        <p className="text-xs text-text-secondary uppercase mb-10 lg:hidden">menu</p>
                        <div className="grow flex flex-col lg:flex-row lg:gap-10">
                            {navigation.map(nav => (
                                <button
                                    className="relative group"
                                    key={nav.label}
                                    onClick={() => handleItem(nav)}
                                >
                                    <div className="w-full h-10 flex items-center gap-1 lg:h-auto lg:leading-10">
                                        {nav.label}
                                        {nav.sub
                                            && <ChevronDown className="size-4 stroke-1 duration-500 group-hover:rotate-180" />
                                        }
                                    </div>
                                    {nav.sub && (<div className={`
                                        flex flex-col overflow-hidden duration-500 pl-4 bg-white
                                        ${item === nav.label ? "max-h-96" : "max-h-0"}
                                        lg:absolute lg:top-10 lg:hidden lg:group-hover:block lg:max-h-96 lg:min-w-40 lg:py-6 lg:px-4 lg:shadow-2xl lg:shadow-black/50
                                        `}>
                                        {nav.sub?.map(sub => (
                                            <Link
                                                key={sub.label}
                                                to={sub.to}
                                                className="w-full h-10 flex items-center"
                                            >{sub.label}</Link>
                                        ))}
                                    </div>)}
                                </button>
                            ))}
                        </div>
                        <Actions className="lg:hidden" onSearch={handleSearch} />
                    </nav>

                    <Actions className="hidden lg:flex" onSearch={handleSearch} />
                </Container>
            </div>

            <Modal.wrapper isOpen={search} bg="dark">
                <Modal.header className="justify-between">
                    <Title heading="h6" as="h6" className="flex items-center gap-2 text-primary">
                        <Search className="size-6" /> Search zipcode
                    </Title>
                    <button
                        className="text-primary"
                        onClick={handleSearch}
                    >
                        <X className="size-6" />
                    </button>
                </Modal.header>
                <Modal.body className="">
                    <div className="flex items-center justify-end mb-4 pb-4 border-b border-border">
                        <Input
                            type="text"
                            placeholder="Zipcode"
                            className="max-w-96"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-4 md:grid-cols-5">
                        <div className="col-span-3 md:col-span-5">
                            <label
                                htmlFor="street"
                                className="block text-sm text-text-secondary mb-2"
                            >Logradouro</label>
                            <Input
                                id="street"
                                type="text"
                                placeholder="Public place"
                            />
                        </div>
                        <div className="col-span-3 md:col-span-2">
                            <label
                                htmlFor="neighborhood"
                                className="block text-sm text-text-secondary mb-2"
                            >Bairro</label>
                            <Input
                                id="neighborhood"
                                type="text"
                                placeholder="Neighborhood"
                            />
                        </div>
                        <div className="col-span-1">
                            <label
                                htmlFor="uf"
                                className="block text-sm text-text-secondary mb-2"
                            >UF</label>
                            <Input
                                id="uf"
                                type="text"
                                placeholder="UF"
                            />
                        </div>
                        <div className="col-span-2">
                            <label
                                htmlFor="state"
                                className="block text-sm text-text-secondary mb-2"
                            >Estado</label>
                            <Input
                                id="state"
                                type="text"
                                placeholder="State"
                            />
                        </div>
                        <div className="col-span-3 md:col-span-5">
                            <label
                                htmlFor="complement"
                                className="block text-sm text-text-secondary mb-2"
                            >Complemento</label>
                            <Textarea
                                id="complement"
                                placeholder="Complement"
                                rows={3}
                            ></Textarea>
                        </div>
                    </div>
                </Modal.body >
                <Modal.footer className="gap-4 justify-end">
                    <Button variant="danger"> Reset </Button>
                    <Button> Save </Button>
                </Modal.footer>
            </Modal.wrapper >
        </>
    )
}