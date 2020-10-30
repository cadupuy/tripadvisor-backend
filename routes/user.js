const apiKey = process.env.MAILGUN_API_KEY;
const domain = process.env.MAILGUN_DOMAIN;
const express = require("express");
const mailgun = require("mailgun-js")({ apiKey: apiKey, domain: domain });

const router = express.Router();

router.post("/form", (req, res) => {
  console.log(req.fields);

  const data = {
    from: "Tripdadvisor Clone <me@samples.mailgun.org>",
    to: req.fields.email,
    subject: "Tripadvisor Clone",
    text: "Congratulations, you're logged in !",
  };

  mailgun.messages().send(data, (error, body) => {
    console.log(body);
    console.log(error);

    if (error === undefined) {
      res.json({ message: "Données reçues. Un mail a été envoyé" });
    } else {
      res.json({ message: "An error occurred" });
    }
  });
});

module.exports = router;
