import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send-mail", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Alle velden zijn verplicht." });
  }

  try {
    // ✉️ Transporter configureren (gebruik SMTP van bijv. Gmail of je domein)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 📨 E-mail verzenden
await transporter.sendMail({
  from: `"Dakwerk Sterken Contactformulier" <info@dakwerksterken.nl>`, // ✅ jouw eigen adres
  to: process.env.MAIL_TO,
  replyTo: email, // ✅ hiermee kun je direct antwoorden naar de afzender
  subject: `Nieuw bericht via contactformulier van ${name}`,
  html: `
    <h3>Nieuw bericht van ${name}</h3>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Bericht:</strong></p>
    <p>${message}</p>
  `,
});

    res.json({ success: true });
  } catch (err) {
    console.error("Fout bij verzenden:", err);
    res.status(500).json({ error: "E-mail verzenden mislukt." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server draait op http://localhost:${PORT}`));
