import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
