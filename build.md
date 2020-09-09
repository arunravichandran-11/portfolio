# Production Optimization Explanation:

### Build optimization

Building the FE application on a simple term , I would like to mention as follows:

    * Our codebase will have multiple `.js` files which has our business logic porgrams (example this codebase has more than 15 files).
    * Now the question is,
        - Are we going to serve all 15 files from the server when we hit my website ?
        - Are we going to show all our code to the users if they try to inspect the page ?
        - We see 1 page in UI for which we have written some ~1000 lines of code. Another 10 pages with each ~1000 lines, do we now need to download all 1000*10 lines when we just see 1 page ?
        **Note** Download - hope you know when we hit a website url in browser, the browser sends request to server and download the files needed for the page.

    * Some answers for the questions could be:
        - bundling (pack the content of all 15 files into 1 file - so it is 1 request to the browser)
        - minifying and uglifying (assuming the file has empty space, tab space, unused variables, redundancy of same code and all in a meaningfull method/function or variable names). Now we can remove the unwanted spaces to reduce the number of lines and file size. We can uglify the code, so that, it's not easily inerrupted by human.
        - lazy-loading - we can load the bundle file needed for the current page the user is viewing. [Route or URL level lazy loading]

Now, for building the app, we have tools and plugins like webpack, grunt, gulp, rollup.js. Of which, I have used webpack for this codebase.

Usage of Webpack in short - create a configuration file (.js file) and run it through webpack or webpack-dev-server after installing them. I am not going to mention things about webpack and its details in here. Let me jump into the configuration.
(Refer: webpack link);

webpack.config.js - file that webpack development server looks and start it's work(hope you know what webpack does by now).
webpack-prod.config.js - confg file reference for webpack production mode where all bundling , file size reduction things required.

Information:
``
In webpack 4, the bundle-level minification & uglification is enabled automatically – in the production mode and without the need of additional plugin. It uses the UglifyJS minifier under the hood. (If you ever need to disable minification, just use the development mode or pass false to the optimization.minimize option.)

In webpack 3, you need to use the UglifyJS plugin directly. The plugin comes bundled with webpack; to enable it, add it to the plugins section of the config:
``

### CSS optimization:

## Extract css & Minification:

a) MiniCssExtractPlugin - It extracts the css from js and also minifies as name says.
MiniCssExtractPlugin - Configure it in your webpack file in both the places , 1. under module property of your config object and 2. plugins property also. -> otherwise won't work.

b) OptimizeCssAssetsPlugin = It adds optimisation to MiniCssExtractPlugin plugin by removing the duplicate css in any of the `.scss` files. MiniCssExtractPlugin will not remove the duplication but this one does.

You might have noticed me using .scss file. Well ofcourse we can download and run only css file in browser, not scss, I know. Well, webpack has loaders to run and convert scss -> css file. I have used sass-loader,css-loader and style-loader in convert scss->css, to deal with css in js (you might notice in all js files, we will import css file).

### fonts optimization:

- file-loader plugin is used to deal with fonts using in this application - fonts - .woff, .woff2, .ttf, .eot files.

### html-optimization:

- The plugin loads the html file that we can give as an input or it creates one if we configure it in the plugins object of webpack configuration.
  Purpose:
  This includes/injects all your webpack bundles(js and css) inside the body tag using script tags. So that now, your browser knows the needed html, css and js files.

### Image optimization:

Normal file-loader - does not optimize the images, it just copy-paste the images in a specified path(from and to) and it also attaches or injects the new output path of the image with the html and css file where they are used.

`image-webpack-loader` - is the plugin we use to reduce the size of the jpg|png|jpeg files.

Alos ImageminPlugin - as name says, it minifies or in other words, it compresses the image and reduce the file size.
Configuration is need in both plugin and module object of webpack.

### Script/JS optimization:

babel-loader - to convert ES6 to ES5 since browser can not understand all the latest Javascript Syntax[eg: Arrow function].

Key Notes:
Optimization: minimize - true - when you set minimize, the js file will be minified. But if you set minimizer along with minimize, the minification will not happen. It has to be told manually.

- minimize reduced my file size from 878KB to 245KB

TerserPlugin (https://www.npmjs.com/package/terser-webpack-plugin):

- Adding TerserPlugin - reduced the code 245 to 244KB. It provides various option whil minifying & uglifies the code

## babel-plugin-react-css-modules

- Consider this later for reducing the bundle css size still smaller - obfuscate CSS .

Metrics:

Default optimization chunk all (a webpack configuration object's property) - split only the bundle file... like...

# Before this optimization & Terser:

1. main.js - 244KB
2. main.css - 12KB

# After:

1. main.js - 17KB
2. vendor.js - 230KB
3. main.css - 4kB
4. vendor.css - 8KB

Next important thing is code splitting for the bigger enterprise application:

## code splitting:

Route based code splitting is used here using react's suspend and lazy component. (no event/action based code splitting).

### Route Based code split:

use import('<path>') - instead of import \* from;

Refer: https://develoger.com/how-to-obfuscate-css-class-names-with-react-and-webpack-20e2b5c49cda

npmjs.com/package/babel-plugin-react-css-modules

mainly - https://blog.logrocket.com/the-complete-best-practices-for-minifying-css/

In resolve property of config, you could notice, alias property which helps us to avoid the nested path.
Eg: In src/modules/about/about.js - you might see,

    import IconComponent from '@fonts-exporter/font-exporter'; - this line:

@fonts-exporter - an alias name for the 'src/fonts' folder. If not this, we have to write the above line as,

    import IconComponent from '../../font/font-exporter';

This will be helpful when you get more nested folders and files as your application grows.
