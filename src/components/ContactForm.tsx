import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // 🧠 Handelt invoerupdates af
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✉️ Verzendt formulierdata naar jouw Express-server
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Serverfout");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Fout bij verzenden:", err);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Stuur een bericht
      </h3>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="name">
          Naam
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          placeholder="Uw naam"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          placeholder="Uw e-mailadres"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="message">
          Bericht
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
          placeholder="Uw bericht..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={`w-full bg-blue-800 text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors ${
          status === "sending" ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {status === "sending" ? "Verzenden..." : "Verstuur Bericht"}
      </button>

      {status === "success" && (
        <p className="text-green-600 mt-4">
          ✅ Uw bericht is succesvol verzonden!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-4">
          ❌ Er ging iets mis bij het verzenden. Probeer het opnieuw.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
