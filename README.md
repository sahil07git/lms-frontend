# LMS Frontend

### Setup instruction

1. Clone the repository
```
    git clone https://github.com/sahil07git/lms-frontend.git
```

2. Move into the directory

```
cd lms-frontend
```
3. Install the dependencies
```
npm i
```

4. run the server
```
npm run dev
```

### Setup instructions for tailwind
[Tail wind official instruction doc](https://v3.tailwindcss.com/docs/installation)

1. Install tailwind

```
npm install -D tailwindcss@3
```
2. Create tailwind config file

```
npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
"./src/**/*.{html,js,ts,jsx,tsx}"
```

4. Add the tailwind directives at the top of the index.css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Adding plugins and dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```