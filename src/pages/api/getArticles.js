import { client } from "../../../sanity";

const { groq } = require("next-sanity");

const query = groq`
    *[_type == "articles"]
`;

export default async function handler(req, res) {
  const articles = await client.fetch(query);
  res.status(200).json({ articles });
}
