This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Test of Nextauth

Test to see if I can get Google login, & email login working for a test site to replace Auth0.

## learning resources

NextAuth docs: [https://next-auth.js.org]
Code Commerce Video: [https://www.youtube.com/watch?v=A5ZN--P9vXM]

## .env file

Create a .env.local file to store the environment variables into.
In Nextjs you can also use .env.development & .env.production [https://nextjs.org/docs/basic-features/environment-variables]

For Google OAUTH, https://console.cloud.google.com/apis/credentials
Create a new credential:
 - OATH client ID
 - Web Application
 - Authorised JavaScript origins: http://localhost:3000
 - Authorised redirect URIs: http://localhost:3000/api/auth/callback/google
Plug the returned Client ID && Client Secret into the fields below

>GOOGLE_CLIENT_ID={see above}
>GOOGLE_CLIENT_SECRET={see above}
>
>NEXTAUTH_URL=http://localhost:3000
>
>JWT_SECRET={generate this with openssl rand -base64 32}

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
