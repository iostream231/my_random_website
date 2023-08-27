import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"


export default function Navg() {
   return (<div className="flex text-light-page p-4 w-full justify-between items-center bg-black">
      <Link href="." className="p4 text-2xl font-bold ">0xB</Link>
      
      <nav className="flex justify-between w-2/6">
         <Link href="/projects" className="hover:font-bold">📦 Projects</Link>
         <Link href="/contacts" className="hover:font-bold">✉️ Contacts</Link>
         <Link href="/gear" className="hover:font-bold">💻 Gear</Link>
      </nav>

      <Link href="https://www.github.com/iostream231">
         <i>
            <FontAwesomeIcon icon={faGithub} className="w-8 h-auto"/>
         </i>
      </Link>
   </div>)
}