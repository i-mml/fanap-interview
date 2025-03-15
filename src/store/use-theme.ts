import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface FormState {
  isDark: boolean;
  toggleDarkMode: () => void;
}

export const useThemeStore = create<FormState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleDarkMode: () => set((state) => ({ isDark: !state.isDark })),
    }),
    { name: "theme-storage", storage: createJSONStorage(() => localStorage) }
  )
);
