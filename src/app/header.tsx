import React from "react";
import Image from "next/image";
import Search from "./(components)/search";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import dynamic from "next/dynamic";

const LoginRegister = dynamic(() => import("./(components)/login-register-nav"), {
  ssr: false,
});

const navigation = ["manga", "ranking","favorites", "login", "about"];

export default function Header() {
  return (
    <header className="flex flex-col bg-gray-800 text-white p-4 justify-between items-center w-full">
      <div className="flex align-middle justify-center items-center w-full">
        <a href="/">
          <Image
            src="/manga.png"
            alt="Logo"
            width={100}
            height={100}
            priority={true}
          />
        </a>
        <nav className="flex-grow m-2 w-[30%] overflow-auto scrollbar ml-20">
          <ul className="flex space-x-10 text-lg uppercase">
            {
              navigation.map((title) => {
                const path = `/${title}`
                return(
                  <li className="min-w-[fit-content]">
                  <a
                    href={path}
                    className="hover:text-gray-400 transition-colors duration-300"
                  >
                    {title}
                  </a>
                </li>
                );
              })
            }
          </ul>
        </nav>

        <Search />

        <div className="flex justify-center py-2 text-white gap-3 flex-wrap w-[15%] max-w-[250px]">
          <Image
            src="/language.png"
            alt="language icon"
            width={32}
            height={32}
          />
          <Select defaultValue="en">
            <SelectTrigger>
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="ms">Bahasa Melayu</SelectItem>
              <SelectItem value="zh">Chinese</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
      </div>
      {/* <ul className="divide-y divide-gray-300 flex gap-5">
        <li className="flex justify-center py-2">
          <Search />
        </li>
      </ul> */}
    </header>
  );
}
