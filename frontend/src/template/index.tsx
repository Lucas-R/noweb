import Menu from '@components/layout/Menu';
import Footer from '@components/layout/Footer';
import { HeadContent } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <HeadContent />
            <Menu />
            <div className="w-full min-h-screen pt-20 lg:pt-[6.5rem]">
                {children}
            </div>
            <Footer />
            <TanStackRouterDevtools />
        </>
    )
}