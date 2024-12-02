# Application Frontend

The Four-Year Planner is designed to streamline class planning for CS and CSE majors at UCLA. Users land on a login page, where they have the option to log in, sign up, or reset password. Once logged in, users can select and map out their schedules, with the option to customize the length of their degrees.  

## Inital setup

**Prerequisites NodeJS LTS v18.14.0**

1. Install nvm on your machine
2. run `nvm install v18.14.0`
3. run `nvm use`
4. Run `npm install` in the working directory to install required packages
5. Reference `.env.example` and create your own `.env` file
6. Run `npm run start` to start the server on localhost

## Documentation

- [**Figma Design**](https://www.figma.com/design/tE7rmQU9n1LsovKoRfqZrl/CS-35L-Website?node-id=1-2&t=FBo3HW8tr1RIha2u-1)

### File Structure and Naming Convention Used

```
src/
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

## Screenshots

_[Placeholder]_
