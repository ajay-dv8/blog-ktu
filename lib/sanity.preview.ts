'useclient'

import { definePreview } from 'next-sanity/preview'
import { projectId, dataset } from './sanity.client'

function onPublicAccessOnly() {
    throw new Error (`so couldnt load preview`);
}

if (!projectId || !dataset) {
    throw new Error(`couldnt load  projectId or dataset, call dev`)
}