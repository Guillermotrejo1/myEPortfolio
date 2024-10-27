import Image from "next/image";

export const TechStack = () => {
  return (
    <div className="w-full mb-10">
      <h1 className="flex justify-center text-3xl font-bold w-full mb-4 h-14">
        Tech Stack
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        <Image src="/html.png" alt="" width={100} height={100} />
        <Image src="/css.png" alt="" width={100} height={100} />
        <Image src="/React.png" alt="" width={100} height={100} />
        <Image src="/firebase.webp" alt="" width={100} height={100} />
        <Image src="/nextjs.png" alt="" width={100} height={100} />
        <Image src="/redux.png" alt="" width={100} height={100} />
        <Image src="/tailwind.png" alt="" width={100} height={100} />
        <Image src="/nodejs.png" alt="" width={100} height={100} />
        <Image src="/typescript.png" alt="" width={100} height={100} />
        <Image
          src="/drizzle.png"
          className="rounded-lg"
          alt=""
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
