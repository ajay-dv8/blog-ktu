import { draftMode } from "next/headers";
import { groq } from 'next-sanity'
import { getClient } from "@/lib/sanity.client";
import PreviewProvider from "../../components/PreviewProvider";
import DocumentsCount from "@/components/DocumentsCount";
//import PreviewDocumentsCount from "@/components/PreviewDocumentsCount";
//import { client } from "@/sanity/lib/client";


export const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_creaedAt desc)
`
export default async function HomePage() {

  const preview = draftMode().isEnabled;

  if (preview) {
    return (
      <PreviewProvider  token={""}>

      {/** preview blog list
      <PreviewDocumentsCount data={''}/>
      */}
      </PreviewProvider>
    );
  }

  const posts = await getClient.fetch(query);
  //console.log(post);
  return (
    <>
    <DocumentsCount post={posts}/>
    </>
  );
}






/*
import {draftMode} from 'next/headers'
import {DocumentsCount, query} from '../../components/DocumentsCount'
import PreviewDocumentsCount from '../../components/PreviewDocumentsCount'
import PreviewProvider from '../../components/PreviewProvider'
import {client} from '../../lib/sanity.client'

export default async function IndexPage() {
  const preview = draftMode().isEnabled ? {token: process.env.SANITY_API_READ_TOKEN} : undefined

  const data = await client.fetch(query)

  if (preview) {
    return (
      <PreviewProvider token={preview.token}>
        <PreviewDocumentsCount data={data} />
      </PreviewProvider>
    )
  }

  return <DocumentsCount data={data} />
}
*/
//export default Page;
/*
import { previewData } from "next/headers"
import preview from '../../pages/api/exit-preview';

const Page = () => {
  if (previewData()) {
    return <div> preview mode</div>
  }
  return (
    <>
    <div className='text-3xl'> not preview mode</div>
    </>
  )
}

export default Page
*/