"use client";

import { create } from "zustand";

import type { NavSectionId } from "@/lib/constants";

type NavState = {
  active: NavSectionId;
  setActive: (id: NavSectionId) => void;
};

export const useNavStore = create<NavState>((set) => ({
  active: "about",
  setActive: (id) => set({ active: id }),
}));

