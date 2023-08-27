'use client'
import { Fira_Mono } from "next/font/google"
import  Lottie, {LottieRefCurrentProps} from 'lottie-react'

import { useRef } from 'react'

import animationData from '../assets/animation_llmp31sa.json'

const fira_bold = Fira_Mono({weight: "700", style:"normal", subsets: ['latin']});

export default function Projects() {
    const building_animation = useRef<LottieRefCurrentProps>(null);
    let curr_dir = 1;

    return (
        <div className="container w-full flex justify-center items-center flex-col">
            <h1 className={`${fira_bold.className} text-white md:text-2xl lg:text-4xl`}>
                Page Under Work
            </h1>
            <div className="w-96 h-auto">
                <Lottie lottieRef={building_animation} animationData={animationData}/>
            </div>
        </div>
    )
}