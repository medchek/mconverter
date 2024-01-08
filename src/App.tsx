import { Toaster } from "sonner";
import { useRef, useState } from "react";
import { useCopyToClipboard, useTimeout } from "usehooks-ts";
import Input from "./components/Input";
import Output from "./components/Output";
import Header from "./components/Header";
import CopyButton from "./components/CopyButton";
import Footer from "./components/Footer";

export default function App() {
  const outputRef = useRef<HTMLTextAreaElement | null>(null);

  // a null value disables the timeout
  const [showCopied, setShowCopied] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, copy] = useCopyToClipboard();

  const copyToCipboard = () => {
    // enable the timeout
    const v = outputRef.current?.textContent;
    if (v && v.trim().length > 0) {
      setShowCopied(2000);
      copy(v);
    }
  };
  const resetShowCopied = () => {
    setShowCopied(null);
  };

  useTimeout(resetShowCopied, showCopied);

  return (
    <div className="flex flex-col bg-neutral-50 dark:bg-[#06060A] dark:text-neutral-100 h-full w-full px-4 sm:px-10 md:px-24 xl:px-48 text-neutral-900 dark:[color-scheme:dark]">
      <Header />
      <main className="flex flex-col justify-between py-4 gap-4 grow ">
        <div className="flex flex-col gap-4 grow">
          <Input />
          <Output ref={outputRef} />
        </div>
        <CopyButton onClick={copyToCipboard} showCopied={showCopied !== null} />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
