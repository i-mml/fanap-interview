"use client";

import React from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useFormStore } from "@/store/use-form-store";
import InformationForm from "./components/InformationForm";
import InformationResult from "./components/InformationResult";

const HomeView = () => {
  const { submitted } = useFormStore();

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Job Application
          </h1>
          <ThemeSwitcher />
        </div>

        {!submitted && <InformationForm />}
        {submitted && <InformationResult />}
      </div>
    </main>
  );
};

export default HomeView;
