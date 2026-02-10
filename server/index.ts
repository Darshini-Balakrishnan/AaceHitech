import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// For CommonJS compatibility after bundling
const __filename = typeof import.meta.url !== 'undefined' 
  ? fileURLToPath(import.meta.url) 
  : (typeof __filename !== 'undefined' ? __filename : '');
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "dist/public")));

// Serve index.html for all routes to support SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/public/index.html"), (err) => {
    if (err) {
      res.status(200).send("Static site ready. Run 'npm run build' to generate the production files.");
    }
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
