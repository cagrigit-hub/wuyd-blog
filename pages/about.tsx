import Link from "next/link"
import Header from "../components/Header"

export default function AboutPage({ }) {
return (
    <main>
        <Header transparent={false}/>
        <div className="max-w-7xl mx-auto p-12 md:p-24 l">
          <div className=" lg:max-w-xl">
            <h4 className="text-6xl font-[600]" >Hello.</h4>
            <h4 className="text-xl md:text-3xl font-[400] my-6">My name is Çağrı Kutay Ok. <span className=" animate-blink">WUYD.</span></h4>
            <h4 className="text-base md:text-xl font-[300] mb-3 ">
             I am an independent software developer 
             currently based in Turkey. 
             I am currently working on to get <a  href="/#blogs" className="group relative ">MAANG<div className="raising"></div></a> Companies Internships.
             </h4>
            <h4 className="text-base md:text-xl  font-[300] my-3  ">
              I am a self-taught developer and I am always looking for new challenges. Currently
              working on my own company <a target="_blank" className="group relative" href="www.dataflex.com">
                DataFlex
                <div className="raising" ></div>
                </a>  (a data service for everyone).
				 DataFlex new version gonna be added soon!.
              
            </h4>

            <h4 className="text-base md:text-xl  font-[300] ">
              I am also highly active in school clubs.
              I am currently leading technical part at <a target="_blank" className="group relative" href="https://twitter.com/tobbetuchain"><div className="raising"> </div> TOBB ETU BLOCKCHAIN</a> club.
              And leading <a target="_blank" className="group relative" href="https://twitter.com/tobbetuappdev"><div className="raising"> </div> TOBB ETU APP DEV </a> club.
            </h4>

            <h4 className="text-base md:text-xl  font-[300] mt-3">
              You can follow me on <a target="_blank" href="https://twitter.com/kutay_ok" className="group relative">Twitter<div className="raising"></div></a>, on <a target="_blank" href="https://www.instagram.com/cagri_ok/" className="group relative">Instagram<div className="raising"></div></a>.
              Also I brodcast Coding / Gaming streams on <a target="_blank" href="https://twitch.tv/caggree"className="group relative">Twitch<div className="raising"></div></a> and I am Evan You follower. It is obvious from that I am using same ABOUT template with them.
            </h4>

            <h4 className="text-base md:text-xl  font-[300] mt-3">
              Outside of programming and school. 
              I enjoy video games, watcing series & movies (a lot of series [seriously a lot]).
              I am Art & Science entihusiast. And love to learn anything.
            </h4>
          </div>

        </div>
    </main>
  )
}
