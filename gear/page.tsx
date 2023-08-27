import { Fira_Mono } from "next/font/google"
import { faMicrochip, faServer , faMemory} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import rice from "./images/rice.png"

const fira_bold = Fira_Mono({weight: "700", style:"normal", subsets: ['latin']})
const fira_norm = Fira_Mono({weight: "500", style:"normal", subsets: ['latin']})

export default function Gear() {

    const hoverEffect = "hover:-translate-y-1 transition"


    return (
        <>
            <header>
                <h1 className={`${fira_bold.className} text-3xl text-white text-center lg:text-start lg:ml-8`}>⌨️ Gear</h1>
                <h4 className={`${fira_norm.className} text-gray-600 text-center lg:text-start lg:ml-10 mt-3`}> Stuff I use to make stuff </h4>
            </header>
            
            <fieldset className='container flex w-full border border-white rounded p-4 lg:flex-row flex-col'>
                <legend className={`${fira_bold.className} text-2xl text-white`}>🖥️ Main Computer</legend>
                <section className="p-4 lg:w-3/4">
                    <h1 className={`${fira_bold.className} text-xl text-white ml-3`}>Main Specs : </h1>
                    <ul className={`${fira_norm.className} text-white ml-6 text-sm lg:text-lg`}>
                        <li className="flex gap-2 items-center text-xs lg:text-lg">
                            <i className="inline">
                                <FontAwesomeIcon icon={faMicrochip} width={16} height={16}/>
                            </i> CPU : 11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz
                        </li>

                        <li className="flex gap-2 items-center">
                            <i className="inline">
                                <FontAwesomeIcon icon={faMicrochip} width={16} height={16}/>
                            </i> GPU : Nvidia GeForce MX350
                        </li>

                        <li className="flex gap-2 items-center">
                            <i className="inline">
                                <FontAwesomeIcon icon={faServer} width={16} height={16}/>
                            </i> Storage : 128 GB SSD
                        </li>

                        <li className="flex gap-2 items-center">
                            <i className="inline">
                                <FontAwesomeIcon icon={faServer} width={16} height={16}/>
                            </i> Storage : 1 TB HDD
                        </li>

                        <li className="flex gap-2 items-center">
                            <i className="inline">
                                <FontAwesomeIcon icon={faMemory} width={16} height={16}/>
                            </i> RAM : 8GB DDR4 3200Mhz
                        </li>
                    </ul>
                </section>
                
                <section className={`lg:w-1/4 w-full border border-sky-400 shadow-sm shadow-sky-500 rounded ${hoverEffect}`}>
                    <Image src={rice} width={512} height={384} alt="pic of my desktop" className="rounded w-full">
                    </Image>
                </section>
                
            </fieldset>
        
        </>

    )
} 