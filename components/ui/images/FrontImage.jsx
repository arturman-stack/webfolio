import React from 'react';
import Image from "next/image";

const FrontImage = ({src = "", width, height, alt, className, loading, onLoad, onError}) => {
    return src ? (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className={className}
            priority
            onLoad={onLoad}
            onError={onError}
        />
    ) : null;
};

export default FrontImage;
