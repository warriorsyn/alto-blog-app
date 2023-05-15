import React from "react";

type Props = {
    src: string,
    height?: string,
    width?: string
}

export const HeroImage: React.FC<Props> = ({  src, width, height }) => {
    return (
        <div>
            <img
                src={src}
                alt="Hero Image"
                style={{ maxWidth: "100%", width, height }}
            />
        </div>
    );
};
