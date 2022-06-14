export interface IInitialState {
    chat: boolean;
    cart: boolean;
    userProfile: boolean;
    notification: boolean;
}

export interface IContext {
    setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
    currentColor: string;
    currentMode: string,
    themeSettings: boolean,
    activeMenu: boolean | null;
    setIsClicked: React.Dispatch<React.SetStateAction<IInitialState>>;
    setThemeSettings: React.Dispatch<React.SetStateAction<boolean>>;
    isClicked: IInitialState;
    handleClick: (clicked: any) => void;
    setScreenSize: React.Dispatch<React.SetStateAction<number>>;
    screenSize: number;
}