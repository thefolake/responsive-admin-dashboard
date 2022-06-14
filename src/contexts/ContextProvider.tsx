import React, { createContext, useContext, useState } from 'react';
import { IContext, IInitialState } from "../components/types";

const initialState: IInitialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
};

const StateContext = createContext<IContext>({
    activeMenu: true,
    isClicked: initialState,
    screenSize: 0, handleClick(clicked: any): void { /* TODO document why this method 'handleClick' is empty */ },
    setActiveMenu(): void { /* TODO document why this method 'setActiveMenu' is empty */ },
    setScreenSize(): void { /* TODO document why this method 'setScreenSize' is empty */ },
    currentColor: "",
    currentMode: "",
    themeSettings: false,
    setIsClicked(): void { /* TODO document why this method 'setIsClicked' is empty */ },
    setThemeSettings(): void { /* TODO document why this method 'setIsClicked' is empty */ }
});

 const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };

    const handleClick = (clicked: string) => setIsClicked({ ...initialState, [clicked]: true });

     const data = {
         activeMenu,
         setActiveMenu,
         isClicked,
         setIsClicked,
         handleClick,
         screenSize,
         setScreenSize,
         currentColor,
         currentMode,
         themeSettings,
         setThemeSettings,
         // setMode,
         // setColor,
     };

    return (
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider

export const useStateContext = () => useContext(StateContext);