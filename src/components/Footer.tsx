import ExternalLinkIcon from "./icons/ExternalLinkIcon";

export default function Footer() {
  const date = new Date();
  const copyright = "CHMD";
  return (
    <footer className="w-full h-8 flex items-center justify-center text-sm xl:text-base  xl:font-medium text-neutral-400 dark:text-neutral-700 leading-none">
      © {date.getFullYear()} {copyright} -
      <a className="hover:underline ml-1" rel="noreferrer" target="_blank" href="https://github.com/medchek">
        Github
      </a>
      <ExternalLinkIcon />
    </footer>
  );
}
