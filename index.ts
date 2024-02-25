import * as express from "express";

const app = express();
const PORT = 3000;

console.log("Mi nombre es: ", process.env.FULL_NAME);

app.get("/hola", (req, res) => {
  res.json({
    message: "Hola desde el servidor",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});
