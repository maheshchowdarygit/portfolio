"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = React.useState<string>("");
  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string[]>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear error for field on change
    if (fieldErrors[e.target.name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[e.target.name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFieldErrors({});
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        if (data.errors) {
          setFieldErrors(data.errors);
          setResponseMsg("Please fix the highlighted errors.");
        } else {
          setResponseMsg(data.error || "Failed to send message. Please try again.");
        }
        return;
      }

      setStatus("success");
      setResponseMsg(data.message || "Message delivered successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setResponseMsg("A network error occurred. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot field for bot mitigation - hidden from humans */}
      <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
        <label htmlFor="hp_field">Do not fill this</label>
        <input
          id="hp_field"
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-foreground">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            disabled={status === "loading"}
            className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50"
          />
          {fieldErrors.name && (
            <p className="text-xs text-red-500 font-medium">{fieldErrors.name[0]}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-foreground">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            disabled={status === "loading"}
            className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50"
          />
          {fieldErrors.email && (
            <p className="text-xs text-red-500 font-medium">{fieldErrors.email[0]}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1.5">
        <label htmlFor="subject" className="text-xs font-semibold text-foreground">
          Subject <span className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          placeholder="Role Opportunity / Collaboration / Query"
          disabled={status === "loading"}
          className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50"
        />
        {fieldErrors.subject && (
          <p className="text-xs text-red-500 font-medium">{fieldErrors.subject[0]}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-foreground">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Hi Mahesh, I came across your portfolio and would like to discuss..."
          disabled={status === "loading"}
          className="w-full rounded-lg border border-border bg-background px-3.5 py-2 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 resize-y min-h-[120px]"
        />
        {fieldErrors.message && (
          <p className="text-xs text-red-500 font-medium">{fieldErrors.message[0]}</p>
        )}
      </div>

      {/* Feedback Messages */}
      {status === "success" && (
        <div className="flex items-start gap-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3.5 text-xs text-emerald-800 dark:text-emerald-300">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
          <p className="leading-relaxed">{responseMsg}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-lg bg-red-500/10 border border-red-500/30 p-3.5 text-xs text-red-800 dark:text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0 text-red-600 dark:text-red-400 mt-0.5" />
          <p className="leading-relaxed">{responseMsg}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-background shadow transition-all hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  );
}
