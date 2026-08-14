"use client";
import Link from "next/link";
import { useState } from "react";
import {
  FiArrowLeft,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

type AuthMode = "login" | "signup";

export default function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("login");
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = mode === "login";

  return (
    <main className="min-h-screen bg-[#f7f7f8] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-md items-center justify-center">
        <div className="w-full">
          {/* Back */}
          <Link
            href="/"
            className="mx-auto mb-6 flex w-fit items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-orange-500"
          >
            <FiArrowLeft className="h-3.5 w-3.5" />
            Back to home
          </Link>

          {/* Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            {/* Header */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {isLogin ? (
                  <>
                    Welcome <span className="text-orange-500">back</span>
                  </>
                ) : (
                  <>
                    Create your{" "}
                    <span className="text-orange-500">
                      account
                    </span>
                  </>
                )}
              </h1>

              <p className="mt-2 text-sm text-gray-500">
                {isLogin
                  ? "Sign in to continue to your account."
                  : "Join us and start shopping today."}
              </p>
            </div>

            {/* Tabs */}
            <div className="mt-7 grid grid-cols-2 rounded-xl bg-gray-100 p-1">
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setShowPassword(false);
                }}
                className={`rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  isLogin
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Login
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("signup");
                  setShowPassword(false);
                }}
                className={`rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  !isLogin
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Google */}
            <button
              type="button"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
            >
              <FcGoogle className="h-5 w-5" />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* Form */}
            <form className="space-y-4">
              {/* Name */}
              {!isLogin && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full name
                  </label>

                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
                    <FiUser className="shrink-0 text-gray-400" />

                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email address
                </label>

                <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
                  <FiMail className="shrink-0 text-gray-400" />

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>

                  {isLogin && (
                    <Link
                      href="/forgot-password"
                      className="text-xs font-medium text-orange-500 hover:text-orange-600"
                    >
                      Forgot password?
                    </Link>
                  )}
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
                  <FiLock className="shrink-0 text-gray-400" />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="shrink-0 text-gray-400 transition-colors hover:text-gray-700"
                  >
                    {showPassword ? (
                      <FiEyeOff className="h-4 w-4" />
                    ) : (
                      <FiEye className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              {!isLogin && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Confirm password
                  </label>

                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 transition-colors focus-within:border-orange-400 focus-within:bg-white">
                    <FiLock className="shrink-0 text-gray-400" />

                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-transparent text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Terms */}
              {!isLogin && (
                <label className="flex cursor-pointer items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-gray-300 accent-orange-500"
                  />

                  <span className="text-xs leading-5 text-gray-500">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-medium text-gray-700 hover:text-orange-500"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-medium text-gray-700 hover:text-orange-500"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-full bg-orange-500 py-3.5 text-sm font-semibold text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
              >
                {isLogin
                  ? "Sign in"
                  : "Create account"}
              </button>
            </form>

            {/* Switch */}
            <p className="mt-6 text-center text-sm text-gray-500">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
              <button
                type="button"
                onClick={() =>
                  setMode(isLogin ? "signup" : "login")
                }
                className="font-semibold text-orange-500 hover:text-orange-600"
              >
                {isLogin ? "Sign up" : "Login"}
              </button>
            </p>
          </div>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-gray-400">
            Secure authentication · Your data is protected
          </p>
        </div>
      </div>
    </main>
  );
}