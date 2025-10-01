import React from 'react';
import Image from "next/image";

const BackImage = ({src = "", width, height, alt = "", className}) => {
    return src ? (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
            priority
        />
    ) : null;
};

export default BackImage;
