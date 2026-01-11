// index.js
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Render 🌱");
});

app.get("/health", (req, res) => {
  res.json({
    status: "alive",
    time: new Date().toISOString(),
  });
});

app.get("/comfort", (req, res) => {
  const messages = ["오늘은 여기까지 해도 충분합니다.", "지금 속도가 딱 좋습니다.", "아무것도 안 해도 괜찮은 날입니다."];
  const msg = messages[Math.floor(Math.random() * messages.length)];
  res.json({ message: msg });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
