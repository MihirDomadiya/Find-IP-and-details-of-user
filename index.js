const express = require("express");
const app = express();
const port = 5000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Define the route
app.get("/", async (req, res) => {
  const ip = req.query.ip || "";
  const fetchUrl = ip ? `https://ipapi.co/${ip}/json` : "https://ipapi.co/json";

  try {
    // Use dynamic import for node-fetch
    const fetch = (await import("node-fetch")).default;

    const response = await fetch(fetchUrl);
    if (!response.ok) {
      throw new Error("Error fetching IP data");
    }
    const data = await response.json();

    // Render the EJS template with the data
    res.render("index", { data });
  } catch (error) {
    res.status(500).send("Error fetching IP data");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
