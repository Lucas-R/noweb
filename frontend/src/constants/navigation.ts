import type { MenuLinksProps } from "@schemas/MenuLinksSchema";

export const navigation: MenuLinksProps[] = [
    { 
        to: "/", 
        label: "Home"
    },
    { 
        to: "/", 
        label: "About Us", 
        sub: [
            { to: "/", label: "About Us - item" }
        ] 
    },
    { 
        to: "/", 
        label: "Portifolio", 
        sub: [
            { to: "/", label: "Portifolio - item" }
        ] 
    },
    { 
        to: "/", 
        label: "Pages", 
        sub: [
            { to: "/", label: "Pages - item" }
        ] 
    },
    { 
        to: "/", 
        label: "Blog",
        sub: [
            { to: "/", label: "Blog - item" }

        ] 
    },
    { 
        to: "/", 
        label: "Contact Us"
    }
]