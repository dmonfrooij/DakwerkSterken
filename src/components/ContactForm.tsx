import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("E-mail verzenden mislukt");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 text-gray-800"
    >
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Stuur een bericht
      </h3>

      {/* Naam veld */}
      <div className="relative">
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-blue-800 transition"
          placeholder=" "
        />
        <label
          htmlFor="name"
          className="absolute text-gray-500 left-4 top-3 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-800"
        >
          Naam
        </label>
      </div>

      {/* E-mail veld */}
      <div className="relative">
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-blue-800 transition"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="absolute text-gray-500 left-4 top-3 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-800"
        >
          E-mail
        </label>
      </div>

      {/* Bericht veld */}
      <div className="relative">
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="peer w-full border border-gray-300 rounded-lg px-4 pt-5 pb-2 focus:outline-none focus:border-blue-800 transition resize-none"
          placeholder=" "
        ></textarea>
        <label
          htmlFor="message"
          className="absolute text-gray-500 left-4 top-3 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-800"
        >
          Bericht
        </label>
      </div>

      {/* Statusmelding */}
      {status === "success" && (
        <p className="text-green-600 text-sm font-medium">
          ✅ Bericht succesvol verzonden!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-sm font-medium">
          ❌ Er is iets misgegaan. Probeer het opnieuw.
        </p>
      )}

      {/* Verzenden knop */}
      <div className="relative">
        <button
          type="submit"
          disabled={status === "sending"}
          className={`w-full py-3 rounded-xl text-white font-semibold text-lg shadow-md transition-all duration-200
            ${
              status === "sending"
                ? "bg-orange-300 cursor-not-allowed"
                : "bg-orange-500 hover:bg-orange-600 hover:shadow-lg"
            }`}
        >
          {status === "sending" ? "Verzenden..." : "Verstuur bericht"}
        </button>

        {/* ✅ Succesmelding overlay */}
        {status === "success" && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-lg animate-fade-in-out">
            Bericht succesvol verzonden ✅
          </div>
        )}

        {/* ❌ Foutmelding overlay */}
        {status === "error" && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-6 py-2 rounded-lg shadow-lg animate-fade-in-out">
            Er is iets misgegaan ❌
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
