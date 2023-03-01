import { client } from "../../../sanity";

const { groq } = require("next-sanity");

const query = groq`
    *[_type == "myInfo"][0]{
        ...,
        socials[]->{title, url}    
    }
`;

export default async function handler(req, res) {
  const myInfo = await client.fetch(query);
  res.status(200).json({ myInfo });
}
