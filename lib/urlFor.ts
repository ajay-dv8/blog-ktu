/* eslint-disable no-process-env */
import ImageUrlBuilder from '@sanity/image-url'

export const imageBuilder = ImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
})

export const urlForImage = (source: Parameters<(typeof imageBuilder)['image']>[0]) =>
  imageBuilder.image(source)








//import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";
/*
import { getClient } from "./sanity.client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(getClient);

function urlFor(source: any) {
    return builder.image(source);
}
export default urlFor;
*/