"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";
import { TagsIcon } from "@sanity/icons";
import { AnimatePresence, motion } from "framer-motion";
// import SearchPage from "./SearchPage";

const font = Lilita_One({ weight: "400", subsets: ["latin"] });

function Navbar({ tags = false }: { tags?: boolean }) {
  return (
    <div className="mx-auto max-w-6xl p-6 sticky top-0 border-b dark:border-b-purple-950 backdrop-blur-sm">
      <AnimatePresence>
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hover:animate-pulse"
          >
            <Link
              href="/"
              className={`${font.className} text-3xl hover:scale-105 transition duration-300 ease-in-out transform hover:animate-spin`}
            >
              Dev
              <span className="bg-gradient-to-tr from-[#770BFF] via-45% via-[#D8C2FF] to-[#B982EE] bg-clip-text text-transparent">
                Blog
              </span>
            </Link>
          </motion.div>

          {/* <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <SearchPage />
          </motion.div> */}

          <div className="flex items-center space-x-4">
            {tags && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <Link href="/tag">
                  <TagsIcon
                    fontSize={33}
                    className="border border-zinc-300 rounded-full p-1 hover:bg-purple-500 hover:opacity-70  transition ease-in-out"
                  />
                </Link>
              </motion.div>
            )}

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              <ThemeSwitch />
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
