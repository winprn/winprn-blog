import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import VNOJ_Image from "../../public/vnoj.png";
import VA_Image from "../../public/visualgo.png";

const links = [
  {
    icon: <AiFillFacebook size="30" />,
    location: "https://fb.com/winprn",
  },
  {
    icon: <AiFillGithub size="30" />,
    location: "https://github.com/winprn",
  },
];

export default function Home() {
  return (
    <main className="w-full max-w-7xl px-4 py-4">
      <section className="mb-3 flex flex-col items-center gap-2">
        <div>
          <Image src="/avatar.png" width="80" height="80" alt="avatar" />
        </div>
        <div className="text-center">
          <h1 className="font-semibold">L. D. Minh Man</h1>
          <section className="flex justify-center">
            {links.map((el, index) => {
              return (
                <a key={index} href={el.location}>
                  <span className="">{el.icon}</span>
                </a>
              );
            })}
          </section>
          <p>I'm a freshman studying Information & Technology at VNU-HCMUS</p>
        </div>
      </section>
      <section className="mb-2 flex flex-col items-center">
        <Link
          className="inline-block rounded-md bg-green-400 px-3 py-2 font-normal text-slate-700 transition-all hover:bg-green-500 dark:bg-[#CF3617] dark:text-slate-50 dark:hover:bg-[#ba3115]"
          href={"/"}
        >
          My resume
        </Link>
      </section>
      <p className="mb-4 text-center">
        Don't forget to checkout my{" "}
        <Link className="text-blue-500" href="/blog">
          blog
        </Link>
      </p>
      <hr className="mb-8 border-2" />
      <section>
        <h2 className="mb-2 text-center text-2xl font-semibold">My works</h2>
        <div className="grid auto-rows-max grid-cols-2 gap-x-4">
          <div>
            <div className="mb-2">
              <Image src={VNOJ_Image} alt="" className="aspect-video" />
            </div>
            <h3 className="text-center text-xl font-semibold">
              VNOJ - Vietnam Online Judge
            </h3>
            <div className="text-center">
              <p className="px-6">
                An online judge based on DMOJ open source. Maintained by VIAP,
                it helps thoundsand of highschool students to practice solving
                programming problems.
              </p>
              <strong>
                Tech stack: <em>Python, Django, JavaScript</em>
              </strong>
            </div>
          </div>
          <div>
            <div className="mb-2">
              <Image src={VA_Image} alt="" className="aspect-video w-full" />
            </div>
            <h3 className="text-center text-xl font-semibold">
              VisuAlgo Clone in C++
            </h3>
            <div className="text-center">
              <p className="px-6">
                Inspired by VisuAlgo by NUS. I did this as a project to skip
                lab's excercises in my Programming Technique course.
              </p>
              <strong>
                Tech stack: <em>C/C++, raylib</em>
              </strong>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
