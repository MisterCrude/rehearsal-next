This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Next.js Documentation in GihHub](https://github.com/vercel/next.js/tree/canary/docs)
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Tools

- [Next.js](https://vercel.com/solutions/nextjs)
- [NextAuth.js](https://next-auth.js.org/)
- [MUI](https://mui.com/)
- [Contentful](https://www.npmjs.com/package/contentful)
- [lodash](https://lodash.com/)
- [React-query](https://tanstack.com/query)
- [Axios](https://axios-http.com/docs/intro)
- [@turf/turf](https://turfjs.org/) - geospatial analysis library
- [@mapbox/mapbox-gl-geocoder](https://github.com/mapbox/mapbox-gl-geocoder)
- [mapbox-gl](https://www.npmjs.com/package/mapbox-gl)

### Services

- [Clicky](https://clicky.com/) - analytics tool
- [Vercel](https://vercel.com/) - deployment
- [Auth0](https://auth0.com/) - authentication
- [Contentful](https://www.contentful.com/) - headless CMS
  - [Strapi](https://strapi.io/features) - `NOT USED YET` open source alternative

#### Development

- [Ngrok](ngrok.com) - share a localhost app across devices

### FAQ

- [TS with contentful](https://www.contentful.com/developers/docs/javascript/tutorials/typescript-in-javascript-client-library/)
- [Rendering RichText in contentful](https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/)

### App arhitecture

- `components/`- reusable components, can contain not shared _subcomponents_, _utils_, _types_ if needed
- `contexts/` - custom contexts
- `hooks/` - custom hooks
- `layouts/` - components that are composed of pages
- `pages/` - components that are composed of templates
- `public/` - public files
- `resources/ `- api calls split by resource
- `services/ `- services, analytics, auth, etc
- `types/ `- typescript shared application types
- `utils/ `- utility functions
- `.env.local.example`- environment variables
- `.env.local `- local environment variables
- `.next/` - next build
- `.vscode/` - vscode config
