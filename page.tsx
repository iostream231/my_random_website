import Home from "./components/Home"
import Navg from "./components/Navigation"
import Presence from "./components/Presence"
import Trailer from "./components/Trailer"

export default async function Hey() {

  return <>
    <Home/>
    <Presence/>
    <Trailer />
  </>
}