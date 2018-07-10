# POKE EXPRESS

![eh](http://digitalspyuk.cdnds.net/16/08/980x490/landscape-1456483171-pokemon2.jpg)

Make a Pokemon app that displays data inside server-side rendered views.

## App

User Stories
- When a user goes to the '/pokemon' route they will see an `index` of pokemon: the names of each pokemon rendered to the page.
- When a user clicks on the name of the pokemon, they will be taken to that pokemon's `show` page, and will see the pokemon's name and image.


### Structure


**In terminal:**
- create your homework directory structure as follows:
  - `mkdir pokemon_app`
  - `cd pokemon_app`
  - `mkdir views`
  - `touch views/index.ejs`
  - `touch views/show.ejs`
  - `mkdir models`
  - `touch models/pokemon.js`
  - `touch server.js`
  - `npm init`
    - follow `npm init` prompts
    - Does npm init create a file? If it does, where does it create the file? What is the name of the file?
  - `subl .` (Sierra: open the whole folder structure from the file->open menu)
- <details><summary>Approximate File Structure</summary>

  ![file structure image](https://i.imgur.com/mWMUygj.png)
  
  **IMPORTANT! This image is a rough outline for you to double check which main folders should be nested or on the same level. This is not an exact replica of what you should have
  **

</details>


<hr>
&#x1F534; The commit message should read: <br>
"Commit 1 - All my files are created"
<hr>

### Install NPM Packages

**In terminal:**
- Make sure that you are on the same directory level as your `package.json` (why?)
- `npm install express ejs` (installing multiple packages at once)
- check your `package.json`
- <details><summary>package.json screenshot (note that package version numbers may be different)</summary>

  ![package.json image](https://i.imgur.com/JiEa7M2.png)

</details>

<hr>
&#x1F534; The commit message should read: <br>
"Commit 2 - All my npm packages are added"
<hr>


### Set up your server

- in `server.js` set up your server
 - require express
 - set `express()` to a variable
 - set a variable of `PORT` to `3000`
 - set your app to listen to the port and include a console log, so that you can tell when your server is running
 - include a get route `/` that will `res.send('Welcome to the Pokemon App!');`
So that when you got to `localhost:3000`, you will see `Welcome to the Pokemon App!`
- **In terminal**
  - `nodemon` or `nodemon server.js` (if you set your up your `package.json` to start `server.js` you don't need to put it after `nodemon`)
  - **GOTCHA!** : nodemon will only work if you run it from the same location as your `package.json`
- **In the browser**
 - go to `localhost:3000`
 - check that you have your `Welcome to the Pokemon App!` message displaying

<hr>
 &#x1F534; The commit message should read: <br>
 "Commit 3 - My server is set up and running"
<hr>



### Set up your _'database'_
- You have created a file called `pokemon.js`
- Inside of this file, put the following array of pokemon objects. This is your 'database' for tonight's homework

```
const pokemon = [ {name: "Bulbasaur", img: "http://img.pokemondb.net/artwork/bulbasaur.jpg"},
				{name: "Ivysaur", img: "http://img.pokemondb.net/artwork/ivysaur.jpg"},
				{name: "Venusaur", img: "http://img.pokemondb.net/artwork/venusaur.jpg"},
				{name: "Charmander", img: "http://img.pokemondb.net/artwork/charmander.jpg"},
				{name: "Charizard", img: "http://img.pokemondb.net/artwork/charizard.jpg"},
				{name: "Squirtle", img: "http://img.pokemondb.net/artwork/squirtle.jpg"},
				{name: "Wartortle", img: "http://img.pokemondb.net/artwork/wartortle.jpg"}
			  ];

```
- Set up your 'database' so that it can be exported to your `server.js` and then be required by your `server.js`
- set this 'database' to a variable callled `pokemon` in your `server.js` file
- create a get route `/pokemon` that will `res.send(pokemon)`, which will display your pokemon data as json in the browser

<hr>
&#x1F534; The commit message should read: <br>
"Commit 4 - Connected my database, can see json in the browser"
<hr>

### Set up your index view

- Instead of displaying json at your `/pokemon` route, you should serve the `index.ejs` file you created that will display your pokemon
- You will have to set up your ejs file
  - Start with your html boilerplate code
  - Add an `<h1>` that describes this page, i.e. 'See All The Pokemon!'
  - Add a `<style>` tag so you can write some CSS directly in your html file. [More info](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) - In the Hungry for More section - you can work on properly linking a CSS file. 
  - Add a background-color and text color to the body, inside your `<style>` tag to be sure it is working as expected. Example:

```html
<style type="text/css">
body {
  color: blanchedalmond;
  background-color: steelblue;
}
</style>
```

  **OR** : Maybe look up how to add static assets! (which is css, or clientside js)
  
  - **Stretch step, not required** : Choose a google font and add it to your html and inside your `<style>` tag
  - Change your `/pokemon` route to `res.render` your `index.ejs` file
  - In your browser, go to `localhost:3000/pokemon` and be sure to see your `index.ejs` view with h1 tag

<hr>
  &#x1F534; The commit message should read: <br>
  "Commit 5 - index.ejs view rendered at pokemon route"
<hr>

### Set up your index view to show your pokemon data
- continue working on your `index.ejs` view so that you can see:
  - the name of each pokemon, as a list item, inside an unordered list
  - this list should be dynamically rendered by ejs based on your data from your 'database'

<hr>
    &#x1F534; The commit message should read: <br>
    "Commit 6 - I can view a list of all my pokemon in the browser "
<hr>

### Set up your show route

- Inside your `server.js`, add a new get route `/pokemon/:id`
- That will `res.send(req.params.id);`
- So, when you go to `localhost:3000/pokemon/whatever`
 - `whatever` will show up in the browser

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 7 - show view shows req.params.id "
<hr>


### Link your `index.ejs` to your `show.ejs`
 - inside your `index.ejs`,
 - for each pokemon, add an `<a>` tag that will have an `href` that goes to the route `/pokemon/x`, where x is the array position of the `pokemon` in the data array. This should be set dynamically with ejs
 - when you click the link you should go to your show route and the index number corresponding to the pokemon's array position should be displayed

<hr>
   &#x1F534; The commit message should read: <br>
   "Commit 8 - added dynamic anchor tags to index.ejs "
<hr>

### Render your individual pokemon in the show view
- copy/paste your code from your `index.ejs`  into your `show.ejs` (surely, there must be a better way; are you wondering if there is something in the hungry for more section about this?)
- change all your html code inside your `show.ejs` file's `<body>` so that 
	- your h1 tag says "Gotta Catch 'Em All"
	- add an h2 tag that will display the name of the pokemon
	- add an image tag that will display an image of the pokemon
	- add an anchor tag with the text of `back`, that will take you back to your `index.ejs` view
- update the route in the server.js to render the show view with the pokemon data

<hr>
  &#x1F534; The commit message should read: <br>
  "Commit 9 - created show views of each pokemon "
<hr>

## Style your app... 

### Style your app, step 1: static

 - Set up your app to be able to use CSS like we did in class.  Use a dummy (i.e. just set a background color) CSS declaration.  Remember: you need express.static() middleware. (also remember that you don't need to npm install anything for this particular middleware because its part of express. But for others you do.)

<hr>
&#x1F534; The commit message should read: <br>
  "Commit 10 - set up serving of static files so we can add CSS"
<hr>

### Style your app, 

<hr>
&#x1F534; The commit message should read: <br>
  "Commit 11 - The app is styled"
<hr>



## You finished!  Nice work. Submit your homework

## Hungry for more?

1. Style your application with flexbox, or [Bootstrap!](https://getbootstrap.com/docs/4.1/getting-started/introduction/), a CSS library created by Twitter to make using the [960px grid system](https://960.gs/demo.html) a little easier. Or there's a substantially more lightweight 960px-grid-system-based answer to Bootstrap called [Skeleton](http://getskeleton.com/). You could also jazz up your app by adding some hand-rolled flourishes with CSS animations, and/or some sweet jQuery and/or ....??? u pick???.....!

2. Learn more about Pseudo Selectors to become a CSS Genius
    - [pseudo selector links](https://www.youtube.com/watch?v=YMZGPqNDn_s&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=17) ~ 5 minutes
    - [pseudo selector children](https://www.youtube.com/watch?v=tMCahu7H-fA&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=18) ~ 4 minutes
    - [pseudo selector n-th child](https://www.youtube.com/watch?v=yFmwjX9oGt8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=19) ~ 3 minutes
    - [pseudo selector sibling status and `not()`](https://www.youtube.com/watch?v=XyXUjEP9m-8&list=PLdnONIhPScST0Vy4LrIZiYKpFNoxgyH7J&index=20) ~ 5 minutes
    - a little glitchy, but [See just how deeply nerdy some people get about CSS](https://css-tricks.com/roman-empire-made-pure-css-connect-4-possible/)

3. Sign up for [Code Wars](https://www.codewars.com/) and/or [HackerRank](https://www.hackerrank.com/) and/or [Project Euler](https://projecteuler.net/) and try out a challenge (or a few!) in order to keep honing your JavaScript skills!

