1. Use npm to install all the dependies required in the project 

2. The project can be cloned from my Github using git clone.

3. Installed tailwind using Tailwind website and follow the steps.


     1. Install Tailwind CSS
        npm install -D tailwindcss
        npx tailwindcss init

    2. Configure your template paths
         Add the paths to all of your template files in your tailwind.config.js file.

        /** @type {import('tailwindcss').Config} */
            module.exports = {
            content: [
                "./src/**/*.{js,jsx,ts,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
            }    


     3. add the tailwind directives in index.css file.
        @tailwind base;
        @tailwind components;
        @tailwind utilities;                   


4. The values used in the code for from process.env should be set up by the user and saved in a .env file


5. 
###


