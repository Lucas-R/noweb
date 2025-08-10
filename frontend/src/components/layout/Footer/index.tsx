import { Link, useRouterState } from "@tanstack/react-router";
import Container from "@components/ui/Container";
import Icon from "@components/ui/Icon";

function Item({ to, label }: { to: string, label: string }) {
    const pathname = useRouterState({
        select: (state) => state.location.pathname
    });

    return (
        <Link
            to={to}
            className={`
                text-base font-semibold leading-7
                ${pathname === to && "text-primary"}
            `}
        >{label}</Link>
    )
}

export default function Footer() {
    return (
        <footer className="bg-white">
            <Container >
                <div className="flex flex-col gap-6 pt-20 pb-10 border-b border-border lg:flex-row lg:justify-between">
                    <div className="flex flex-col lg:flex-row lg:gap-12">
                        <Item to="/about-us" label="About Company" />
                        <Item to="/our-careers" label="Our Careers" />
                        <Item to="/services" label="Services" />
                        <Item to="/contact-us" label="contact" />
                    </div>

                    <div className="flex flex-col lg:flex-row lg:gap-12">
                        <Item to="/privacy-policy" label="Privacy Policy" />
                        <Item to="/terms-&-conditions" label="Terms & Conditions" />
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 py-[1.875rem] lg:flex-row lg:justify-between">
                    <div className="flex gap-5">
                        <a href="https://fb.com/" target="_black">
                            <Icon name="facebook" />
                        </a>
                        <a href="https://x.com" target="_black">
                            <Icon name="twitter" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <Icon name="instagram" />
                        </a>
                        <a href="https://www.behance.net/" target="_blank">
                            <Icon name="behance" />
                        </a>
                    </div>

                    <p className="text-base font-normal leading-7">Copyright © 2025 Nex. All Rights Reserved.</p>
                </div>
            </Container>
        </footer>
    )
}