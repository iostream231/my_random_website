import Image from "next/image";
import { Fira_Mono } from "next/font/google";


const fira_bold = Fira_Mono({weight:"700", subsets: ['latin']})
const fira_normal = Fira_Mono({weight:"500", subsets: ['latin']})

 async function getPresence(){
    let presence = await fetch("http://localhost:4000", {next : {revalidate : 30}});
    if(!presence.ok || presence.status != 200) {
        return [];
    }
    
    let real_presence = await presence.json();

    return real_presence;
}

type DiscordPresence = {
    id : string,
    name : string,
    type : 'PLAYING' | 'IDLE',
    details : string,
    state : string,
    timestamps : {
        start : string,
        end : string | null,
    },

    assets : {
        largeText : string,
        smallText: string,
        largeImage : string,
        smallImage : string,
    },

    flags : number,
    emoji : string,
    createdTimestamp : number
}

const Week_Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function Time() {

    return <div className={`lg:w-1/4 w-3/4 h-auto bg-accent-blue rounded p-4 flex gap-5 m-0 justify-center items-center`}>
        <h2 className={`${fira_bold.className} text-red-500`}>Offline</h2>
        <h2 className={`${fira_bold.className} text-gray-500 text-sm`}>Maybe check later</h2>
    </div>
}




function DiscordPresence({presence} : {presence : Array<DiscordPresence>}) {
    let largeImageUrl = presence[0].assets.largeImage.substring(
        presence[0].assets.largeImage.search("https")
    ).replace("https/", "https://")

    let start_date = new Date(presence[0].timestamps.start);
    let curr_date = new Date();

    let show_str = "";
    if (curr_date.getHours() - start_date.getHours() >= 1) 
        show_str = `started ${curr_date.getHours() - start_date.getHours()} hours ago`
    else 
        show_str = "just started"
    return (<div className={`lg:w-1/4 w-3/4 h-auto bg-slate-700 rounded p-4 flex gap-5 m-0`}>
    <img src={largeImageUrl} alt={presence[0].assets.largeText} width={72} height={64} className="rounded"/>
    <div>
        <p className={`${fira_bold.className} text-slate-200`}>{presence[0].type + ' ' + presence[0].name}</p>
        <p className={`${fira_bold.className} text-gray-400 text-xs`}>{presence[0].details}</p>
        <p className={`${fira_normal.className} text-gray-400 text-xs`}>{presence[0].state}</p>
        <p className={`${fira_normal.className} text-gray-500 text-xs`}>{show_str}</p>
        </div>
    </div>)
}

export default async function Presence() {
    let presence : Array<DiscordPresence>= await getPresence();
    



    return <div className={`flex justify-center gap-2 max-w-full flex-col lg:flex-row items-center lg:items-stretch`}>
        {presence.length === 0 ? <Time /> : <DiscordPresence presence={presence}/>}
        <div className={`lg:w-2/4 h-0 invisible  bg-slate-700 rounded p-4 flex justify-center items-center w-0 lg:visible lg:h-auto`}>
            <p className={`${fira_bold.className} text-slate-200`}>I am going to figure out what to do with this section later.</p>
        </div>

    </div>
}