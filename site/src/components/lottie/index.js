import React from "react";
import Lottie from 'react-lottie'

import BlueAnimationJson from '../../assets/LottieJson/blue.json'

export const BlueAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: BlueAnimationJson
    }

    return <Lottie options={defaultOptions} width={450} height={450} />
}