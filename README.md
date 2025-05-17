# Edka Developer Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

This repository contains the documentation for [Edka](https://edka.io).

## 🚀 Project Structure

Inside of this Edka documentation project, you'll see the following folders and files:

```
.
├── public/             # Static assets like favicons
├── src/
│   ├── assets/         # Images and graphics used in docs
│   ├── content/
│   │   ├── docs/       # Documentation content (Markdown files)
│   │   │   ├── add-ons/
│   │   │   ├── get-started/
│   │   │   ├── integrations/
│   │   │   └── platform-usage/
│   └── styles/         # Custom CSS styles
├── astro.config.mjs    # Astro and Starlight configuration
└── package.json        # Project dependencies
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## 📝 Content Authoring

### Adding New Content

1. Create a new Markdown or MDX file in the appropriate directory under `src/content/docs/`
2. Add frontmatter with `title` and `description`
3. Write your content using Markdown

### Linking Between Pages

Use relative links between pages:

```markdown
[Link to Quick Start](/get-started/create-a-cluster/)
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
- **Integrations**: How to integrate with external services
- **Add-Ons**: Information about available add-ons and how to use them
