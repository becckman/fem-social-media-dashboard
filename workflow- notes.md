1.  Write down notes for the project and research what you don't know and might need for the project. 
    Add references to the solutions so you can get to them quickly when you begin.

2.  Download design files, and set up git rep.

3.  Set up sass architecture.
    - 3 folders: util, globals and components
    - 1 main.scss file. Import partial sass files with @use "~name~"

    util: (we do not import this into the main.scss as it does not write any css. It contains mixins etc. that can be used without writing any css.)
        _index.scss (we forward all files into here)
        breakpoints - functions to determine media queries, not necessary in small projects but makes the project scalable.
        functions - functions that might be necessary in the project, example: rem();
    
    globals: 
        _index.scss (we forward all files into here)
        boilerplate - quick styling for universal, html and body selector. CSS resets etc. can go in here
        typography - this is where typography styling goes. Headers, paragraphs, anchortags etc.
        colors - set up css variables for all the colors that will be used
        fonts - download fonts and create font variables in this file if needed.

        [variables?] - contains all variables, including color and fonts... 

    components: 
        _index.scss
        card (example of component)
        toggle

    - to use the utils we need to import it where needed: @use "../util" as *; 

4.  Create a new folder called "dist" where our compiled css and javascript files goes

5.  Install gulp globally in terminal with "npm install gulp-cli -g"

6.  Create package.json file with "npm init -y" in terminal

7.  Install bunch of npm packages
    - "npm install @babel/core @babel/preset-env postcss autoprefixer browser-sync cssnano dart-sass gulp gulp-babel gulp-postcss gulp-sass gulp-terser"

8.  Create a new file : "gulpfile.js" where we will write our gulp       configuration. 

9.  Work from up to bottom of the graphics. Make use of the breakpoint mixins instantly instead of at the end. 


