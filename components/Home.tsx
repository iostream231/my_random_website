import Image  from 'next/image'
import profilePic from '../pfp_real.png'
import { Ubuntu } from 'next/font/google'


const ubuntu = Ubuntu({weight: "400", style: "normal", subsets: ['latin']});
const ubuntu_itl = Ubuntu({weight: "400", style: "italic", subsets: ['latin']})

export default function Home() {
    return (
        <div className='container w-full flex justify-around'>
            <div className="about w-4/5 p-12 rounded flex gap-8 items-center bg-slate-900 border border-white border-opacity-5 md:flex-row flex-col">
                <Image src={profilePic}
                width={312} height={312}
                 alt='My discord profile picture'
                 className='rounded-full hover:scale-110 transition-all delay-150 '
                 title='Earth from space'
                 />
                
                 <div className='lg:border-l border-slate-50 p-0 lg:pl-8 flex flex-col justify-between items-center lg:items-start gap-4'>
                     <header className='lg:p-4 md:text-4xl text-2xl font-bold text-slate-50'>
                         <h1>👋 Hey There !</h1>
                     </header>
                     <section className='flex flex-col h-2/4 justify-around'>
                        <p className={`${ubuntu.className} text-slate-50 `}>
                            I am 0xB. I code Websites and projects, sometimes I do 3D Modelling, and overall I just try to 
                            have a peaceful life. Here are some facts about me : 
                        </p>
                        <ul className={`${ubuntu.className} text-slate-50 `}>
                            <li>🍕 I like Pizza</li>

                            <li>🎵 I love Lofi</li>

                            <li>🌍 I am from &nbsp;
                                <span className='bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-red-500 text-transparent'
                                        style = {{
                                            textShadow: "rgba(255, 40, 40, 0.9) 0px 2px 16px"   
                                        }} title='Good country tbh'>
                                     Morocco
                                </span>
                            </li>
                        </ul>
                    </section>
                    
                    <h6 className={`${ubuntu_itl.className} text-slate-50`} style={{fontSize: "12px"}}>
                    “The more you know, the more you realize you know nothing.” — Socrates
                    </h6>

                 </div>
                
                

            </div>

        </div>

        )
}