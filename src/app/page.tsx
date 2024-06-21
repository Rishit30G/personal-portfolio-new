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
      <main className="max-w-[1280px] mx-auto text-white ">
          <div>
            <NavBar/>
          </div>
          <div>
            <Main/>
          </div>
          <div className="max-lg:ml-7 max-lg:mr-7">
            <Experience/>
          </div>
          <div className="max-lg:ml-7 max-lg:mr-7">
            <Skills/>
          </div>
          <div className="max-lg:ml-7 max-lg:mr-7">
            <Projects/>
          </div>
          <div className="max-lg:ml-7 max-lg:mr-7">
            <Contact/>
          </div>
          <div className="max-lg:ml-7 max-lg:mr-7">
            <Footer/>
          </div>
      </main>
    </div>
  );
}
