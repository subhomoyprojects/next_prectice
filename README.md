# Learn Next.js

This is a small beginner-friendly Next.js project created for learning React and Next.js together.

## What this project teaches

- How the `app` folder creates routes
- How to build reusable components
- How to navigate with `next/link`
- How to add styles with a global CSS file
- How to use `useState` in a client component

## Project structure

- `app/layout.js`: shared layout for every page
- `app/page.js`: home page
- `app/about/page.js`: simple static route
- `app/topics/page.js`: route that explains key Next.js ideas
- `app/counter/page.js`: route showing React state
- `components/Navbar.js`: reusable navigation component
- `components/CounterCard.js`: interactive client component

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Learning order

1. Read `app/page.js`
2. Read `components/Navbar.js`
3. Read `components/CounterCard.js`
4. Visit `/counter` and click the buttons
5. Create your own new page inside `app`
