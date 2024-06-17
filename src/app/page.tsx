import NavBar from "@/components/NavBar";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Main from "@/sections/Main";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="bg-black">
      <main className="max-w-[1440px] mx-auto text-white">
          <div>
            <NavBar/>
          </div>
          <div>
            <Main/>
          </div>
          <div>
            <Experience/>
          </div>
          <div>
            <Skills/>
          </div>
          <div>
            <Projects/>
          </div>
          <div>
            <Contact/>
          </div>
          <div>
            <Footer/>
          </div>
      </main>
    </div>
  );
}
