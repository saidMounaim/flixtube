"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ILinks {
  name: string;
  href: string;
}

const links: ILinks[] = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Movies", href: "/dashboard/movies" },
  { name: "Tv Shows", href: "/dashboard/tv-shows" },
  { name: "Recently Added", href: "/dashboard/recently" },
  { name: "My List", href: "/dashboard/user/list" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="w-full max-w-7xl mx-auto items-center justify-between px-5 py-5 flex">
      <div className="flex items-center">
        <Link
          href="/dashboard"
          className="absolute top-4 left-4 md:left-10 text-4xl font-medium"
        >
          FlixTube
        </Link>
        <ul className="hidden lg:flex gap-x-5 ml-20 lg:mt-2 mt-0">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`text-medium text-gray-300 ${
                  pathname === link.href
                    ? "font-semiBold underline !text-white"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
