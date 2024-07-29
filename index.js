const express = require("express");
const app = express();
const port = 5000;
const IP = require("./model/Model");
const DB = require("./config/DB");
DB();

// Set EJS as the template engine
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
    const existData = await IP.findOne({ ip: data.ip });

    if (!existData) {
      const newData = await IP.create({
        ip: data.ip,
        network: data.network,
        version: data.version,
        city: data.city,
        region: data.region,
        region_code: data.region_code,
        country: data.country,
        country_name: data.country_name,
        country_code: data.country_code,
        country_code_iso3: data.country_code_iso3,
        country_capital: data.country_capital,
        country_tld: data.country_tld,
        continent_code: data.continent_code,
        in_eu: data.in_eu,
        postal: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        utc_offset: data.utc_offset,
        country_calling_code: data.country_calling_code,
        currency: data.currency,
        currency_name: data.currency_name,
        languages: data.languages,
        country_area: data.country_area,
        country_population: data.country_population,
        asn: data.asn,
        org: data.org,
      });
    }
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
