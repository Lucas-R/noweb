import type { MenuLinksProps } from "@schemas/MenuLinksSchema";

export const navigation: MenuLinksProps[] = [
    { 
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
        label: "Portifolio", 
        sub: [
            { to: "/portifolio/project-1", label: "Project - item" },
            { to: "/portifolio/project-2", label: "Project - item" }
        ] 
    },
    { 
        label: "Pages", 
        sub: [
            { to: "/pages/page-1", label: "Pages - one" },
            { to: "/pages/page-2", label: "Pages - two" },
            { to: "/pages/page-3", label: "Pages - three" }
        ] 
    },
    { 
        label: "Blog",
        sub: [
            { to: "/blog/post-1", label: "post - item" }

        ] 
    },
    { 
        to: "/contact-us", 
        label: "Contact Us"
    }
]