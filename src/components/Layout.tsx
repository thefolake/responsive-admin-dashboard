import React, { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Link from 'next/link'
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';
import { useStateContext } from '../contexts/ContextProvider';
import type { NextPage } from "next";

type Props = {
    children?: React.ReactNode;
};

const Layout = ({children} : Props): JSX.Element => {

    const { currentMode, activeMenu, themeSettings, setThemeSettings } = useStateContext();
    // const activeMenu = true;
    return (
        <div
            className={` ${
                currentMode === "Dark" ? "dark" : ""
            } flex w-screen h-full`}
        >
            <div className="fixed right-4 bottom-4" style={{ zIndex: 1000 }}>
                <TooltipComponent content="Settings" position="TopCenter">
                    <button
                        type="button"
                        onClick={() => setThemeSettings(true)}
                        style={{ background: 'pink', borderRadius: "50%" }}
                        className="p-3 text-3xl text-white hover:drop-shadow-xl hover:bg-light-gray"
                    >
                        <FiSettings />
                    </button>
                </TooltipComponent>
            </div>
            {activeMenu ? (
                <div className="fixed h-full bg-white w-72 sidebar dark:bg-secondary-dark-bg">
                    <Sidebar />
                </div>
            ) : (
                <div className="w-0 dark:bg-secondary-dark-bg">
                    {" "}
                    <Sidebar />
                </div>
            )}

            {themeSettings && <ThemeSettings />}
            <div
                className={`dark:bg-main-dark-bg bg-main-bg ${
                    activeMenu ? " md:ml-72" : ""
                }`}
            >
                <div
                    className={`fixed top-0 ${
                        activeMenu ? "w-[calc(100vw-288px)]" : " w-screen"
                    }  bg-main-bg dark:bg-main-dark-bg navbar`}
                >
                    <Navbar />
                </div>
            </div>

            <div className=" w-full mt-[70px] bg-main-bg dark:bg-main-dark-bg h-full">
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout ;