import React from "react";

type Props = {
    src: string,
    height?: string,
    width?: string
}
//"https://placeimg.com/640/480/tech"

const HeroImage: React.FC<Props> = ({  src, width, height }) => {
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

export default HeroImage;
