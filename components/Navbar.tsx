import Link from "next/link";
import { Suspense } from "react";

export default function Navbar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <header className="flex items-center justify-between py-2 border-b-2 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <nav className="flex items-center justify-between gap-x-8 px-8 py-4 container font-bold uppercase flex-col md:flex-row">
          <Link href={"/"} className="text-3xl text-dark">
            <h1>Zam<span className="text-3xl text-blue-600">llex</span></h1>
          </Link>
          <div>
            <ul className="flex items-center gap-8 text-lg">
              <li>
                <Link href={"/"}>
                  <h2>Home</h2>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <h2>About</h2>
                </Link>
              </li>
              <li>
                <Link href={"/contact"}>
                  <h2>Contact</h2>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Suspense>
  );
}
