import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  console.log(project);

  return (
    <main>
      <section className="h-96 flex justify-center items-center">
        <h1 className="font-bold text-6xl">{project.name}</h1>
      </section>
      <Image
        src={project.image}
        alt={project.name}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
      <div className="text-lg text-gray-400 mt-5">
        <PortableText value={project.content} />
      </div>
    </main>
  );
}
