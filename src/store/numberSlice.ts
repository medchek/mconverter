import { StateCreator } from "zustand";

export type NumberSlice = {
  number: number | "";
  setNumber: (_: number | "") => void;
};

export const createNumberSlice: StateCreator<NumberSlice> = (set) => ({
  number: "",
  setNumber: (n) => set(() => ({ number: n })),
});

export default createNumberSlice;
