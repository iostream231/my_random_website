'use client'
import { Black_Ops_One } from "next/font/google"
import { faDiscord, faInstagram, faXTwitter, faRedditAlien, faGithub} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const boo = Black_Ops_One({subsets : ['latin'], weight: "400"})

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export default function Contacts() {
    async function clicked() {
        navigator.clipboard.writeText('.0xb');
        let elem = document.getElementById('txt');
        if(elem === undefined || elem === null)
            return;
        
        elem.innerText = 'Username Copied';
        elem.title = ".0xb";
        
    }

    const hoverEffect = "cursor-pointer hover:-translate-y-1 transition"

    return <div className="container flex w-full h-full gap-2 flex-wrap flex-col justify-center">
        <section className="container flex w-full gap-2 flex-wrap justify-center items-stretch flex-col lg:flex-row">
            {/* Discord */}
            <div className={`flex lg:w-2/4 w-full rounded bg-slate-500 g-2 p-4 text-white justify-center items-center ${hoverEffect} w-full`} 
                title=".0xb" onClick={clicked} onMouseLeave={ () => {
                    let elem = document.getElementById("txt");
                    if(elem === null)
                        return;
                    elem.innerText = "Discord";
                }}>
                <i className="w-6 m-3">
                    <FontAwesomeIcon icon={faDiscord}/>
                </i>
                <h1 id="txt" className={`${boo.className}`}>
                    Discord
                </h1>
            </div>

            {/* Instagram */}
            <div className={`flex lg:w-1/4 rounded bg-gradient-to-r from-pink-500 to-yellow-300 h-auto ${hoverEffect} w-full g-2 p-4 justify-center items-center text-white`}>
                <i className="w-6 m-3">
                    <FontAwesomeIcon icon={faInstagram} />
                </i>
                <a className={`${boo.className}`} href="https://www.instagram.com/undefined101_">
                    Instagram
                </a>
            </div>
        </section>

        <section className="container flex w-full gap-2 flex-wrap justify-center items-stretch flex-col lg:flex-row"> 
            {/* X */}
            <div className={`flex lg:w-1/4 rounded bg-black ${hoverEffect} w-full h-auto g-2 p-4 text-white justify-center items-center`}>
                <i className="w-6 m-3">
                    <FontAwesomeIcon icon={faXTwitter} />
                </i>
                <a className={`${boo.className}`} href="https://www.twitter.com">
                    Twitter
                </a>
            </div>
            
            {/* Reddit  */}
            <div className={`flex lg:w-1/4 rounded bg-red-500 ${hoverEffect} w-full h-auto g-2 p-4 text-white justify-center items-center`}>
                <i className="w-6 m-4">
                    <FontAwesomeIcon icon={faRedditAlien} />
                </i>
                <a className={`${boo.className}`} href="https://www.reddit.com">
                    Reddit
                </a>
            </div>
            {/* Github  */}
            <div className={`flex lg:w-1/4 rounded bg-slate-900 ${hoverEffect} w-full h-auto g-2 p-4 text-white justify-center items-center`}>
                <i className="w-6 m-4">
                    <FontAwesomeIcon icon={faGithub} />
                </i>

                <a className={`${boo.className}`} href="https://www.github.com/iostream231">
                    Github
                </a>
            </div>
        </section>
    </div>
}