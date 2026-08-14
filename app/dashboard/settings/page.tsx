import { customer } from "@/components/data/customer";
import type { ReactNode } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

export default function SettingsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

        <p className="mt-2 text-gray-500">
          Update your personal details and password.
        </p>
      </div>

      <div className="space-y-6">
        {/* Personal details */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="mb-5 text-lg font-semibold text-gray-900">
            Personal details
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <Field
              label="Full name"
              icon={<FiUser />}
              defaultValue={customer.name}
            />

            <Field
              label="Email address"
              icon={<FiMail />}
              defaultValue={customer.email}
              type="email"
            />
          </div>

          <button
            type="button"
            className="mt-6 rounded-full bg-primary-orange px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-90"
          >
            Save changes
          </button>
        </div>

        {/* Password */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="mb-5 text-lg font-semibold text-gray-900">
            Change password
          </h2>

          <div className="space-y-5">
            <Field
              label="Current password"
              icon={<FiLock />}
              type="password"
              placeholder="••••••••"
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="New password"
                icon={<FiLock />}
                type="password"
                placeholder="••••••••"
              />

              <Field
                label="Confirm new password"
                icon={<FiLock />}
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="button"
            className="mt-6 rounded-full border border-gray-200 bg-gray-100 px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-200"
          >
            Update password
          </button>
        </div>
      </div>
    </div>
  );
}

interface FieldProps {
  label: string;
  icon?: ReactNode;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
}

function Field({
  label,
  icon,
  defaultValue,
  placeholder,
  type = "text",
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </span>

      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-primary-orange/50 focus-within:bg-white">
        {icon && <span className="shrink-0 text-gray-400">{icon}</span>}

        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
        />
      </div>
    </label>
  );
}
