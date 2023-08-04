import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen w-screen">
            <div className="max-w-2xl px-8 text-sm text-gray-500">
                Hi, I'm Klef.
                <br />
                <br />I build{" "}
                <Link
                    className="relative bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:bg-gradient-to-r after:from-green-400 after:to-green-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring after:content-[''] hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://github.com/klefcodes"
                    rel="noopener"
                    target="_blank"
                >
                    stuff
                </Link>{" "}
                that works on the web!
                <br />
                I'm obsessed with crafting{" "}
                <span className="relative cursor-default bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-gradient-to-r after:from-orange-400 after:to-orange-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-left hover:after:scale-x-100 after:origin-right after:scale-x-0">
                    delightful
                </span>{" "}
                UI and <br /> web experiences.
                <br />
                <br />I made{" "}
                <Link
                    className="relative bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400 after:to-cyan-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://brimble.io"
                    target="_blank"
                >
                    Brimble
                </Link>{" "}
                .<br />
                {/* <br />I worked at <br />
                <Link
                    className="relative bg-gradient-to-r from-indigo-500 to-blue-300 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-indigo-500 after:to-blue-300 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://ramper.xyz"
                    rel="noopener"
                    target="_blank"
                >
                    Ramper
                </Link>
                ,{" "}
                <Link
                    className="relative bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-blue-500 after:to-blue-400 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://toss.im/en"
                    rel="noopener"
                    target="_blank"
                >
                    Toss
                </Link>
                ,{" "}
                <Link
                    className="relative bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-slate-300 after:to-slate-400 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://www.odkmedia.net/"
                    rel="noopener"
                    target="_blank"
                >
                    ODK
                </Link>
                , and organized{" "}
                <Link
                    className="relative bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-yellow-500 after:to-yellow-400 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://jsconf.kr"
                    rel="noopener"
                    target="_blank"
                >
                    JSConf
                </Link>
                .<br /> */}
                <br />
                Follow me on
                <br />
                <Link
                    className="relative bg-gradient-to-r from-white to-white bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-white after:to-white after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://x.com/klefcodes"
                    rel="noopener"
                    target="_blank"
                >
                    𝕏
                </Link>
                ,{" "}
                <Link
                    className="relative bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-blue-600 after:to-blue-500 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://www.linkedin.com/in/klefcodes/"
                    rel="noopener"
                    target="_blank"
                >
                    linkedin
                </Link>
                ,{" "}
                <Link
                    className="relative bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-amber-400 after:to-amber-500 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="https://instagram.com/klefcodes"
                    rel="noopener"
                    target="_blank"
                >
                    instagram
                </Link>{" "}
                or{" "}
                <Link
                    className="relative bg-gradient-to-r from-red-500 to-pink-400 bg-clip-text text-transparent decoration-green-500 decoration-2 transition-all after:absolute after:-bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-gradient-to-r after:from-red-500 after:to-pink-400 after:opacity-80 after:transition-transform after:duration-500 after:ease-spring hover:after:origin-bottom-left hover:after:scale-x-100 after:origin-right after:scale-x-0"
                    href="mailto:me@klefcodes.net"
                >
                    say hi
                </Link>
                .
            </div>
        </main>
    );
}
