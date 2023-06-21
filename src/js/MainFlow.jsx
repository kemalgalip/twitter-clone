import React from "react";
import pp from "../img/pp.jpg";
import tweetsData from "./tweetsData";

export default function MainFlow() {
    const [forYouSelected, setForYouSelected] = React.useState(true);
    const [tweetContent, setTweetContent] = React.useState("");

    const tweetRef = React.useRef(null);

    function updateTweetRefContent(e) {
        setTweetContent(e.target.innerText);
    }

    const tweetsMapped = tweetsData.map((item, idx) => {
        return (
            <div key={idx} className="cursor-pointer border-b border-white/25 transition duration-150 hover:bg-white/5">
                <div className="flex gap-3 px-4 pt-1">
                    <div className="relative mt-2 shrink-0">
                        <figure className="h-fit rounded-full text-[0] transition duration-150 hover:brightness-[0.8]">
                            <img src={item.profilePicture} className="aspect-square w-10 rounded-full" />
                        </figure>
                        {item.reply && <div className="reply-div"></div>}
                    </div>
                    <div className="w-full">
                        <div className="flex items-center">
                            <div className="xs:flex">
                                <p className="break-word h-6 overflow-hidden text-ellipsis font-bold hover:underline xs:mr-2">{item.name}</p>
                                <div className="flex overflow-hidden">
                                    <p className="break-word mr-2 h-6 overflow-hidden text-ellipsis font-light text-white/40">@{item.username}</p>
                                    <span className="leading-1 mr-2 mt-1 shrink-0 text-xs font-light text-white/40">&#x2022;</span>
                                    <p className="shrink-0 font-light text-white/40 hover:underline">{item.time}</p>
                                </div>
                            </div>
                            <button className="tweet-dots-button -mr-2 ml-auto flex aspect-square shrink-0 items-center justify-between gap-[.13rem] rounded-full p-2 transition duration-150 hover:bg-sky-800/30">
                                <div className="h-[.19rem] w-[.19rem] rounded-full bg-gray-600 transition duration-150"></div>
                                <div className="h-[.19rem] w-[.19rem] rounded-full bg-gray-600 transition duration-150"></div>
                                <div className="h-[.19rem] w-[.19rem] rounded-full bg-gray-600 transition duration-150"></div>
                            </button>
                        </div>
                        <p className="break-word leading-5 text-gray-200">{item.tweet}</p>
                        {item.image && <img src={item.image.source} className="mt-3 min-w-full rounded-2xl border border-white/25" width={item.image.width} height={item.image.height} />}
                        {item.quote && (
                            <div className="mt-3 min-w-full rounded-2xl border border-white/25 px-3 py-2 transition duration-150 hover:bg-white/5">
                                <div className="flex items-center">
                                    <figure className="text-0 mr-2 shrink-0">
                                        <img src={item.quote.profilePicture} className="aspect-square w-5 rounded-full" />
                                    </figure>
                                    <p className="break-word h-6 overflow-hidden text-ellipsis font-bold hover:underline xs:mr-2">{item.quote.name}</p>
                                    <p className="break-word mr-2 h-6 overflow-hidden text-ellipsis font-light text-white/40">@{item.quote.username}</p>
                                    <span className="leading-1 mr-2 mt-1 shrink-0 text-xs font-light text-white/40">&#x2022;</span>
                                    <p className="shrink-0 font-light text-white/40 hover:underline">{item.quote.time}</p>
                                </div>
                                <p className="mt-1">{item.quote.tweet}</p>
                            </div>
                        )}
                        <div className="my-1 flex w-full justify-between">
                            <button className="tweet-options-button flex w-full items-center gap-1">
                                <div className="flex items-center">
                                    <div className="shrink-0 rounded-full p-2 transition duration-150">
                                        <div className="aspect-square w-4 rounded-full border border-white/50 transition duration-150"></div>
                                    </div>
                                    <p className="break-word h-[1.3rem] overflow-hidden text-sm font-light text-white/50 transition duration-150">{item.options.reply}</p>
                                </div>
                            </button>
                            <button className="tweet-options-button flex w-full items-center gap-1">
                                <div className="flex items-center">
                                    <div className="shrink-0 rounded-full p-2 transition duration-150">
                                        <div className="aspect-square w-4 rounded-full border border-white/50 transition duration-150"></div>
                                    </div>
                                    <p className="break-word h-[1.3rem] overflow-hidden text-sm font-light text-white/50 transition duration-150">{item.options.retweet}</p>
                                </div>
                            </button>
                            <button className="tweet-options-button flex w-full items-center gap-1">
                                <div className="flex items-center">
                                    <div className="shrink-0 rounded-full p-2 transition duration-150">
                                        <div className="aspect-square w-4 rounded-full border border-white/50 transition duration-150"></div>
                                    </div>
                                    <p className="break-word h-[1.3rem] overflow-hidden text-sm font-light text-white/50 transition duration-150">{item.options.like}</p>
                                </div>
                            </button>
                            <button className="tweet-options-button hidden w-full items-center gap-1 sm:flex">
                                <div className="flex items-center">
                                    <div className="shrink-0 rounded-full p-2 transition duration-150">
                                        <div className="aspect-square w-4 rounded-full border border-white/50 transition duration-150"></div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {item.reply && (
                    <div className="flex gap-3 px-4 pt-2 transition duration-150 hover:bg-white/5">
                        <figure className="h-fit shrink-0 rounded-full text-[0] transition duration-150 hover:brightness-[0.8]">
                            <img src={item.reply.profilePicture} className="aspect-square w-10 rounded-full" />
                        </figure>
                        <div className="w-full">
                            <div className="flex items-center">
                                <div className="xs:flex">
                                    <p className="break-word h-6 overflow-hidden text-ellipsis font-bold hover:underline xs:mr-2">{item.reply.name}</p>
                                    <div className="flex overflow-hidden">
                                        <p className="break-word mr-2 h-6 overflow-hidden text-ellipsis font-light text-white/40">@{item.reply.username}</p>
                                        <span className="leading-1 mr-2 mt-1 shrink-0 text-xs font-light text-white/40">&#x2022;</span>
                                        <p className="shrink-0 font-light text-white/40 hover:underline">{item.reply.time}</p>
                                    </div>
                                </div>
                                <button className="tweet-dots-button -mr-2 ml-auto flex aspect-square shrink-0 items-center justify-between gap-[.13rem] rounded-full p-2 transition duration-150 hover:bg-sky-800/30">
                                    <div className="h-[.19rem] w-[.19rem] rounded-full bg-gray-600 transition duration-150"></div>
                                    <div className="h-[.19rem] w-[.19rem] rounded-full bg-gray-600 transition duration-150"></div>
                                    <div className="h-[.19rem] w-[.19rem] rounded-full bg-gray-600 transition duration-150"></div>
                                </button>
                            </div>
                            <p className="break-word leading-5 text-gray-200">{item.reply.tweet}</p>
                            {item.reply.image && <img src={item.reply.image.source} className="mt-3 min-w-full rounded-2xl border border-white/25" width={item.reply.image.width} height={item.reply.image.height} />}
                            <div className="my-1 flex w-full justify-between">
                                <button className="tweet-options-button flex w-full items-center gap-1">
                                    <div className="flex items-center">
                                        <div className="shrink-0 rounded-full p-2 transition duration-150">
                                            <div className="aspect-square w-4 rounded-full border border-white/50 transition duration-150"></div>
                                        </div>
                                        <p className="break-word h-[1.3rem] overflow-hidden text-sm font-light text-white/50 transition duration-150">{item.reply.options.reply}</p>
                                    </div>
                                </button>
                                <button className="tweet-options-button flex w-full items-center gap-1">
                                    <div className="flex items-center">
                                        <div className="shrink-0 rounded-full p-2 transition duration-150">
                                            <div className="aspect-square w-4 rounded-full border border-white/50 transition duration-150"></div>
                                        </div>
                                        <p className="break-word h-[1.3rem] overflow-hidden text-sm font-light text-white/50 transition duration-150">{item.reply.options.retweet}</p>
                                    </div>
                                </button>
                                <button className="tweet-options-button flex w-full items-center gap-1">
                                    <div className="flex items-center">
                                        <div className="shrink-0 rounded-full p-2 transition duration-150">
                                            <div className="aspect-square w-4 rounded-full border border-white/50 transition duration-150"></div>
                                        </div>
                                        <p className="break-word h-[1.3rem] overflow-hidden text-sm font-light text-white/50 transition duration-150">{item.reply.options.like}</p>
                                    </div>
                                </button>
                                <button className="tweet-options-button hidden w-full items-center gap-1 sm:flex">
                                    <div className="flex items-center">
                                        <div className="shrink-0 rounded-full p-2 transition duration-150">
                                            <div className="aspect-square w-4 rounded-full border border-white/50 transition duration-150"></div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    });

    return (
        <main className="w-full border-x border-white/25 xs:max-w-[600px] lg:shrink-0">
            <div className="foryou sticky top-0 z-10 w-full border-b border-white/25 bg-black">
                <div className="mainflow-grid">
                    <figure className="text-0">
                        <img src={pp} className="w-9 rounded-full" />
                    </figure>
                    <img src="/twitter.svg" className="w-6" />
                    <div></div>
                </div>
                <h2 className="hidden px-4 py-3 text-xl font-bold text-gray-200 xs:block">Home</h2>
                <div className="flex">
                    <div className="flex w-full cursor-pointer transition duration-150 hover:bg-white/10" onClick={() => setForYouSelected(true)}>
                        <span className="relative mx-auto w-fit">
                            <p className={`w-fit py-4 text-center text-gray-500 ${forYouSelected && "font-semibold text-white"}`}>For you</p>
                            <div className={`absolute bottom-0 h-[3px] w-full rounded-full bg-sky-500 ${!forYouSelected && "hidden"}`}></div>
                        </span>
                    </div>
                    <div className="flex w-full cursor-pointer transition duration-150 hover:bg-white/10" onClick={() => setForYouSelected(false)}>
                        <span className="relative mx-auto w-fit">
                            <p className={`w-fit py-4 text-center text-gray-500 ${!forYouSelected && "font-semibold text-white"}`}>Following</p>
                            <div className={`absolute bottom-0 h-[3px] w-full rounded-full bg-sky-500 ${forYouSelected && "hidden"}`}></div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="hidden w-full gap-2 border-0 border-b border-white/25 p-4 pb-2 xs:flex">
                <figure className="h-fit shrink-0 cursor-pointer rounded-full text-[0] transition duration-150 hover:brightness-[0.8]">
                    <img className="aspect-square w-10 rounded-full" src={pp} width="45" height="45" alt="Profile Picture" />
                </figure>
                <div className="font-0 w-full">
                    <span ref={tweetRef} className="tweet break-word mb-2 ml-2 mt-1 block bg-transparent text-xl font-light outline-0" onInput={updateTweetRefContent} contentEditable></span>
                    <div className="mt-5 flex flex-wrap gap-4">
                        <div className="flex flex-wrap items-center">
                            <button className="rounded-full p-1 transition duration-150 hover:bg-sky-800/20 sm:p-2.5">
                                <div className="aspect-square w-4 rounded-full border border-sky-500"></div>
                            </button>
                            <button className="rounded-full p-1 transition duration-150 hover:bg-sky-800/20 sm:p-2.5">
                                <div className="aspect-square w-4 rounded-full border border-sky-500"></div>
                            </button>
                            <button className="rounded-full p-1 transition duration-150 hover:bg-sky-800/20 sm:p-2.5">
                                <div className="aspect-square w-4 rounded-full border border-sky-500"></div>
                            </button>
                            <button className="rounded-full p-1 transition duration-150 hover:bg-sky-800/20 sm:p-2.5">
                                <div className="aspect-square w-4 rounded-full border border-sky-500"></div>
                            </button>
                            <button className="rounded-full p-1 transition duration-150 hover:bg-sky-800/20 sm:p-2.5">
                                <div className="aspect-square w-4 rounded-full border border-sky-500"></div>
                            </button>
                            <button className="rounded-full p-1 transition duration-150 hover:bg-sky-800/20 sm:p-2.5">
                                <div className="aspect-square w-4 rounded-full border border-sky-500"></div>
                            </button>
                        </div>
                        <button className="ml-auto rounded-full bg-sky-500 px-4 py-1.5 font-bold transition-colors duration-150 hover:bg-sky-600 disabled:opacity-50 disabled:hover:bg-sky-500" disabled={tweetContent.trim().length === 0}>
                            Tweet
                        </button>
                    </div>
                </div>
            </div>
            <button className="w-full border-b border-white/25 py-3 text-center text-sky-500 transition duration-150 hover:bg-white/5">Show 35 Tweets</button>
            {tweetsMapped}
        </main>
    );
}
