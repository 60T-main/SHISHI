"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Resend } from "resend";

export default function ContactPage() {
  // Set up email after domain is ready
  //   const resend = new Resend(process.env.RESEND_API_KEY);

  const [form, setForm] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-12 px-4">
      <div className="w-full max-w-lg p-8">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Contact
        </h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="Your name"
              autoComplete="off"
              value={form.name || ""}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="you@email.com"
              autoComplete="off"
              value={form.email || ""}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-white mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
              placeholder="Subject"
              autoComplete="off"
              value={form.subject || ""}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-4 py-2 rounded bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 resize-none"
              placeholder="Type your message..."
              value={form.message || ""}
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </div>
          <button
            type="button"
            onClick={onSubmit}
            className="w-full py-2 px-4 rounded bg-zinc-700 text-white font-semibold hover:bg-zinc-600 transition-colors cursor-not-allowed"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
