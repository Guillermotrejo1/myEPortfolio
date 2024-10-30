import Image from "next/image";

export const Projects = () => {
  return (
    <section id="projects">
  <div className="flex items-center justify-center">
    <div className="flex-col">
      <h1 className="text-center text-3xl mb-6">
        Here are some of my{" "}
        <span className="text-green-500">projects</span>
      </h1>
      <ul className="flex flex-wrap justify-center gap-4 mb-10 p-6">
        <li className="lg:mr-4 lg:mb-4">
          <div className="mb-10 rounded-lg shadow-xl shadow-green-800">
            <Image src="/lingo.png" className="w-full rounded-xl" alt="Lingo" width={500} height={500} />
          </div>
        </li>
        <li className="">
          <div className="mb-10 rounded-lg shadow-xl shadow-green-800">
            <Image src="/internship.png" className="w-full rounded-lg" alt="Internship" width={500} height={500} />
          </div>
        </li>
        <li className="lg:mr-4 lg:mb-4">
          <div className="mb-10 rounded-lg shadow-xl shadow-green-800">
            <Image src="/creations.png" className="w-full rounded-lg" alt="Creations" width={500} height={500} />
          </div>
        </li>
        <li className="">
          <div className="mb-10 rounded-lg shadow-xl shadow-green-800">
            <Image src="/netflix.png" className="w-full rounded-lg" alt="Netflix" width={500} height={500} />
          </div>
        </li>
      </ul>
      <div className="project__bg"></div>
      <div className="project__description"></div>
    </div>
  </div>
</section>
  );
};
