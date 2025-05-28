import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Simulated demo login (static user)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.email === "harlow@example.com" && form.password === "password123") {
      // Simulate login and redirect
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "Harlow Stockert",
          email: "harlow@example.com",
          picture: "https://randomuser.me/api/portraits/men/32.jpg",
        })
      );
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 px-2">
        <section className="w-full max-w-md bg-white rounded-3xl shadow-xl px-6 md:px-10 py-8 md:py-12 mt-12 mb-16">
          <header className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
              Login to EasyTrip
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Welcome back! Enter your credentials to access your account.
            </p>
          </header>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="e.g. harlow@example.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                autoFocus
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Your password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full py-3 rounded-xl mt-2 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition text-white"
            >
              Login
            </Button>
            <p className="text-center text-gray-500 text-sm mt-2">
              Don't have an account?{" "}
              <Link className="text-blue-600 hover:underline" to="/register">
                Register
              </Link>
            </p>
          </form>
        </section>
      </main>
    </>
  );
};