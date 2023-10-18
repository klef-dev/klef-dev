/* eslint-disable @next/next/no-img-element */
"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { useTrack } from "@/hooks";
import os from "os";

const tools = [
    {
        name: "TypeScript",
        url: "https://typescriptlang.org",
        id: "typescript",
    },
    {
        name: "Go",
        url: "https://go.dev",
        id: "go",
    },
    {
        name: "Python",
        url: "https://python.org",
        id: "python",
    },
    {
        name: "PHP",
        url: "https://php.net",
        id: "php",
    },
    {
        name: "Nodejs",
        url: "https://nodejs.org",
        id: "nodedotjs",
    },
    {
        name: "React",
        url: "https://react.dev",
        id: "react",
    },
    {
        name: "Next.js",
        url: "https://nextjs.org",
        id: "nextdotjs/gray",
    },
    {
        name: "MongoDB",
        url: "https://mongodb.com",
        id: "mongodb",
    },
    {
        name: "PostgreSQL",
        url: "https://postgresql.org",
        id: "postgresql",
    },
    {
        name: "MySQL",
        url: "https://mysql.com",
        id: "mysql",
    },
    {
        name: "Redis",
        url: "https://redis.com",
        id: "redis",
    },
    {
        name: "Git",
        url: "https://git-scm.com",
        id: "git",
    },
    {
        name: "AWS",
        url: "https://aws.com",
        id: "amazonaws",
    },
    {
        name: "Docker",
        url: "https://docker.com",
        id: "docker",
    },
    {
        name: "Linux",
        url: "https://linux.com",
        id: "linux",
    },
    {
        name: "Caddy",
        url: "https://caddyserver.com",
        id: "caddy",
    },
];

type Track = {
    is_playing: boolean;
    name: string;
    id: string;
    url: string;
    artists: {
        name: string;
    }[];
};

export default function Home() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [showTools, setShowTools] = React.useState(false);

    const { data }: { data: Track } = useTrack();

    const toggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    React.useEffect(() => setMounted(true), []);

    const [time, setTime] = React.useState(new Date());

    React.useEffect(() => {
        console.log(`From: ${os.hostname()}`);
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;
    return (
        <main className="flex flex-col items-center justify-center w-screen min-h-screen">
            <div
                onClick={() => setShowTools(false)}
                className={`z-50 backdrop-blur-sm transition-all flex items-center justify-center duration-300 bg-black/80  w-screen fixed top-0 left-0 overflow-hidden ${
                    showTools ? "h-screen" : "h-0"
                }`}
            >
                <div className="grid items-center max-w-2xl grid-cols-4 gap-4 px-8 text-sm">
                    {tools.map((tool) => (
                        <Link
                            href={tool.url}
                            target="_blank"
                            key={tool.name}
                            className="flex flex-row items-center m-4 space-x-2 grayscale hover:grayscale-0"
                        >
                            <img
                                src={`https://cdn.simpleicons.org/${tool.id}`}
                                width={20}
                                height={20}
                                alt={tool.name}
                            />
                            <span className="hover:from-gray-500 hover:to-gray-500 after:hover:from-gray-400 after:hover:to-gray-500 relative whitespace-nowrap  bg-gradient-to-r from-gray-500 to-gray-500 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0">
                                {tool.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="">
                <button onClick={toggle} className="flex items-center justify-center w-10 h-10">
                    {theme === "dark" ? (
                        <svg
                            fill="#fff"
                            width="64px"
                            height="64px"
                            viewBox="-7.5 0 32 32"
                            version="1.1"
                            xmlns="http://w3.org/2000/svg"
                            className="scale-75 dark:block"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                {" "}
                                <title>dark</title>{" "}
                                <path d="M9.75 8.25v0.219c0 0.844-0.375 1.25-1.156 1.25s-1.125-0.406-1.125-1.25v-0.219c0-0.813 0.344-1.219 1.125-1.219s1.156 0.406 1.156 1.219zM12.063 9.25l0.156-0.188c0.469-0.688 1.031-0.781 1.625-0.344 0.625 0.438 0.719 1.031 0.25 1.719l-0.188 0.156c-0.469 0.688-1.031 0.781-1.625 0.313-0.625-0.438-0.688-0.969-0.219-1.656zM5 9.063l0.125 0.188c0.469 0.688 0.406 1.219-0.188 1.656-0.625 0.469-1.219 0.375-1.688-0.313l-0.125-0.156c-0.469-0.688-0.406-1.281 0.188-1.719 0.625-0.438 1.219-0.281 1.688 0.344zM8.594 11.125c2.656 0 4.844 2.188 4.844 4.875 0 2.656-2.188 4.813-4.844 4.813-2.688 0-4.844-2.156-4.844-4.813 0-2.688 2.156-4.875 4.844-4.875zM1.594 12.5l0.219 0.063c0.813 0.25 1.063 0.719 0.844 1.469-0.25 0.75-0.75 0.969-1.531 0.719l-0.219-0.063c-0.781-0.25-1.063-0.719-0.844-1.469 0.25-0.75 0.75-0.969 1.531-0.719zM15.375 12.563l0.219-0.063c0.813-0.25 1.313-0.031 1.531 0.719s-0.031 1.219-0.844 1.469l-0.188 0.063c-0.813 0.25-1.313 0.031-1.531-0.719-0.25-0.75 0.031-1.219 0.813-1.469zM8.594 18.688c1.469 0 2.688-1.219 2.688-2.688 0-1.5-1.219-2.719-2.688-2.719-1.5 0-2.719 1.219-2.719 2.719 0 1.469 1.219 2.688 2.719 2.688zM0.906 17.281l0.219-0.063c0.781-0.25 1.281-0.063 1.531 0.688 0.219 0.75-0.031 1.219-0.844 1.469l-0.219 0.063c-0.781 0.25-1.281 0.063-1.531-0.688-0.219-0.75 0.063-1.219 0.844-1.469zM16.094 17.219l0.188 0.063c0.813 0.25 1.063 0.719 0.844 1.469s-0.719 0.938-1.531 0.688l-0.219-0.063c-0.781-0.25-1.063-0.719-0.813-1.469 0.219-0.75 0.719-0.938 1.531-0.688zM3.125 21.563l0.125-0.188c0.469-0.688 1.063-0.75 1.688-0.313 0.594 0.438 0.656 0.969 0.188 1.656l-0.125 0.188c-0.469 0.688-1.063 0.75-1.688 0.313-0.594-0.438-0.656-0.969-0.188-1.656zM13.906 21.375l0.188 0.188c0.469 0.688 0.375 1.219-0.25 1.656-0.594 0.438-1.156 0.375-1.625-0.313l-0.156-0.188c-0.469-0.688-0.406-1.219 0.219-1.656 0.594-0.438 1.156-0.375 1.625 0.313zM9.75 23.469v0.25c0 0.844-0.375 1.25-1.156 1.25s-1.125-0.406-1.125-1.25v-0.25c0-0.844 0.344-1.25 1.125-1.25s1.156 0.406 1.156 1.25z" />{" "}
                            </g>
                        </svg>
                    ) : (
                        <svg
                            width="40px"
                            height="40px"
                            viewBox="0 0 24 24"
                            xmlns="http://w3.org/2000/svg"
                            className="block scale-50 dark:hidden"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z"
                                    stroke="#121212"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />{" "}
                            </g>
                        </svg>
                    )}
                </button>
            </div>
            <div className="max-w-2xl px-8 text-sm text-gray-500">
                Yooo 👋🏼, I&apos;m Abraham Ugbeshe.
                <br />
                <br />I build{" "}
                <Link
                    className="relative bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:bg-gradient-to-r after:from-green-400 after:to-green-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://github.com/klef-dev"
                    rel="noopener"
                    target="_blank"
                >
                    stuff
                </Link>{" "}
                that works on the web 👨🏽‍💻
                <br />
                I&apos;m obsessed with creating the best{" "}
                <span className="relative cursor-default bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-left hover:after:scale-x-100 after:origin-right after:scale-x-0">
                    workflows
                </span>{" "}
                and <br /> web experiences for developers.
                <br />
                <br />
                Co-Creator of{" "}
                <Link
                    className="relative bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-blue-400 after:to-blue-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://brimble.io"
                    target="_blank"
                >
                    Brimble
                </Link>{" "}
                a deployment platform.
                <br />
                <br />
                Here are the major{" "}
                <button
                    onClick={() => setShowTools(true)}
                    className="relative bg-gradient-to-r from-orange-900 to-orange-900 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-orange-900 after:to-orange-900 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                >
                    tools
                </button>{" "}
                I work with.
                <br />
                <br />
                Follow me on
                <br />
                <Link
                    className="relative  decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-white after:to-white  after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://x.com/klefdev"
                    rel="noopener"
                    target="_blank"
                >
                    𝕏
                </Link>
                ,{" "}
                <Link
                    className="relative bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-blue-600 after:to-blue-500 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://linkedin.com/in/klefdev"
                    rel="noopener"
                    target="_blank"
                >
                    linkedin
                </Link>
                ,{" "}
                <Link
                    className="relative bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-amber-400 after:to-amber-500 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://instagram.com/klefdev"
                    rel="noopener"
                    target="_blank"
                >
                    instagram
                </Link>{" "}
                or{" "}
                <Link
                    className="relative bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-red-500 after:to-pink-400 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="mailto:hi@klef.dev"
                >
                    say hi
                </Link>
                .
            </div>

            <div className="absolute bottom-0 left-0 gap-1 p-2 text-[10px] text-gray-500 justify-items-end sm:p-4">
                <Link
                    href={"https://brimble.io"}
                    target="_blank"
                    className="flex flex-row items-center gap-x-2"
                >
                    <div className="flex items-center h-10 pr-3 bg-black rounded-md">
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="scale-50"
                        >
                            <circle cx="18" cy="18" r="18" fill="#3366CC" />
                            <path
                                d="M20.0734 15.669H16.3527C16.289 15.669 16.228 15.6438 16.183 15.5988C16.138 15.5538 16.1127 15.4927 16.1127 15.4291C16.1127 15.3655 16.138 15.3045 16.183 15.2595C16.228 15.2145 16.289 15.1892 16.3527 15.1892H18.3997C19.3002 15.1892 20.1638 14.8315 20.8006 14.1947C21.4373 13.5579 21.795 12.6943 21.795 11.7938C21.795 10.8933 21.4373 10.0297 20.8006 9.39292C20.1638 8.75616 19.3002 8.39844 18.3997 8.39844H14.5782V11.6C13.8482 11.9387 13.2302 12.479 12.7969 13.1572C12.3637 13.8355 12.1333 14.6234 12.1329 15.4281C12.1319 15.8032 12.1816 16.1767 12.2807 16.5385C11.2308 17.194 10.423 18.1736 9.97926 19.329C9.53557 20.4845 9.48019 21.753 9.82151 22.9427C10.1628 24.1324 10.8823 25.1786 11.871 25.9231C12.8598 26.6676 14.0641 27.0699 15.3018 27.0692H20.0734C21.5852 27.0692 23.0352 26.4686 24.1043 25.3995C25.1733 24.3304 25.7739 22.8805 25.7739 21.3686C25.7739 19.8567 25.1733 18.4068 24.1043 17.3377C23.0352 16.2687 21.5852 15.6681 20.0734 15.6681V15.669ZM20.0734 25.7457H15.3018C14.2511 25.7464 13.2353 25.3688 12.4402 24.6819C11.6451 23.9951 11.1238 23.0449 10.9718 22.0053C10.8197 20.9656 11.0471 19.906 11.6122 19.0202C12.1774 18.1344 13.0425 17.4817 14.0494 17.1815C13.7235 16.7526 13.5239 16.2413 13.473 15.7051C13.4221 15.1688 13.5221 14.6291 13.7615 14.1466C14.001 13.6641 14.3704 13.2581 14.8282 12.9743C15.286 12.6905 15.814 12.5403 16.3527 12.5404H18.3997C18.5964 12.5404 18.7851 12.4623 18.9242 12.3232C19.0633 12.184 19.1415 11.9954 19.1415 11.7986C19.1415 11.6019 19.0633 11.4132 18.9242 11.2741C18.7851 11.1349 18.5964 11.0568 18.3997 11.0568H15.9045V9.72569H18.3997C18.6751 9.71975 18.9489 9.76887 19.2051 9.87017C19.4612 9.97146 19.6946 10.1229 19.8914 10.3156C20.0883 10.5082 20.2447 10.7383 20.3515 10.9922C20.4583 11.2461 20.5133 11.5188 20.5133 11.7943C20.5133 12.0698 20.4583 12.3425 20.3515 12.5964C20.2447 12.8503 20.0883 13.0804 19.8914 13.273C19.6946 13.4657 19.4612 13.6171 19.2051 13.7184C18.9489 13.8197 18.6751 13.8688 18.3997 13.8629H16.3527C16.1438 13.8577 15.936 13.8944 15.7415 13.9708C15.547 14.0471 15.3698 14.1616 15.2202 14.3075C15.0706 14.4534 14.9518 14.6278 14.8706 14.8203C14.7895 15.0129 14.7477 15.2197 14.7477 15.4286C14.7477 15.6376 14.7895 15.8444 14.8706 16.0369C14.9518 16.2295 15.0706 16.4038 15.2202 16.5497C15.3698 16.6956 15.547 16.8101 15.7415 16.8865C15.936 16.9629 16.1438 16.9995 16.3527 16.9944H20.0734C21.2221 17.0114 22.3181 17.4797 23.1245 18.2981C23.9308 19.1165 24.3828 20.2192 24.3828 21.3681C24.3828 22.517 23.9308 23.6198 23.1245 24.4382C22.3181 25.2566 21.2221 25.7249 20.0734 25.7419V25.7457ZM20.0734 18.3254H15.3018C14.8972 18.3183 14.4952 18.3918 14.1193 18.5416C13.7433 18.6915 13.4011 18.9148 13.1124 19.1984C12.8237 19.482 12.5944 19.8203 12.4379 20.1935C12.2813 20.5666 12.2007 20.9673 12.2007 21.372C12.2007 21.7767 12.2813 22.1773 12.4379 22.5505C12.5944 22.9237 12.8237 23.262 13.1124 23.5456C13.4011 23.8292 13.7433 24.0524 14.1193 24.2023C14.4952 24.3522 14.8972 24.4257 15.3018 24.4185H20.0734C20.478 24.4257 20.88 24.3522 21.2559 24.2023C21.6318 24.0524 21.9741 23.8292 22.2628 23.5456C22.5515 23.262 22.7808 22.9237 22.9373 22.5505C23.0938 22.1773 23.1744 21.7767 23.1744 21.372C23.1744 20.9673 23.0938 20.5666 22.9373 20.1935C22.7808 19.8203 22.5515 19.482 22.2628 19.1984C21.9741 18.9148 21.6318 18.6915 21.2559 18.5416C20.88 18.3918 20.478 18.3183 20.0734 18.3254ZM20.0734 23.0922H15.3018C14.8457 23.0922 14.4083 22.911 14.0857 22.5885C13.7632 22.266 13.582 21.8286 13.582 21.3725C13.582 20.9163 13.7632 20.4789 14.0857 20.1564C14.4083 19.8339 14.8457 19.6527 15.3018 19.6527H20.0734C20.5295 19.6527 20.9669 19.8339 21.2894 20.1564C21.6119 20.4789 21.7931 20.9163 21.7931 21.3725C21.7931 21.8286 21.6119 22.266 21.2894 22.5885C20.9669 22.911 20.5295 23.0922 20.0734 23.0922Z"
                                fill="white"
                            />
                        </svg>
                        <div className="w-[1px] h-10  bg-white/20 mr-2" />
                        <span className="">Deployed on Brimble</span>
                    </div>
                </Link>
            </div>

            <div className="absolute bottom-0 right-0 grid justify-items-end gap-1 p-2 text-[10px] text-gray-500 sm:p-4">
                <a
                    href={
                        data?.url ||
                        "https://open.spotify.com/user/60c4w28s5vmzo03qrlssmief6?si=0c72c362ccd94fe1"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid cursor-cell select-none grid-flow-col gap-1.5 pl-4 transition-all hover:text-gray-300"
                >
                    <div className="leading-4 break-all line-clamp-1">
                        {data?.is_playing && data?.name ? (
                            <span>
                                {data.name} by{" "}
                                {data.artists.map((artist) => artist.name).join(", ")}
                            </span>
                        ) : (
                            <span>Not Listening</span>
                        )}
                    </div>
                    <svg
                        className="w-4 h-4 icon icon-tabler icon-tabler-brand-spotify"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.7"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <path d="M9 15c1.5 -1 4 -1 5 .5"></path>
                        <path d="M8 11.973c2.5 -1.473 5.5 -.973 7.5 .527"></path>
                        <path d="M7 9c2 -1 6 -2 10 .5"></path>
                    </svg>
                </a>
                <div className="grid select-none grid-flow-col gap-1.5 transition-all hover:text-gray-300">
                    <div className="font-mono leading-4 tracking-wider">
                        {time.toLocaleTimeString("en-US", {
                            timeZone: "Africa/Lagos",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            hour12: true,
                        })}
                    </div>
                    <svg
                        className="w-4 h-4 icon icon-tabler icon-tabler-clock-hour-4"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.7"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <circle cx="12" cy="12" r="9"></circle>
                        <line
                            strokeWidth="1.7"
                            x1="12"
                            y1="12"
                            x2="10.250000000000004"
                            y2="15.031088913245537"
                        ></line>
                        <line
                            strokeWidth="1.7"
                            x1="12"
                            y1="12"
                            x2="8.654346968205711"
                            y2="15.715724127386972"
                        ></line>
                        <line
                            strokeWidth="1"
                            x1="12"
                            y1="12"
                            x2="6.370834875401148"
                            y2="15.25"
                        ></line>
                    </svg>
                </div>
                <a
                    href="https://google.com/maps/search/Abuja, Nigeria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid cursor-ne-resize select-none grid-flow-col gap-1.5 transition-all hover:text-gray-300"
                >
                    <div className="leading-4 break-all line-clamp-1">Abuja, Nigeria</div>
                    <svg
                        className="icon icon-tabler icon-tabler-location mx-px h-4 w-3.5"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="1.7"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z"></path>
                        <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5"></path>
                    </svg>
                </a>
            </div>
        </main>
    );
}
