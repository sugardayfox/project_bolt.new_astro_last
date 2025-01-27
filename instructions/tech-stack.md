# Technical Stack Overview

## Frontend Tech Stack
- **Astro.js**: A static site generator for building fast and responsive websites.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development, ensuring responsive design and customization.
- (DEBATABLE) **shadcn/ui**: A component library for building user interfaces with a modern aesthetic.

## Backend Tech Stack
- **Astro**: A static site generator for building fast and responsive websites.
- **Strapi**: A headless CMS that provides a flexible API for managing content, allowing for easy integration with the frontend.

## API Integrations
- **Mailerlite**: For managing email subscriptions and newsletters, providing an easy way for users to sign up for updates.
- **umami.js**: A simple and privacy-friendly analytics solution to track user interactions without compromising user data.
- **Tally.so**: Used for creating surveys and forms, allowing users to submit directory entries or feedback.
- **Cookie Consent Library**: To manage GDPR compliance and inform users about cookie usage.

## Deployment Instructions
1. **Environment Setup**:
   - Ensure Node.js and npm are installed on your machine.
   - Clone the repository from GitHub.
   - Run `npm install` to install all necessary dependencies.

2. **Running the Application**:
   - Use `npm start` to launch the application in development mode.
   - For production, build the application using `npm run build` and deploy the static files to a web server.

3. **Database Configuration**:
   - Set up Strapi by following the official documentation to configure your database and API endpoints.

4. **Hosting**:
   - Netlify is considered only as htmx should be finely hosted there as a static site.

5. **Monitoring and Analytics**:
   - Integrate umami.js for tracking user interactions post-deployment.

6. **Testint and Debugging**:
    - we will do manual testing only as we will use Astro in static site generation mode, so no testing framework is needed.

7. **Astro packages added**: 
- tailwind, 
- netlify--to easily deploy see more at https://docs.astro.build/en/guides/deploy/netlify
- sitemap--for better SEO
- rss--for better SEO
- mdx--to be able to use components within markdown
- db--enables the usage of SQLite in Astro Projects, at later stages.
- alpinejs--to be used later for interactivity, at later stages.
- partytown--to be used later for analytics, at later stages, when we need to optimize further for speed.

## out of scope tech stack considerations

1. will introduce htmx (server side interactivity) and alpine.js (react like stuff without the kitchen sink) as needed. See more about the whys in this article https://flaviocopes.com/the-aha-stack/