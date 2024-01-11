import { useRef, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Toaster } from "sonner";
import { useCopyToClipboard, useEffectOnce, useTimeout } from "usehooks-ts";
import Input from "./components/Input";
import Output from "./components/Output";
import Header from "./components/Header";
import CopyButton from "./components/CopyButton";
import Footer from "./components/Footer";

import { window as tWindow } from "@tauri-apps/api";
import { TauriEvent } from "@tauri-apps/api/event";
import { APP_DIMENSIONS_LOCALSTORAGE_KEY } from "./lib/constants";
import { currentMonitor } from "@tauri-apps/api/window";
import { restoreAppDimesions } from "./lib/utils";

type AppDimentions = {
  xLeft: number;
  xRight: number;
  yTop: number;
  yBottom: number;
  width: number;
  height: number;
  isMaximized: boolean;
};

export default function App() {
  useEffectOnce(() => {
    const currentWindow = tWindow.getCurrent();

    // handle app dimensions retrieval
    restoreAppDimesions(currentWindow, currentMonitor);
    // handle save app posistion and dimentions when closed to be later used

    const unlisten = currentWindow.listen(
      TauriEvent.WINDOW_CLOSE_REQUESTED,
      async (/*e: Event<TauriEvent.WINDOW_CLOSE_REQUESTED>*/) => {
        //
        const { x, y } = await currentWindow.outerPosition();
        const { width, height } = await currentWindow.innerSize();
        const isMaximized = await currentWindow.isMaximized();
        const appDimentions: AppDimentions = {
          xLeft: x,
          xRight: x + width,
          yTop: y,
          yBottom: y + height,
          width,
          height,
          isMaximized,
        };
        localStorage.setItem(APP_DIMENSIONS_LOCALSTORAGE_KEY, JSON.stringify(appDimentions));
      },
    );

    const splashTimeout = setTimeout(() => {
      // close the splash screen
      invoke("close_splashscreen");
    }, 500);

    return () => {
      unlisten.then((fn) => fn());
      clearTimeout(splashTimeout);
    };
  });

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
    <div className="flex flex-col bg-neutral-50 dark:bg-[#06060A] dark:text-neutral-100 h-full w-full px-4 sm:px-10 md:px-24 xl:px-48 text-neutral-900 dark:[color-scheme:dark] overflow-hidden">
      <Header />
      <main className="flex flex-col justify-between pt-4 pb-2 md:pb-4 gap-4 grow ">
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
