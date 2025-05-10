# Edka Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains the documentation for [Edka](https://edka.io) - The self-hosted PaaS you can outgrow by design.

## 🚀 Project Structure

Inside of this Edka documentation project, you'll see the following folders and files:

```
.
├── public/             # Static assets like favicons
├── src/
│   ├── assets/         # Images and graphics used in docs
│   ├── content/
│   │   ├── docs/       # Documentation content (Markdown files)
│   │   │   ├── get-started/
│   │   │   ├── platform-usage/
│   │   │   ├── guides/
│   │   │   └── reference/
│   └── styles/         # Custom CSS styles
├── astro.config.mjs    # Astro and Starlight configuration
└── package.json        # Project dependencies
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`            | Installs dependencies                            |
| `pnpm dev`                | Starts local dev server at `localhost:4321`      |
| `pnpm build`              | Build your production site to `./dist/`          |
| `pnpm preview`            | Preview your build locally, before deploying     |
| `pnpm astro ...`          | Run CLI commands like `astro add`, `astro check` |

## 📝 Content Authoring

### Adding New Content

1. Create a new Markdown or MDX file in the appropriate directory under `src/content/docs/`
2. Add frontmatter with `title` and `description`
3. Write your content using Markdown

### Linking Between Pages

Use relative links between pages:

```markdown
[Link to Quick Start](/get-started/quick-start/)
```

### Adding Images

Place images in the `src/assets/` directory and reference them in your Markdown:

```markdown
![Alt text](../../assets/example-image.png)
```

## 🤝 Contributing

We welcome contributions to the Edka documentation. Please follow these steps:

1. Fork this repository
2. Create a new branch for your changes
3. Make your changes
4. Submit a pull request

## 📚 Documentation Structure

- **Get Started**: Introduction and quick start guides
- **Platform Usage**: Detailed instructions for using Edka
- **Guides**: Step-by-step tutorials for common tasks
- **Reference**: API documentation and technical details

## 📄 License

This documentation is provided by Edka Digital.

```
pnpm create astro@latest -- --template starlight
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/withastro/starlight&create_from_path=examples/basics)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight's docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
