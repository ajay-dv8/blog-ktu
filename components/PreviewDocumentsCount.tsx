'use client'

import {useLiveQuery} from 'next-sanity/preview'
import DocumentsCount from './DocumentsCount'
import { query } from '@/app/(user)/page'
import { Post } from '@/typings'

type previewDocType={
  data: string
  post: Post[] | any
}
export default function PreviewDocumentsCount({data: initialData}: previewDocType) {
  const [post, loading] = useLiveQuery(initialData, query)

  if (loading) {
    return (
      <>
        <p className="text-center text-lg animate-pulse text-[#f7ab0a]">
          Loading preview data...
        </p>
      </>
    )
  }
  
  return <DocumentsCount post={post} />
}