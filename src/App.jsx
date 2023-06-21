import React from "react";
import Header from "./js/Header";
import MainFlow from "./js/MainFlow";
import SideColumn from "./js/SideColumn";

export default function App() {
    return (
        <div className="flex min-h-screen flex-col-reverse justify-center xs:flex-row">
            <Header />
            <MainFlow />
            <SideColumn />
        </div>
    );
}
