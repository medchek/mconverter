import { create } from "zustand";
import { persist } from "zustand/middleware";

import { NumberSlice, createNumberSlice } from "./numberSlice";
import { SettingsSlice, createSettingsSlice } from "./settingsSlice";

export type AppState = {
  number: number | "";
  setNumber: (n: number | "") => void;
};

const useStore = create<SettingsSlice & NumberSlice>()(
  persist(
    (...a) => ({
      ...createNumberSlice(...a),
      ...createSettingsSlice(...a),
    }),
    {
      name: "app-storage",
    },
  ),
);
export default useStore;
