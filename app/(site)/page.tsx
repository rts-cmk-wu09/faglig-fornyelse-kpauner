import { getProjects } from "@/sanity/sanity-utils";
import en from "@/dictionaries/en.json";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <section className="h-96 flex justify-center items-center">
        <h1 className="font-bold text-3xl">{en.page.home.title}</h1>
      </section>
      <section className="pt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {projects.map((project) => (
          <article className="bg-slate-800" key={project._id}>
            <Link href={`/projects/${project.slug}`}>
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.name}
                  width={400}
                  height={200}
                />
              )}
              <h2 className="font-bold">{project.name}</h2>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
