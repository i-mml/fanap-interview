import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type FormState = {
  data: {
    fullName: string;
    email: string;
    jobRole: string;
    yearsOfExperience: string;
    skills: string[];
    coverLetter: string;
  };
  errors: Record<string, string>;
  submitted: boolean;
  isSubmitting: boolean;
  setField: (field: string, value: string | string[]) => void;
  validate: () => boolean;
  submit: () => void;
  reset: () => void;
};

const initialState = {
  fullName: "",
  email: "",
  jobRole: "",
  yearsOfExperience: "",
  skills: [],
  coverLetter: "",
};

export const useFormStore = create<FormState>()(
  persist(
    (set, get) => ({
      data: { ...initialState },
      errors: {},
      submitted: false,
      isSubmitting: false,
      setField: (field, value) =>
        set((state) => ({
          data: { ...state.data, [field]: value },
          errors: { ...state.errors, [field]: "" },
        })),
      validate: () => {
        const { data } = get();
        const errors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.fullName.trim()) errors.fullName = "Full name is required";
        if (!data.email.trim()) {
          errors.email = "Email is required";
        } else if (!emailRegex.test(data.email)) {
          errors.email = "Invalid email format";
        }
        if (!data.jobRole) errors.jobRole = "Job role is required";
        if (!data.yearsOfExperience)
          errors.yearsOfExperience = "Experience is required";
        if (!data.coverLetter.trim())
          errors.coverLetter = "Cover letter is required";

        set({ errors });
        return Object.keys(errors).length === 0;
      },
      submit: async () => {
        set({ isSubmitting: true });
        try {
          await new Promise((resolve) => setTimeout(resolve, 1500));
          set({ submitted: true });
        } finally {
          set({ isSubmitting: false });
        }
      },
      reset: () =>
        set({ data: { ...initialState }, errors: {}, submitted: false }),
    }),
    { name: "form-storage", storage: createJSONStorage(() => localStorage) }
  )
);
