# Project Requirements Document (PRD)

## Introduction
This document serves as the most important reference for the AI coding project. It provides a comprehensive summary of all aspects of the project.

## [App Flow Documentation](./app-flow.md)
The application provides a seamless user experience, guiding users from the home page to explore directory entries effortlessly. Users are welcomed with an announcement banner and featured entries, allowing them to easily navigate to additional resources. 

Key interactions include:
- **Home Page Navigation**: Users can scroll through the home page, view announcements, and featured entries.
- **Exploration of Directory Entries**: By clicking the **'Show All'** button, users can access the `/resources` page to view all directory entries.
- **External Links**: Each directory entry links to external sites, ensuring a smooth transition while maintaining referral tracking.
- **Additional Features**: Users can return to the home page to add entries, sign up for newsletters, read messages, check FAQs, and access footer links.

The app is designed to be lightweight, relying on external forms for user engagement, minimizing backend processes.

## Core Features

- [WIP] Feature 4: NavBar Language switch. It should have English as the default option and the following languages, written in the language of the respective country: Deutsch, Español, Polski, Nederlands, Svenska, Português, Norsk, Dansk, Suomi, Magyar. We need to have these text options selectable in a dropdown.
- [WAITING_FOR_TEST] Feature 22: We need a proper GDPR notice in a popover for European visitors. If possible we'll use an external cookie consent library. To make it easy, if we can add vibe then we should.
- [Backlog]  Feature 13: A section to add resources, just a Call-to-action with a button linked to a tally.so form.
- [Backlog] Feature 15: A section to sign up for updates. Mailerlite form in a popover, that covers the whole page, while changing the shade from the section's background to the alternative. That can be closed with an (x) in the upper right corner.
- [Backlog] Feature 20: Make the blog post page responsive. Hero image with the headline inside an overlay on top of it. Then a breadcrumb to go back to the blog page. Or even category later. Then the blog post content. Which should have a half width image with the first paragraph on one of the sides. Then the blogpost with a picture or graphic every 300 words. All with relevant SEO features. 
- [Backlog] Feature 21: For affiliate links we need to give a semi-obtrusive affiliate message that should be both in good spirit, humorous and covering the leglislation.
- [Backlog] Feature 23: We need to make a funny, vibe filled 404 page that helps create trust and rapport with the userbase.
- [Backlog] Feature 24: Multi-language Support:
Adding language switch feature is included, full localization and translation of all content, including regular UI text and the content will also need to be implemented. But it can be done later on project, by project basis, based on research in interest.
- [Backlog] Feature 25: for easier changeover we should have a central configuration file for stuff like - color palette, logo font type (from Google Fonts or such for easier maintenance). Also, this file's use should be expertly documented in the readme.md.
- [Backlog] Feature 2: NavBar Logo. It should have a great font style for text logos and use that as the basic option. 
- [Shipped] Feature 3: NavBar Links. They should be links to the corresponding pages of the application. Also, have a great font style for text links and use that as the basic option. Mainly Resources and Blog. 
- [Shipped] Feature 5: Make NavBar responsive. So, on appropriately small screens, the NavBar should be hidden and a standard hamburger button should be shown to open it.
- [Shipped] Feature 7: Make the home page responsive. 
- [Shipped] Feature 8: Make the resources/directory page responsive.
- [Shipped] Feature 9: Make the blog page responsive.
- [Shipped] Feature 10: We'll design an attractive Hero section on the homepage that will be both informative, include important SEO optimized keywords, semantic too, and will convey the right vibes. [needs more art work when shipping directory sites]
- [Shipped] Feature 11: We'll have a few highlighted directory entries, right under the Hero section, enhancing user engagement.
- [Shipped] Feature 14: A section to showcase three blog posts that helps the SEO effort most. Each a card with a link to the blog post. The card has a thumbnail, with a title and a description. The whole card is clickable and leads to the blog post.
- [Shipped] Feature 16: Founder's message. A section to read the Founder's message. With the founders picture, a headline question and the reasons behind starting the project.
- [Shipped] Feature 17: An FAQ question with foldable answers.
- [Shipped] Feature 18: Footer with the usuals. NavBar links repeated, social media links, and copyright notice with the year always being in the from to format where from is the first year the project was started and to is the current year.
    - double check the year thing
- [Shipped] Feature 19: Blog page to list all the blog post card. They are 1/3 width cards. With the first paragraph as the summary and the rest of the content hidden. All clickable to go to blog post URL.
- [Shipped] Feature 12: We'll have a 'Show all' button right after the directory entries, directing users to the full resources page /directory. As a link that I moved from the top... 
- [SHIPPED] Feature 1: Announcement bar. It should be shown only on first visit (see cookies). Above the NavBar. Can be closed by the user through an interactive (x) in the top right corner of the Announcement bar. Should be shown everywhere but only once in a user session.
- [SHIPPED] Feature 6: Make the announcement bar responsive. But rather shrink it on smaller screens than stacking the text on top of each other. Or just show the first parts of the text.


Lightweight Backend:

## Tech Stack
The application minimizes backend processes by utilizing external forms (e.g., Tally.so for surveys, MailerLite for newsletters, umami.js for analytics, library for cookie consent covering mostly European use cases, but also other legislations), ensuring a smooth user experience without heavy server load.
- **Frontend:** Astro.js, Tailwindcss, shadcn/ui
- **Backend:** Astro.js Static Site Generation mode.
    - **Database:** Strapi for headless CMS
- **Other 3rd Party Tools, Libraries to integrate:** Mailerlite, umami.js, cookie consent

## In Scope vs Out of Scope
### In Scope
- See full feature list above

## Out of Scope - Roadmap

1. More Advanced SEO Features:
The project will include advanced SEO strategies beyond basic on-page optimization.
- stuff like localizing to the place they're visiting from i.e. the city they're visiting from. Like: "Hi, random friend to be from Budapest..."
2. Dark Mode:
The application will eventually include dark mode functionality. That should be both a best practive icon switch AND automated based on the user's system settings.
3. Using design to show hotter items, where more visitors click out through showing interest. 
4. User Accounts and Authentication:
The application will not include user account creation, login, or authentication features, focusing instead on a more open access model.
5. In-depth Analytics:
While basic analytics will be implemented using umami.js, detailed user tracking, heatmaps, or advanced analytics features will not be part of the project.
6. Custom User Profiles:
There will be no functionality for users to create or manage personal profiles or settings.
7. Content Moderation:
The application will not include any content moderation features for user-generated content, such as comments or directory entries.
8. User's Commenting on blog posts:
9. Mobile App Version:
The project will focus solely on the web application, with no plans for a mobile app or native mobile features.
10. Payment Processing:
The application will not handle any payment processing or e-commerce functionalities.
11. Offline Functionality:
The application will not support offline access or functionality, focusing on a fully online experience.
12. Third-party Integrations:
Integrations with additional third-party services beyond those specified (e.g., MailerLite, umami.js) will not be included.
13. Full backend integration:
The application will not have a full backend integration like Supabase, focusing on a headless CMS with a lightweight backend for good.
14. User Authentication:
The project will not include user authentication features, focusing on a more open access model.
15. Custom User Profiles:
The project will not have any functionality for users to create or manage personal profiles or settings.
16. Content Moderation:
The project will not include any content moderation features for user-generated content, such as comments or directory entries.
17. User's Commenting on blog posts:
18. Mobile App Version:
The project will focus solely on the web application, with no plans for a mobile app or native mobile features.
19. Payment Processing:
The project will not handle any payment processing or e-commerce functionalities.
20. Offline Functionality:
The project will not support offline access or functionality, focusing on a fully online experience.
21. Third-party Integrations:
Integrations with additional third-party services beyond those specified (e.g., MailerLite, umami.js) will not be included.
22. Full backend integration:
The project will not have a full backend integration like Supabase, focusing on a headless CMS with a lightweight backend for good.
23. User Authentication:
The project will not include user authentication features, focusing on a more open access model.
24. Custom User Profiles:
The project will not have any functionality for users to create or manage personal profiles or settings.
25. Content Moderation:
The project will not include any content moderation features for user-generated content, such as comments or directory entries.
26. User's Commenting on blog posts:
27. Mobile App Version:
The project will focus solely on the web application, with no plans for a mobile app or native mobile features.
28. Payment Processing:
The project will not handle any payment processing or e-commerce functionalities.
29. Offline Functionality:
The project will not support offline access or functionality, focusing on a fully online experience.
30. Third-party Integrations:
Integrations with additional third-party services beyond those specified (e.g., MailerLite, umami.js) will not be included.
31. Full backend integration:
The project will not have a full backend integration like Supabase, focusing on a headless CMS with a lightweight backend for good.
32. User Authentication:
The project will not include user authentication features, focusing on a more open access model.
33. Feedback gathering from users: NPS widget or surveys.