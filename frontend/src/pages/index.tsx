import { useEffect, useState } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import type { UserProps } from '@schemas/userSchema';
import { users as data } from '@constants/users';
import Container from '@components/ui/Container'
import Title from '@components/ui/Title';
import Button from '@components/ui/Button';
import bg from '@assets/home/bg.svg';
import avatar from '@assets/home/wd.svg';
import paralax from '@assets/home/paralax.svg';
import ellipses from '@assets/home/ellipses.svg';
import video from '@assets/home/video.svg';

import 'swiper/css';
import { partiners } from '@constants/partiners';

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const [users, setUsers] = useState<UserProps[]>([]);

    useEffect(() => {
        setUsers(data.slice(0, 3));
    }, []);

    return (
        <>
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
                        <h1 className="text-[5.625rem] leading-[6rem] font-title lg:text-[12.5rem] lg:leading-[13rem]">
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

                        <h1 className="hidden font-title text-[12.5rem] leading-[13rem] lg:block ">Solution</h1>
                    </div>
                </Container>
            </header>

            <section className="hidden w-full h-[31.25rem] overflow-hidden md:block 2xl:h-[48.375rem]">
                <img
                    src={paralax}
                    alt="Digital Solution"
                    className="w-full h-full object-cover object-center"
                />
            </section>

            <section className="relative bg-black text-white">
                <div className="absolute top-6 right-6 w-20 lg:w-[6.666875rem] lg:top-[5.25rem] lg:right-32">
                    <img
                        src={ellipses}
                        alt="We collaborate with a few disability service providers to create inclusive goods that meet their requirements."
                        className="w-full object-cover"
                    />
                </div>

                <Container>
                    <div className="max-w-[52.5rem] mb-[3.75rem]">
                        <Title heading="h3" as="h3">
                            We collaborate with a few disability service
                            providers to create inclusive goods that
                            meet their requirements.
                        </Title>
                    </div>

                    <div className="grid grid-cols-1 gap-10 mb-20 lg:mb-[7.5rem] lg:grid-cols-12 lg:gap-4">
                        <div className="hidden col-span-1 lg:block"></div>
                        <div className="flex flex-col items-center justify-center lg:items-start lg:col-span-2">
                            <p className="text-[3.125rem] leading-[3.125rem] mb-4">25+</p>
                            <p className="font-bold">Years Of Experience</p>
                        </div>
                        <div className="lg:col-span-5">
                            <div className="flex flex-col items-start gap-10 max-w-[24.5rem]">
                                <p>
                                    Established in 1995, NEXIN has been a leading force
                                    in the digital landscape for over two decades.
                                    We're a passionate team of designers,
                                </p>

                                <Link to="/about-us" className="flex items-center gap-2 border-b border-white font-bold">
                                    More About us <ArrowUpRight className="size-4" />
                                </Link>
                            </div>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="flex flex-col items-start gap-10 max-w-[24.5rem]">
                                <p>
                                    Established in 1995, NEXIN has been a leading force
                                    in the digital landscape for over two decades.
                                    We're a passionate team of designers,
                                </p>

                                <Link to="/" className="flex items-center gap-2 border-b border-white font-bold">
                                    Get In Touch <ArrowUpRight className="size-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="relative flex items-center mb-8 lg:mb-[3.75rem]">
                            <Title heading="h4" as="h4" className="relative z-20 bg-black md:left-[7.5625rem] md:px-4">
                                We worked with global largest brands
                            </Title>
                            <span className="hidden absolute top-1/2 z-10 -translate-y-1/2 bg-gray w-full h-[0.0625rem] md:block 2xl"></span>
                        </div>
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            freeMode={{
                                enabled: true,
                                momentum: false,
                            }}
                            loop={true}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: false,
                            }}
                            speed={5000}
                            spaceBetween={80}
                            slidesPerView={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                768: {
                                    slidesPerView: 3,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                1536: {
                                    slidesPerView: 5,
                                }
                            }}
                        >
                            {[...partiners, ...partiners].map(partiner => (
                                <SwiperSlide key={partiner.label} className="cursor-grab active:cursor-grabbing">
                                    <div className="flex items-center justify-center">
                                        <img
                                            src={partiner.brand}
                                            alt={partiner.label}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </Container>
            </section>

            <section>
                <Container>

                </Container>
            </section>

            <section className="relative w-full h-96 overflow-hidden lg:h-[31.25rem] 2xl:h-[48.375rem]">
                <img
                    src={video}
                    alt="Video"
                    className="w-full h-full object-cover object-center"
                />

                <Button size="circle" className="absolute top-1/2 left-1/2 -translate-1/2 text-nowrap">
                    play video
                </Button>
            </section>

            <section>
                <Container>

                </Container>
            </section>

            <section className="bg-black">
                <Container py="lg" className="flex flex-col justify-between items-center gap-10 lg:flex-row">
                    <div>
                        <Title heading="h2" as="h2" className="font-title text-primary mb-10 lg:mb-[3.75rem]">
                            Let's Create <br />
                            Something Great
                        </Title>

                        <p className="text-primary">We shift you from today’s reality to tomorrow’s potential, ensuring</p>
                    </div>

                    <Button size="circle">
                        <p className=" inline-flex text-nowrap">
                            Let's Talk
                            <ArrowUpRight />
                        </p>
                    </Button>
                </Container>
            </section>
        </>
    )
}