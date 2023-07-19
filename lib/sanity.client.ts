import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset =   process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = '2023-07-16';

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: false,
  })
  