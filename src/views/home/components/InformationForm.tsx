"use client";

import { JOB_ROLES, SKILLS } from "@/constants/input-mocks-data";
import { useFormStore } from "@/store/use-form-store";
import clsx from "clsx";
import React from "react";

const InformationForm = () => {
  const { data, errors, isSubmitting, setField, validate, submit, reset } =
    useFormStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) submit();
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="input-label">Full Name *</label>
          <input
            disabled={isSubmitting}
            type="text"
            value={data.fullName}
            onChange={(e) => setField("fullName", e.target.value)}
            className={clsx(
              "input-base-style",
              errors.fullName ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.fullName && (
            <p className="input-error-message">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label className="input-label">Email *</label>
          <input
            disabled={isSubmitting}
            type="email"
            value={data.email}
            onChange={(e) => setField("email", e.target.value)}
            className={clsx(
              "input-base-style",
              errors.email ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.email && (
            <p className="input-error-message">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="input-label">Job Role *</label>
          <select
            disabled={isSubmitting}
            value={data.jobRole}
            onChange={(e) => setField("jobRole", e.target.value)}
            className={clsx(
              "input-base-style",
              errors.jobRole ? "border-red-500" : "border-gray-300"
            )}
          >
            <option value="">Select a role</option>
            {JOB_ROLES.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
          {errors.jobRole && (
            <p className="input-error-message">{errors.jobRole}</p>
          )}
        </div>

        <div>
          <label className="input-label">Years of Experience *</label>
          <input
            disabled={isSubmitting}
            type="number"
            min="0"
            value={data.yearsOfExperience}
            onChange={(e) => setField("yearsOfExperience", e.target.value)}
            className={clsx(
              "input-base-style",
              errors.yearsOfExperience ? "border-red-500" : "border-gray-300"
            )}
          />
          {errors.yearsOfExperience && (
            <p className="input-error-message">{errors.yearsOfExperience}</p>
          )}
        </div>
      </div>

      <div>
        <label className="input-label">Skills</label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {SKILLS.map((skill) => (
            <label key={skill} className="flex items-center space-x-2">
              <input
                disabled={isSubmitting}
                type="checkbox"
                checked={data.skills.includes(skill)}
                onChange={(e) => {
                  const newSkills = e.target.checked
                    ? [...data.skills, skill]
                    : data.skills.filter((s) => s !== skill);
                  setField("skills", newSkills);
                }}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600"
              />
              <span className="text-gray-700 dark:text-gray-300">{skill}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="input-label">Cover Letter *</label>
        <textarea
          disabled={isSubmitting}
          value={data.coverLetter}
          onChange={(e) => setField("coverLetter", e.target.value)}
          className={`input-base-style ${
            errors.coverLetter ? "border-red-500" : "border-gray-300"
          }  h-32`}
        />
        {errors.coverLetter && (
          <p className="input-error-message">{errors.coverLetter}</p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          disabled={isSubmitting}
          type="submit"
          className="px-4 py-2 bg-blue-600 disabled:bg-blue-900 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          {isSubmitting ? "Submitting ..." : "Submit"}
        </button>
        <button
          disabled={isSubmitting}
          type="button"
          onClick={reset}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default InformationForm;
