"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { theme } from "@/atoms";
import { useRecoilState } from "recoil";
import clsx from "clsx";

const links = [
  {
    text: "Home",
    location: "/",
  },
  {
    text: "Posts",
    location: "/posts",
  },
];

const Navbar = () => {
  const [curTheme, setCurTheme] = useRecoilState(theme);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (curTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [curTheme]);

  return (
    <div className={`sticky top-6 z-10`}>
      <div className="w-full">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-3 place-items-center">
            {/* <Image src='/avatar.png' alt='avatar' width={50} height={50} className='rounded-full' /> */}
            <div></div>
            <ul className="shadow-inset flex list-none items-center justify-center gap-6 rounded-full bg-white px-4 py-2 shadow-md ring-1 ring-zinc-800/25 dark:bg-[#18181B] dark:shadow-white/10 dark:ring-white/25">
              {links.map((el, index) => (
                <Link
                  onClick={() => setActiveIndex(index)}
                  href={el.location}
                  key={index}
                >
                  <li
                    className={clsx("text-center text-sm font-medium", {
                      "text-blue-700 dark:text-blue-300": activeIndex === index,
                    })}
                  >
                    {el.text}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="shadow-inset flex items-center rounded-full bg-white px-3 py-2 shadow-md ring-1 ring-zinc-800/25 dark:bg-[#18181B] dark:shadow-white/10 dark:ring-white/25">
              <button
                onClick={() => {
                  setCurTheme(curTheme === "light" ? "dark" : "light");
                }}
              >
                <BsSun size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
