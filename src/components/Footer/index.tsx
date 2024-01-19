import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const socialMedia = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/mohaimin-islam/",
    icon: <FaLinkedin />,
  },
  {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/8687318/mohaimin",
    icon: <FaStackOverflow />,
  },
  {
    name: "Email",
    link: "mailto:mohaimin.islam94@gmail.com",
    icon: <IoIosMail />,
  },
];

export default function Footer() {
  return (
    <div
      className="w-full flex border-t border-t-border justify-between"
      flex-row
    >
      <div className="flex xl:pl-6 pl-4 w-full">
        <h2 className="py-3 border-r border-border xl:pr-4 pr-2  max-sm:grow">
          Find me in:
        </h2>
        <div className="flex flex-row justify-start items-center h-full w-auto">
          {socialMedia.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 xl:px-5 border-r border-r-border h-full flex justify-center items-center hover:text-amber-500 transition-colors ease-in-out duration-200"
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="https://github.com/SL0TR"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 xl:px-5  border-l border-l-border h-full flex justify-center items-center hover:text-amber-500 transition-colors ease-in-out duration-200"
      >
        <p className="mr-2 hidden xl:block">@mohaimin</p>
        <FaGithub />
      </Link>
    </div>
  );
}
