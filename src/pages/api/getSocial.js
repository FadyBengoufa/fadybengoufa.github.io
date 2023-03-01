import { client } from "../../../sanity";

const { groq } = require("next-sanity");

const query = groq`
    *[_type == "socials"]
`;

export default async function handler(req, res) {
  const socials = await client.fetch(query);
  res.status(200).json({ socials });
}
