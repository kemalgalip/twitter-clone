import React from "react";
import twitterLogo from "../img/twitter-logo.svg";
import pp from "../img/pp.jpg";

export default function Header() {
    const [activeLink, setActiveLink] = React.useState(0);

    const linkTexts = ["Home", "Explore", "Notifications", "Messages", "Lists", "Bookmarks", "Verified", "Profile", "More"];

    const linkTextsMapped = linkTexts.map((item, idx) => {
        return (
            <a key={idx} className={`${activeLink === idx && "active"} ${idx > 3 && "hidden xs:block"} py-[0.20rem]`} onClick={() => setActiveLink(idx)}>
                <span>
                    <div className="border-2 border-gray-200"></div>
                    <p>{item}</p>
                </span>
            </a>
        );
    });

    return (
        <header className="sticky bottom-0 z-10 flex max-h-screen shrink-0 flex-col overflow-auto border-t border-gray-600 bg-black xs:top-0 xs:border-t-0 xs:pb-3 xs:pt-1 sm:ml-[15px] sm:pr-[15px] xl:w-[270px]">
            <a href="/" className="text-0 mx-auto hidden rounded-full p-3 transition duration-150 hover:bg-white/10 xs:block xl:ml-0">
                <img src={twitterLogo} className="h-7 w-7 object-contain" />
            </a>
            <div className="links flex xs:mt-1 xs:flex-col">{linkTextsMapped}</div>
            <button className="mx-auto my-2 hidden w-fit rounded-full bg-sky-500 p-3 text-lg font-bold transition duration-150 hover:bg-sky-600 xs:block xl:w-full xl:py-3">
                <div className="block aspect-square w-[1.45rem] rounded-full border bg-white xl:mt-0.5 xl:hidden"></div>
                <p className="hidden xl:block">Tweet</p>
            </button>
            <section className="hidden w-fit cursor-pointer items-center gap-3 rounded-full p-3 transition duration-150 hover:bg-white/10 xs:flex lg:mt-auto xl:w-full xl:px-3 xl:py-1.5">
                <figure className="text-[0]">
                    <img className="aspect-square w-10 max-w-full rounded-full" src={pp} width="50" height="50" alt="Profile Picture" />
                </figure>
                <div className="hidden overflow-hidden xl:block">
                    <p className="font-semibold text-white">Benjamin</p>
                    <p className="font-thin text-gray-400">@BenjaminWalker</p>
                </div>
                <div className="hidden items-center gap-1 xl:ml-auto xl:flex">
                    <div className="aspect-square w-[0.19rem] rounded-full bg-white"></div>
                    <div className="aspect-square w-[0.19rem] rounded-full bg-white"></div>
                    <div className="aspect-square w-[0.19rem] rounded-full bg-white"></div>
                </div>
            </section>
        </header>
    );
}
