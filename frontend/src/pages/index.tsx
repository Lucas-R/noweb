import { useEffect, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowUpRight } from 'lucide-react';
import { users as data } from '@constants/users';
import Container from '@components/ui/Container'
import bg from '@assets/home/bg.svg';
import avatar from '@assets/home/wd.svg';
import type { UserProps } from '@schemas/userSchema';

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        setUsers(data.slice(0, 3));
    }, []);

    return (
        <header
            className="bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <Container>
                <p className="mb-[1.875rem]">
                    Great design services <br />
                    without the pretentiousness.!
                </p>

                <div className="relative flex flex-col gap-10 lg:flex-row lg:gap-[3.75rem] mb-20">
                    <h1 className="text-[5.625rem] leading-[6rem] font-secondary lg:text-[12.5rem] lg:leading-[13rem]">
                        Digital <span className="lg:hidden">Solution</span>
                    </h1>
                    <div className="flex flex-col items-center gap-[3.75rem] lg:flex-row">
                        <div className="max-w-[29.0625rem]">
                            <p className="mb-10">
                                We believe that the surest measure of success is when our
                                partners with us more than half It's more than just the
                                visuals. We're here to support your growth.
                            </p>
                            <Link
                                to="/services"
                                className="font-semibold w-auto inline-flex items-center float-end border-b"
                            >
                                View All Services <ArrowUpRight className="size-4" />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-5 2xl:absolute 2xl:-right-[3.75rem]">
                            <div className="w-40 h-16 flex items-center justify-center border rounded-full p-2">
                                {users.map((user, i) => (
                                    <Link
                                        key={user.name}
                                        to="/perfil/$username"
                                        params={{ username: user.username }}
                                        className={`
                                            ${i !== 0 && "-ml-4"}
                                            group relative z-10 w-12 h-12 border border-border rounded-full hover:z-50
                                        `}
                                    >
                                        <div className="hidden absolute -top-6 left-1/2 -translate-x-1/2 z-50 py-0.5 px-2 border border-border rounded-full bg-white group-hover:block">
                                            <p className="text-xs whitespace-nowrap">{user.name}</p>
                                        </div>

                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="w-full h-full object-cover object-center rounded-full"
                                        />
                                    </Link>
                                ))}
                                <Link to="/" className="relative z-40 -ml-4 w-12 h-12 border border-border flex items-center justify-center bg-black text-white rounded-full hover:z-50">
                                    15k+
                                </Link>
                            </div>
                            <p className="text-center">Excellent <strong>4.000+</strong> Reviews</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-[3.75rem] lg:justify-start">
                    <div className="relative w-full max-w-[21.875rem] h-[8.875rem]">
                        <div className="w-full max-w-3xs h-full flex items-center bg-primary rounded-big px-10">
                            <p className="text-3xl leading-10 font-bold  uppercase">
                                web <br />
                                design
                            </p>
                        </div>

                        <div className="absolute top-0 right-0 z-10 w-[8.875rem] h-[8.875rem] flex items-center justify-center bg-black rounded-big">
                            <img
                                src={avatar}
                                alt="Web Design"
                                width={101}
                                height={102}
                            />
                        </div>
                    </div>

                    <h1 className="hidden font-secondary text-[12.5rem] leading-[13rem] lg:block ">Solution</h1>
                </div>
            </Container>
        </header>
    )
}