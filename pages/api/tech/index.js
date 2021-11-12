const { tech } = require("./data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(tech);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
