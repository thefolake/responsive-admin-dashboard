import React from 'react'
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { ReactElement } from "react";

type Props = {
    title: string;
    customFunc: () => void;
    icon: ReactElement<any, any>;
    color: string;
    dotColor?: string;
};

const NavButton = ({ title, customFunc, icon, color, dotColor}: Props): JSX.Element => {
    return (
        <TooltipComponent content={title} position='BottomCenter'>
            <button
                onClick={customFunc}
                type="button"
                style={{ color }}
                className="relative text-xl rounded-full p-3 hover:bg-light-gray"
            >
                <span
                    style={{ background: dotColor }}
                    className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
                />
                {icon}
            </button>
        </TooltipComponent>
    )
}

export default NavButton