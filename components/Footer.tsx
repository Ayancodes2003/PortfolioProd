"use client";

import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  InstagramLogoIcon
} from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="py-20 px-6 border-t border-white/5 bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

        <h2 className="text-[12vw] sm:text-[10vw] font-bold tracking-tighter uppercase leading-none text-white hover:text-gray-300 transition-colors cursor-pointer hover-target">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=varundhondi2235@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s Talk
          </a>
        </h2>

        <div className="w-full mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-500 text-sm tracking-widest uppercase">
            © {new Date().getFullYear()} Varun Dhondi
          </p>

          <div className="flex items-center gap-6 text-gray-400">

            <a
              href="https://www.linkedin.com/in/varun-dhondi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-300 hover:scale-110"
            >
              <LinkedInLogoIcon width={24} height={24} />
            </a>

            <a
              href="https://github.com/varundhondi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-300 hover:scale-110"
            >
              <GitHubLogoIcon width={24} height={24} />
            </a>

            <a
              href="https://x.com/DhondiVarun"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-300 hover:scale-110"
            >
              <TwitterLogoIcon width={24} height={24} />
            </a>

            <a
              href="https://www.instagram.com/varun_dhondi/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-300 hover:scale-110"
            >
              <InstagramLogoIcon width={24} height={24} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}