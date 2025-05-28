import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "@/components/common/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");

  // Simulated register (static, stores to localStorage just for demo)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill all fields.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match.");
      return;
    }
    // Simulate registration
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: form.name,
        email: form.email,
        picture: "https://randomuser.me/api/portraits/men/32.jpg",
      })
    );
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 px-2">
        <section className="w-full max-w-md bg-white rounded-3xl shadow-xl px-6 md:px-10 py-8 md:py-12 mt-12 mb-16">
          <header className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
              Register to EasyTrip
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Create your free account to start planning your trips.
            </p>
          </header>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit} autoComplete="off">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                autoFocus
              />
            </div>
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
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
                Password <span className="text-red-500">*</span>
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="confirm" className="block text-gray-700 font-semibold mb-1">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <Input
                id="confirm"
                type="password"
                placeholder="Confirm your password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="w-full py-3 rounded-xl mt-2 text-base md:text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition text-white"
            >
              Register
            </Button>
            <p className="text-center text-gray-500 text-sm mt-2">
              Already have an account?{" "}
              <Link className="text-blue-600 hover:underline" to="/login">
                Login
              </Link>
            </p>
          </form>
        </section>
      </main>
    </>
  );
};