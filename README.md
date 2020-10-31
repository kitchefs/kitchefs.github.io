<p align="center"><img src="https://i.ibb.co/HV7kmGs/Kitchefs.png" alt="Kitchefs"></p>

***

A new and improved Kitchefs website written in Svelte and Sapper.

## About

Kitchefs is a free online cookbook with human verified recipes and no ads. Kitchefs will always remain free.

## Screenshots

### Dark Theme

<img src="https://i.ibb.co/mGW7ChL/image.png" alt="dark-theme">

### Light Theme

<img src="https://i.ibb.co/yWH0DT5/image.png" alt="light-theme">

## Development

### Building for Development

Run this on your local machine to test new code.

```
git clone https://github.com/Kitchefs/beta.git
cd beta
npm install
npm run dev
```

### Building for Production

Make sure you run this before you `git push`, exports the Svelte to HTML.

```
git clone https://github.com/Kitchefs/beta.git
cd beta
npm install
npm run export
```

### Adding New Recipes

Edit the `./src/routes/recipes/_recipes.js` file and add the required information.

### Changing Features Recipes

Edit the `./src/routes/recipes/_featured_recipes.js` file and add the required information.

