import { FaExternalLinkAlt } from "react-icons/fa";
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Javascipt",
  ];

  const backendSkills = ["Java", "Spring Boot", "AWS", "PostgreSQL", "MicroServices", "Messaging Communication"];

  const devopsSkills = ["Jenkins", "CI/CD", "AWS", "Kubernetes", "Heml Chart"];

  const codingSkills = [{a: "Leetcode",b:"https://leetcode.com/u/satyamsahugr8/"}, {a: "Code360",b:"https://www.naukri.com/code360/profile/satyamsahu/"}];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex justify-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <a name="resume" href="https://drive.google.com/file/d/1dkKIB5y4K1y2qIGoN7ngcmodW-l_9W-n/view?usp=sharing" className="flex gap-2 text-xs"><FaExternalLinkAlt className="ml-2 mt-2"/>(Resume)</a>
          </div>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {devopsSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Data Structure</h3>
                <div className="flex flex-wrap gap-2">
                  {codingSkills.map((tech, key) => (
                    <a href={`${tech.b}`}
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition flex gap-1"
                    >
                      {tech.a}
                      <FaExternalLinkAlt className=""/>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.Tech in Information Technology </strong> - Oriental College of Technology, Bhopal
                  (2018-2022)
                </li>
                {/* <li>
                  Relevant Coursework: Data Structures, Web Development, Cloud
                  Computing...
                </li> */}
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Software Engineer at Capgemini (2022 - Present){" "}
                  </h4>
                  <p>
                    Developed and maintained microservices for cloud-based applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Intern at Capgemini (Jan 2022 - April 2022){" "}
                  </h4>
                  <p>
                    Assisted in building back-end and front-end components and integration REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About
