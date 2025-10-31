"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
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

  const validateForm = () => {
    return Object.keys(form).every((key) => form[key] && form[key].length > 0);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrorMessage("form is incomplete...");
      return;
    } else {
      setErrorMessage(null);
      setIsLoading(true);
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subject: `name: ${form.name}, subject: ${form.subject}`,
            text: `mail: ${form.email}, message: ${form.message}`,
          }),
        });
        const result = await response.json();
        if (!response.ok) {
          alert("failed to send email: " + (result.error || "Unknown error"));
        } else {
          alert("email sent successfully...");
        }
      } catch (err) {
        alert("error occurred: " + err.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="contact-form-parent">
      <div className="w-full max-w-lg px-8">
        <h1 className="!text-4xl font-bold text-white mb-8 text-center">
          Contact
        </h1>
        <form className="space-y-6" onSubmit={onSubmit}>
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
            type="submit"
            className={`${
              isLoading ? "glitch-btn" : ""
            } w-full py-2 px-4 rounded bg-zinc-700 text-white font-semibold hover:bg-zinc-600 transition-colors cursor-pointer`}
            data-text={isLoading ? "Sending..." : "Send"}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
        {errorMessage ? (
          <p className="mt-2 text-base text-red-500">{errorMessage}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
