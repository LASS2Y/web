import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/blog";
import profilePic from "./component/pp.jpg";

function ExperienceCard({
  title,
  company,
  date,
  description,
}: {
  title: string;
  company: string;
  date: string;
  description: string;
}) {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 p-6 rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0"></div>{" "}
        {/* Logo Placeholder */}
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{company}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mb-4 font-mono">{date}</p>
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
        {description}
      </p>
      <button className="text-blue-600 text-sm font-semibold hover:underline">
        Learn More
      </button>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300 dark:bg-zinc-800 group-hover:scale-105 transition-transform duration-300"></div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-white dark:bg-black text-xs rounded border border-gray-200 dark:border-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/smart-bot`}
          className="block mt-4 text-center w-full py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition"
        >
          View Project
        </Link>
      </div>
    </div>
  );
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      {/* 1. HERO SECTION (HOME) */}
      <section
        id="home"
        className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center container mx-auto px-6 py-20 gap-12"
      >
        {/* Texte */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Lincoln Lassey
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-lg mx-auto md:mx-0">
            Third-year Industrial Engineering student at ECAM Brussels,
            specializing in Electrical Engineering. Passionate about
            electronics, automation, and control systems. Eager to apply and
            expand technical skills in automation, embedded systems, and energy
            management.
          </p>
          <div className="pt-4">
            <Link
              href="#projects"
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
            >
              Explore my portfolio!
            </Link>
          </div>
        </div>

        {/* Image Bannière / Portrait */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Image Bannière / Portrait */}
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-100 dark:border-zinc-800 shadow-2xl">
            <Image
              src={profilePic}
              alt="Profile"
              fill
              className="object-cover bg-gray-200"
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      {/* 2. EXPERIENCE SECTION */}
      <section
        id="experience"
        className="py-20 bg-gray-50/50 dark:bg-zinc-900/30"
      >
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <ExperienceCard
              title="IT Consultant"
              company="ECAM Engineering Consult"
              date="Jun 2025 - Present"
              description="Troubleshoot hardware/software issues"
            />
            <ExperienceCard
              title="Open Bike Sensor Volunteer"
              company="Open Bike Sensor"
              date="Oct 2025 - Present"
              description="Assisted the community project aiming to improve cyclist safety through open-source sensor technology"
            />
            <ExperienceCard
              title="Green AI TEKNO-KAMP Participant"
              company="TEKNO-FAMILY, ENGIE LABORELEC, innoviris.brussels"
              date="Oct 2025 - Nov 2025"
              description="Collaborated with engineering and business students to develop creative tech solutions that address environmental challenges"
            />
          </div>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Electrocardiogram Simulator"
              description="Designed and simulated an analog ECG circuit for biomedical signal acquisition."
              tags={["Altium Designer", "Analog Electronic"]}
            />
            <ProjectCard
              title="Portfolio Website"
              description="Developed this website using Next.js and Tailwind CSS to showcase my work."
              tags={["Next.js", "React", "Tailwind"]}
            />
          </div>
        </div>
      </section>

      {/* 4. BLOG SECTION */}
      <section id="blog" className="py-20 bg-gray-50/50 dark:bg-zinc-900/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl font-bold mb-12">Latest Articles</h2>
          <div className="space-y-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/posts/${post.id}`}
                  className="block group"
                >
                  <article className="p-6 bg-white dark:bg-black rounded-xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2">
                      By {post.creator}
                    </p>
                  </article>
                </Link>
              ))
            ) : (
              <p className="text-gray-500 italic">No articles yet.</p>
            )}
          </div>
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="text-4xl font-bold mb-8">Get in touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Feel free to reach out for collaborations
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:tonemail@example.com"
              className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"
            >
              Email
            </a>
            <a
              href="#"
              className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-full hover:bg-blue-100 hover:text-blue-600 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
