# Project Overview


## Project Description

Mixer Assister is a web app using thecocktaildb.com api to allow a user to search for a specific cocktail, browse for cocktails by category or get a random drink suggestion. Results will contain instructions for making the drink and an image.

## Project Links

- [GitHub repo](https://git.generalassemb.ly/jamrod/mixer-assister)
- [Live page on Netlify](https://practical-babbage-bbcc33.netlify.com)

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- [wireframes for Mixer Assister](https://i.imgur.com/8UoHyuM.png?1)
- [react architecture]()



Define the the React components and the architectural design of your app.

### MVP/PostMVP - 5min

App component will just house the route component and links to the main page components, Header, Explainer, Search, Footer
Search Component has most of the logic and renders the search components and Details components, Name, Category, Details, Category Search, SearchResults and Drink Components.
Links are used from the SearcResults component to render the Drink component, and a Home Link will route back to the default Details component


#### MVP EXAMPLE
- Pull data from the API by a name search or random search
- Render the drink on the page with ingredients, directions and a pic
- Navigate to a final drink result when multiple drinks are returned

#### PostMVP EXAMPLE

- Add category search and render results, pull down final drink from API
- Add recents component with recent searches which will link back to results
- Add testing



## Time Frames


Component | Priority | Estimated Time | Time Spent | Actual |
| --- | :---: | :---: | :---: | :---: |
| Planning | 1 | 2hrs | 2hrs
| Build Basic Components | 1 | 3hr |
| Build Tests | 2 | 4 hr |
| Working with API | 1 | 4hr |
| Render Drink | 1 | 3hr |
| Complete MVP (CSS) | 2 | 3hr |
| Added search functionality | 3 | 2hr |
| Recents | 3 | 3hr |
| Animation | 4 | 4hr |
| Final Tweaks and Tests | 3 | 4hr |
| Video Presentation | 1 | 3hr | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

This is a sub route and a redirect to an optional component. I had to do it this way to pass a method through Router

```
<>
    <Route path="/category-search" render={props => <CategorySearch secondSearch = {this.secondSearch} results={this.state.resultsArray} />} />
    <Redirect push to="/category-search" />                        
</>
```

## Issues and Resolutions
-Couldn't send a method through a Link
    --Solved by using a sub route and passing the method through the route
-Got a lot of "cannot read property ... of null"
    --Usually an issue with the variable, missing this. or this.state or props.


#### SAMPLE.....
**ERROR**: Uncaught TypeError: Cannot read property 'includes' of null                               
**RESOLUTION**: Broke up code so variables were declared first then ran .includes
	So instead of “drink.drinkArr[i].includes(“string”)” 
this
		Const key = drinkArr[i]
		Const value = drink[key]
		key.includes(string)
