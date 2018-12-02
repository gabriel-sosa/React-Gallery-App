# React Gallery App
## **Grade:** :heavy_check_mark: Exceeds Expectations
### **Premise** 
>For this project, you'll use the very popular and in-demand React library to create an image gallery app. With the help of this powerful "MVC" (Model, View, Controller) library, the app will be built in the style of modern single page applications to keep it fast, modular, and in sync with current web development trends.

>You'll learn about some of the best practices of working with React, like using JSX to write markup-like syntax directly in your JS files and managing state in a container component that passes data down to reusable stateless components. Additionally, you'll get practice working with React supportive tools like the Create React App and React Router modules.

>Using the powerful Create React App tool, you'll set up the initial project.

>Then you will:

 - >Use JavaScript and JSX to build out the gallery components in a modular fashion.
 - >Use React Router to set up routes for three default topic pages and a search page.
 - >Use the Fetch API or a tool like Axios to fetch data from the Flickr API and use it to display images in your app.
 - >Add logic to handle the search and various requirements of the project.
 - >Add to the supplied CSS to personalize the project.
### **Project Instructions**
1. Create your project
   - #### Reviewer Comments:
   - > Great, the project runs! You've successfully used create-react-app, which makes using react a lot easier to set up!
2. Build your app components
   - #### Reviewer Comments:
   - > Great, you split up the app into several different components! Splitting the app into components to manage and display your state makes it a lot easier to reason about, expand upon, and debug your app.
3. Get a Flickr API key
4. Routes
   - Include a "Search" link that includes a search field to let users search for photos.
   - Clicking a nav link should navigate the user to the correct route, displaying the appropriate info.
   - The current route should be reflected in the URL.
   - Your app should display at least 3 default topic links that return a list of photos matching some criteria. For example: sunsets, waterfalls and rainbows.
5. Requesting the data
   - Fetch the data from the Flickr API using the Fetch API or a tool like Axios.
   - Make sure data fetching and state is managed by a higher-level “container” component, like src/App.js.
6. Search
   - Be sure to include a search field feature and a search route to search for new categories of images.
7. Displaying the data
   - Make sure each image gets a unique "key" prop.
   - There should be no console warnings regarding unique "key" props.
   - The title of each page displaying images should be dynamically provided via "props".
   - The current route should be reflected in the URL.
   - #### Reviewer Comments:
   - > Great work, I'm not finding any errors, and React is having no problems telling your images apart!
8. CSS styles
   - The mockups are just a general guide for how the elements should be arranged and positioned on the page.
   - #### Reviewer Comments:
   - > Great! You've supplied the provided CSS to the app and the important aspects of the app match the mockups.
9. Add good code comments
10. Cross-Browser consistency
### Extra Credit
1. Add a loading indicator that displays each time the app fetches new data. Since the data for the three main topic pages can be requested when the page first loads, it's okay if the loading indicator is only present on the search route.
   - #### Reviewer Comments:
   - > Excellent job handling your data and adding a cool loading indicator. That's a great feature to add.
2. If no matches are found by the search, display a friendly user message to tell the user there are no matches.
   - #### Reviewer Comments:
   - > Excellent job implementing the search functionality and adding a message to indicate no matches.
3. Include a 404-like error route that displays a friendly 404 error page when a URL does not match an existing route.
   - #### Reviewer Comments:
   - > Awesome work handling your routes like a pro and including a cool 404 error for not found links.
### Overall Comments
> Great work.

> Some code structure. It's very easy to follow.

> There are a couple of things to change to bring the project in line with best practices.

> Files containing JSX should use the .jsx file extension. You should be using named functions instead of anonymous functions for your components. Component file names should be uppercase and matching the name of the Component class or function.

> Everything else is great!
