import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { schemaTypes } from './schemas'
import { myTheme } from './theme';

import StudioNavbar from './components/StudioNavbar';
import Logo from './components/Logo'

//import { apiVersion, dataset, projectId } from './sanity/env';
//import {schema} from './sanity/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: '/studio',
  name: 'blog_ktu_studio',
  title: 'blog ktu studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    types: schemaTypes,
  },
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    //visionTool({defaultApiVersion: apiVersion}),
    visionTool(),
  ],
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  theme: myTheme,
})
