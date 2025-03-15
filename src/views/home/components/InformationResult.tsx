import { useFormStore } from "@/store/use-form-store";
import React from "react";

const InformationResult = () => {
  const { data, reset } = useFormStore();

  return (
    <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">
        Submitted Data
      </h2>
      <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
        {JSON.stringify(data, null, 2)}
      </pre>

      <button
        type="button"
        onClick={reset}
        className="w-20 md:w-28 px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 ml-auto block"
      >
        Reset
      </button>
    </div>
  );
};

export default InformationResult;
