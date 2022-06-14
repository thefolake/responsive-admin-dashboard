import React from 'react';


type Props = {
  color: string;
  bgColor: string;
  bgHoverColor?: string;
  label: string;
  borderRadius: string;
  size: string;
  width?: string;
};

const Button = ({
                  color,
                  bgColor,
                    label,
                  borderRadius,
                    bgHoverColor,
                    width,
                  size,
                }: Props): JSX.Element => {
  return (
      <button
          type="button"
          style={{ backgroundColor: bgColor, color, borderRadius, }}
          className={`text-${size} p-3 hover:drop-shadow-xl w-${width} hover:bg-${bgHoverColor}`}
      >
        {label}
      </button>
  );
};

export default Button;