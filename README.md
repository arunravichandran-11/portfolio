ReactJS: Framework or UI library you call has been used for this web application.

react-router-dom - For client Side Routing:

I had a bit confusion between using BrowserRouter or HashRouter of react-router-dom. Infact, I was switching between both and tried both and finally came up with only one - BrowserRouter. It is purely based on the need. There is no Isomorphic application (server side rendering) I have planned here for. Only Client side, so using the browser router, we configure one route, ie.,

`<domain>/me/projects` - On refresh or directly copy paste the URL to new tab, it throws 404 error. Few devs would have faced this issue. I did too.
Reason: The browser requests the server for the specified request, the server does not hold projects route/path because, it is react router's route which is client side. Our server knows only <domain>/ - level and serves our index.html file because our dist/ folder which is served from the server has not project or me folder to be served.

Note: Our dist folder is what we serve from the server when requesting the domain.

when refresh , the request handler first goes to the server and see the path, which is not available, so we get 404, but when clicking the <Link> of router-dom plugin, the react takes control and so the navigation works.

To solve this, I was using hash router, so everytime, the request will go to the browser for <domain>/ <- path and so our server sends index.html file and rest of the route after the # in url will be taken care by react-router-dom and we see no issues in refresh or page navigation.

Again, there is another option of Catch all technique, we can server index.html for all request <domain>/\*, in this way, whatever the url you give after domain, the server is going to send you the index html file and after that, react router dom is gonna take control. To achieve this, we can configure our build , telling the webpack to using publicPath and historyFallBackApi - which is basically `window.history` object of the browser.

**Note**

I know the above notes sounds clumsy, been working on it to re-write it for the fresher of web development to understand. I will update soon.

## Other Plugins User:

1. chart.js - In the skills section, the pie chart, bar chart representation things are implemented for which I have used react-chartjs-2 plugin which is developed using chart.js behind the hood.

2. react-awesome-slider - In the project section, the carousel slider for moving left and right of the projects are used or acheived using this plugin.

3. @fortawesome - It's a fontawesome library for bring icons and font's of FontAwesome along with react fontawesome library. Main benifit of this, we do not have to include all icons that we use, we can require the needed one.
   Refer - src/fonts/font-exporter.js file.

4. html2pdf - As names says, it helps to convert our html code to pdf which I have used to download the resume(in pdf format) from the about-me page.
