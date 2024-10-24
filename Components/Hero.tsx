import Image from "next/image"
import { FaGithub } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa6"
import { FaFileAlt } from "react-icons/fa"

export const Hero = () => {
    return (
        <header className="flex justify-center h-screen mb-8">
            <div className="max-w-[600px]">
                <h1 className="text-blue-500 text-[120px] text-left"><span className="text-black">Hey,</span> I&apos;m</h1>
                <h1 className="text-blue-500 text-[120px] text-left">Guillermo</h1>
                <p className="text-gray-500 text-lg">Im a Frontend Software Engineer with a strong passion for building web applications with great user experiences.
                Here&apos;s a bit more about me.</p>
            
            <div className="flex mt-4 space-x-2">
                <a className="" href="https://github.com/Guillermotrejo1">
                <FaGithub className="text-white rounded bg-blue-500 text-2xl" />
                </a>
                <a className="" href="https://www.linkedin.com/in/guillermo-trejo-8a5797318">
                <FaLinkedin className="text-white rounded bg-blue-500 text-2xl" />
                </a>
                <a className="" href="">
                    <FaFileAlt className="text-white rounded bg-blue-500 text-2xl" />
                </a>
            </div>
            </div>
            <figure className="flex">
                <Image 
                src="/me.jpg"
                width={850}
                height={850}
                className="rounded-full"
                 alt="" />
            </figure>
        </header>
    )
}