import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa6";

export const Projects = () => {
  return (
    <section id="projects">
      <div className="flex items-center justify-center">
        <div className="flex-col">
          <h1 className="text-center text-3xl mb-6">
            Here are some of my <span className="text-green-500">projects</span>
          </h1>
          <ul className="flex flex-wrap justify-center gap-4 mb-10 p-6 rounded-3xl">
            <li className="relative lg:mb-4 top-0 left-0 w-[1000px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full">
                <Image
                  src="/lingo.png"
                  className="w-full h-full rounded-3xl"
                  alt="Lingo"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-55 transition duration-300 ease-in-out">
                <div className="text-md absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <h3 className="font-extrabold text-[120px] text-green-500">
                    Lingo
                  </h3>
                  <h4 className="text-green-500 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-green-500 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-green-500">
                    <Link className="mr-4" href="">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4" href="">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 w-[1000px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full">
                <Image
                  src="/creations.png"
                  className="w-full h-full rounded-3xl"
                  alt="Lingo"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-55 transition duration-300 ease-in-out">
                <div className="text-md absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <h3 className="font-extrabold text-[120px] text-green-500">
                    Creations
                  </h3>
                  <h4 className="text-green-500 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-green-500 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-green-500">
                    <Link className="mr-4" href="">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4" href="">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 w-[1000px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full">
                <Image
                  src="/internship.png"
                  className="w-full h-full rounded-3xl"
                  alt="Lingo"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-55 transition duration-300 ease-in-out">
                <div className="text-md absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <h3 className="font-extrabold text-[120px] text-green-500">
                    Internship
                  </h3>
                  <h4 className="text-green-500 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-green-500 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-green-500">
                    <Link className="mr-4" href="">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4" href="">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative lg:mb-4 top-0 left-0 w-[1000px] rounded-3xl group hover:bg-[#1c1d25] hover:opacity-55 transition duration-300 ease-in-out">
              <div className="mb-10 rounded-3xl shadow-xl shadow-green-800 h-full">
                <Image
                  src="/netflix.png"
                  className="w-full h-full rounded-3xl"
                  alt="Lingo"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full rounded-3xl group-hover:bg-[#1c1d25] group-hover:opacity-55 transition duration-300 ease-in-out">
                <div className="text-md absolute top-1/2 left-1/3 transform -translate-x-1/3 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                  <h3 className="font-extrabold text-[120px] text-green-500">
                    Netflix
                  </h3>
                  <h4 className="text-green-500 font-bold text-lg mb-1">
                    Html, Css, javascript, Vue, Vuex
                  </h4>
                  <p className="text-green-500 font-bold text-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus deleniti fugiat quo reiciendis voluptatem
                    itaque, labore assumenda aut quisquam ab.
                  </p>
                  <div className="mb-2">html, tailwind, stripe, drizzle</div>
                  <div className="absolute flex text-green-500">
                    <Link className="mr-4" href="">
                      <FaGithub />
                    </Link>
                    <Link className="mr-4" href="">
                      <FaLink />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
