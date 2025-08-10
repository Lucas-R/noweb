import type { MenuLinksProps } from "@schemas/MenuLinksSchema";

export const navigation: MenuLinksProps[] = [
    { 
        to: "/", 
        label: "Home",
        sub: [
            { to: "/", label: "Home - item" }
        ] 
    },
    { 
        to: "/about-us", 
        label: "About Us", 
    },
    { 
        to: "/portifolio", 
        label: "Portifolio", 
        sub: [
            { to: "/portifolio/item-1", label: "Portifolio - item" }
        ] 
    },
    { 
        to: "/", 
        label: "Pages", 
        sub: [
            { to: "/pages/item-1", label: "Pages - item" }
        ] 
    },
    { 
        to: "/", 
        label: "Blog",
        sub: [
            { to: "/blog/item-1", label: "Blog - item" }

        ] 
    },
    { 
        to: "/contact-us", 
        label: "Contact Us"
    }
]