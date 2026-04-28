# Portfolio Control Guide

Use `src/data/portfolioData.js` as your control unit.

## Change Words

Edit these fields:

- `personal.name`
- `personal.title`
- `personal.intro`
- `personal.availability`
- `about`
- `siteContent.sections`
- `siteContent.hero`
- `siteContent.contactForm`
- `siteContent.footer`
- `siteContent.navigation`

## Change Links

Edit `personal.links`.

Keep the resume as:

```js
resume: "/resume.pdf"
```

Then replace `public/resume.pdf` with your latest resume.

## Add A Project

Add one object inside `projects`:

```js
{
  title: "Project Name",
  description: "What the project does.",
  features: ["Feature 1", "Feature 2"],
  stack: ["React", "Node.js"],
  github: "https://github.com/your/project",
  live: "https://your-live-demo.com",
}
```

## Remove A Project

Delete that project object from the `projects` array.

## Add Skills

Add items inside one of these arrays:

- `skills.programmingLanguages`
- `skills.frameworksTechnologies`
- `skills.coreProblemSolving`
- `skills.currentlyLearning`

Example:

```js
{ name: "Docker", icon: "TbServerCog" }
```

## Change Section Titles

Edit `siteContent.sections`.

Example:

```js
projects: {
  eyebrow: "WORK",
  title: "Selected Engineering Projects",
}
```

## Change Buttons And Form Text

Edit these blocks:

- `siteContent.hero`
- `siteContent.projectActions`
- `siteContent.contactForm`

## Change Navigation

Edit `siteContent.navigation`.

Keep each `id` matching the section id in the page. Usually you only change `label`.

## How Portfolios Are Usually Updated

Most developer portfolios use one of these approaches:

- Data file: easiest for personal portfolios. Edit one file and redeploy.
- Admin dashboard: useful if non-coders need to edit content, but it needs login, database, and more backend work.
- CMS: tools like Sanity, Strapi, or Contentful let you edit content in a web dashboard.

For this portfolio, the cleanest setup is the data-file control unit. It is fast, simple, free, and easy to deploy.
