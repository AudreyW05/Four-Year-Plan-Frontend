# Application Frontend

_Application Description_

## Inital setup

**Prerequisites NodeJS LTS v18.14.0**

1. Install nvm on your machine
2. run `nvm install v18.14.0`
3. run `nvm use`
4. Run `npm install` in the working directory to install required packages
5. Reference `.env.example` and create your own `.env` file
6. Run `npm run start` to start the server on localhost

## Documentation

- [**Live Site**]()
- [**Figma Design**]()

### File Structure and Naming Convention

```
src/
├─ api/
│  ├─ ApiHandler.ts
│  ├─ ApiService.ts
├─ assets/
├─ components/
│  ├─ ExampleComponent/
│  │  ├─ ExampleComponent.tsx
│  │  ├─ index.ts
├─ constants/
├─ pages/
│  ├─ Home/
│  │  ├─ Home.tsx
│  │  ├─ index.ts
├─ utils/
│  ├─ hooks/
│  ├─ contexts/
│  ├─ miscellaneous.ts
```

### Commit Message Convention

- Use [Gitmoji](https://gitmoji.dev/) to add emojis to your commit messages
- Use the following format for your commit messages
  - :sparkles: `feat: add new feature`
  - :bug: `fix: fix a bug`
  - :recycle: `refactor: refactor code`
  - :art: `style: change styling`
  - :fire: `chore: remove unused code`
  - :memo: `docs: update documentation`
  - :package: `package: update package`
  - :rocket: `deploy: deploy to production`
  - :wastebasket: `waste: remove unused code`

## Screenshots

_[Placeholder]_
