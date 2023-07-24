/*'useclient'

import { useMemo } from 'react'
import { LiveQueryProvider } from 'next-sanity/preview'
import { client, projectId } from './sanity.client';
import { SanityClient } from 'sanity';

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const client = useMemo(() => client: SanityClient({ token }), [token])
  return (
    <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
  );
}
*/
/*
import { definePreview } from 'next-sanity/preview'
import { projectId, dataset } from './sanity.client'

function onPublicAccessOnly() {
    throw new Error (`so couldnt load preview`);
}

if (!projectId || !dataset) {
    throw new Error(`couldnt load  projectId or dataset, call dev`);
}

export const usePreview = definePreview({
    projectId,
    dataset,
    onPublicAccessOnly,
})

*/
