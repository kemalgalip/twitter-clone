import React from "react";

export default function SideColumn() {
    const trendsArray = [
        { topic: "#TechTrends", count: "25k" },
        { topic: "Fashion Fridays", count: "18k" },
        { topic: "Healthy Living", count: "12.5k" },
        { topic: "Travel Diaries", count: "1,300" },
        { topic: "#Bookworm", count: "2,700" },
        { topic: "Music Madness", count: "14k" },
        { topic: "#FitnessGoals", count: "12.1k" },
        { topic: "#Wanderlust", count: "900" },
        { topic: "#MovieMania", count: "1000" },
    ];

    const trendTopics = trendsArray.map((item, idx) => {
        return (
            <a key={idx} className="flex cursor-pointer items-start justify-between py-2 pl-4 pr-2 transition duration-150 hover:bg-gray-100/5">
                <div>
                    <p className="break-word text-sm text-gray-500">Trending</p>
                    <p className="break-word font-bold">{item.topic}</p>
                    <p className="break-word text-sm text-gray-500">{item.count} Tweets</p>
                </div>
                <div className="flex aspect-square items-center gap-0.5 rounded-full p-3 transition duration-150 hover:bg-sky-800/20">
                    <div className="h-[0.18rem] w-[0.18rem] rounded-full bg-gray-500"></div>
                    <div className="h-[0.18rem] w-[0.18rem] rounded-full bg-gray-500"></div>
                    <div className="h-[0.18rem] w-[0.18rem] rounded-full bg-gray-500"></div>
                </div>
            </a>
        );
    });

    return (
        <aside className="side-column mx-[28px] hidden w-full lg:block lg:max-w-[350px]">
            <div className="sticky top-0 mb-3 bg-black py-1.5">
                <input className="w-full rounded-full border border-transparent bg-gray-500/30 px-6 py-2.5 outline-0 placeholder:text-gray-500 focus:border-sky-500 focus:bg-black" placeholder="Search Twitter" />
            </div>
            <div>
                <div className="mb-4 overflow-hidden rounded-2xl bg-gray-600/30 px-4 py-3">
                    <h2 className="text-2xl font-bold text-gray-200">Get verified</h2>
                    <p className="mt-2 font-semibold">Subscribe to unlock new features.</p>
                    <button className="mt-2 rounded-full bg-sky-500 px-4 py-1.5 font-semibold transition duration-150 hover:bg-sky-600">Get Verified</button>
                </div>
                <div className="mb-4 overflow-hidden rounded-2xl bg-gray-600/30">
                    <h2 className="px-4 py-2.5 text-xl font-bold">Trends for you</h2>
                    <div>{trendTopics}</div>
                    <p className="cursor-pointer p-4 text-sky-500 transition duration-150 hover:bg-gray-100/5">Show More</p>
                </div>
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Imprint</p>
                <p>Accessibility</p>
                <p>Ads info</p>
                <p>More</p>
                <p>&copy; 2023 X Corp.</p>
            </div>
        </aside>
    );
}
