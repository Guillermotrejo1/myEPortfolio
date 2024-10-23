import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="text-center text-xl">
            Here are some of my{" "}
            <span className="text-orange-500">projects</span>
          </h1>
          <ul className="project__list">
            <li className="project">
                <div className="project__wrapper">
                    <Image 
                    src="/lingo.png"
                     alt="Lingo"
                     width={500}
                     height={500}
                     />
                </div>
                <div className="project__bg"></div>
                <div className="project__description"></div>
            </li>
          </ul>
          <ul className="project__list">
            <li className="project">
                <div className="project__wrapper">
                    <Image 
                    src="/netflix.png"
                     alt="Lingo"
                     width={500}
                     height={500}
                     />
                </div>
                <div className="project__bg"></div>
                <div className="project__description"></div>
            </li>
          </ul>
          <ul className="project__list">
            <li className="project">
                <div className="project__wrapper">
                    <Image 
                    src="/creations.png"
                     alt="Creations"
                     width={500}
                     height={500}
                     />
                </div>
                <div className="project__bg"></div>
                <div className="project__description"></div>
            </li>
          </ul>
          <ul className="project__list">
            <li className="project">
                <div className="project__wrapper">
                    <Image 
                    src="/internship.png"
                     alt="Internship"
                     width={500}
                     height={500}
                     />
                </div>
                <div className="project__bg"></div>
                <div className="project__description"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
