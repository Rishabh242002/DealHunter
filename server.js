const PORT = 8000;
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const username = process.env.REACT_USER;

const password = process.env.REACT_PASSWORD;

app.get("/deals", async (req, res) => {
  try {
    const body = {
      source: "amazon_search",
      domain: "in",
      query: "deal of the day",
      parse: true,
      pages: 1,
    };
    const response = await fetch( process.env.REACT_URL, {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),      },
    });

    const data = await response.json() ; 

    const results = data.results[0].content.results.organic; 

    const filteredDeals = results.filter(deal => deal.price_strikethrough)

    const sortedByBestDeal = filteredDeals.sort((b,a) => 
    ((a.price_strikethrough-a.price)/a.price * 100) -
    ((b.price_strikethrough-b.price)/b.price * 100 ))

    res.send(sortedByBestDeal)

  } catch (err) {
    console.error(err);
  }
});

app.listen(PORT , () => console.log(`Listening on port ${PORT}`))
