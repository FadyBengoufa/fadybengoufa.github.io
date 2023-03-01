import { client } from "../../../sanity";

const { groq } = require("next-sanity");

const query = groq`
    *[_type == "experience"] | order(dateEnded desc)
`;

export default async function handler(req, res) {
  const experiences = await client.fetch(query);
  res.status(200).json({ experiences });
}
