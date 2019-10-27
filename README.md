<p align="center">
  <img src="https://raw.githubusercontent.com/simplegoals/simplegoals/master/logo.png" alt="SimpleGoals: Beautiful and Easy-to-Use Achievements" width="40%">
</p>

<p align="center">Motivate your users with pleasant and easy-to-use achievements.</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/simplegoals/simplegoals/master/demo.gif" alt="SimpleGoals: Beautiful and Easy-to-Use Achievements">
</p>

<p align="center"><b>A rettier version of this documentation is available at <a href="https://simplegoals.co">simplegoals.co</a></b></p>

**SimpleGoals** allows you to quickly and easily create achievements your users can accomplish — add intriguing game elements to your website.

And even more: **CloudStorage** allows you to keep users' achievements persistent across different browsers and devices. It only takes a couple of minutes to add new options to get everything ready.

- [How it works?](#how-it-works)
- [Installation](#installation)
  - [CDN (Easiest)](#cdn-easiest)
  - [Download files](#download-files)
  - [Webpack or Browserify (Advanced)](#webpack-or-browserify-advanced)
- [Usage](#usage)
  - [Initializing](#initializing)
  - [Unlock achievements](#unlock-achievements)
  - [Show all achievements](#show-all-achievements)
  - [Options](#options)
- [CloudStorage](#cloudstorage)
- [Development](#development)
- [License](#license)

# How it works?

- Create a list of goals your users can achieve. 🏆
- Decide when each achievement is unlocked (e.g. on a button click, or when a special page was opened) ⏰
- Add a small JS snippet to your website. 👩‍💻
- Tada! 🎉

# Installation

There are several ways to get started with SimpleGoals. You can use:

### CDN (Easiest)
Just add this line to HTML code it before the closing `</body>` element.
```html
<script type="text/javascript" src="https://static.simplegoals.co/0.2.0/simplegoals-styles-included.min.js"></script>
```
And you're ready to use SimpleGoals!

If you're going to update styles of SimpleGoals, you might want to load JS and styles separately:
```html
// Before closing </head> element
<link rel="stylesheet" href="https://static.simplegoals.co/0.2.0/simplegoals.min.css">
// Before closing </body> element
<script type="text/javascript" src="https://static.simplegoals.co/0.2.0/simplegoals.min.js"></script>
```

### Download files
You can download SimpleGoals files from https://static.simplegoals.co/0.2.0/simplegoals.zip and add them to your project directory

Then load them in HTML:
```html
// Before closing </head> element
<link rel="stylesheet" href="simplegoals.min.css">
// Before closing </body> element
<script type="text/javascript" src="simplegoals.min.js"></script>
```

### Webpack or Browserify (Advanced option)

Add package:
```shell
// With npm
npm install simplegoals --save

// With yarn
yarn add simplegoals
```

Load SimpleGoals in your JS code
```js
// Webpack
import 'simplegoals/dist/simplegoals.min.css'
import SimpleGoals from 'simplegoals';

// Browserify
require 'simplegoals/dist/simplegoals.min.css'
var SimpleGoals = require('simplegoals');
```

# Usage

Using SimpleGoals is fast and easy!

## Initializing

To use SimpleGoals you need to initialize it:
```js
// Define a list of all available goals (Example)
var goals = {
  explorer: {
    name: "Curious Explorer",
    description: "Scroll through half of the page"
  },
  secret: {
    name: "Lucky Digger",
    description: "Find a secret button"
  }
}

// Initialize SimpleGoals when a page is loaded
window.addEventListener('load', function() {
  SimpleGoals.init({
    goals: goals
  })
});
```
You can check out all available options in the [Options](#options) section

## Unlock achievements

There are two ways to unlock goals.
 - You can add `data-simplegoals-unlock="key_of_goal"` attribute to any button. When a user clicks this button, the goals will be unlocked and achievement will appear.
 ```html
 <a data-simplegoals-unlock="secret" href="#">I'm a secret button</a>
 ```
 - You can call `SimpleGoals.unlock("key_of_goal")` method at any time.
```js
SimpleGoals.unlock("explorer")
```
Example:
 ```js
 // Scroll through half of the page
 if (document.body.scrollTop > document.body.scrollHeight / 2) {
   SimpleGoals.unlock("explorer")
 }
 ```
 Each goal can be unlocked and shown only once.

 ## Show all achievements

There are also two ways to show all achievements.
 - You can add `data-simplegoals-overview="true"` attribute to any button. When user click this button, the list of all achievements will be shown. Example:
 ```html
 <a data-simplegoals-overview="true" href="#">Show all achievements</a>
 ```
 - You can call `SimpleGoals.showOverview()` method at any time.
 ```js
 SimpleGoals.showOverview()
 ```
 Example:
 ```js
 // Scroll through half of the page
 if (document.body.scrollTop > document.body.scrollHeight / 2) {
   SimpleGoals.showOverview()
 }
 ```

## Options


Option | Default | Description
-----|---------|------------
**`goals`** | `[]` |  an `Object` with all possible goals. Each key is a key of the goal and each value should be an `Object` with `name` and `description`
**`useCloudStorage`** | `false` | If `true`, **[CloudStorage](#CloudStorage)** will be used and goals for users will be saved in the cloud and will be persistent across all browser sessions and devices of the user. If `false`, `LocalStorage` will be used. All data will be saved in the user's browser and will be not synced. If a user clears local storage or use another browser, all achievements will be lost.
**`onGoalUnlock`**  | `function(goalKey){}` | This is callback method that will be called, when a goal will be unlocked. It takes a goal's `key` as a param. You can use this callback method to add custom logging or some API calls.
**`freshStart`** | `false` | When `true` resets all goals every time a user refreshes or opens a new page. Works only when `useCloudStorage` is `false`.
**`timeout`** | `0` | This options sets the time(in milliseconds) between achievement appears and automatically disappears. If it is set to `0`, achievements will be not hidden automatically.
**`appId`** | `null` | Used only when **[CloudStorage](#CloudStorage)** is enabled. You can get your `appId` here: **https://api.simplegoals.co/projects/new**
**`user`** | `null` | Used only when **[CloudStorage](#CloudStorage)** is enabled. Used to determine user in CloudStorage. Object with `uid`, `email`, and `name`. Either `uid` or `email` should be present.

Full example:
```js
SimpleGoals.init({
  goals: goals,
  onGoalUnlock: function(goalKey){ console.log(goalKey) },
  timeout: 10000,
  useCloudStorage: true,
  appId: "f072c862-4f88-4be9-a86e-521e4a282e68",
  user: {
    uid: "magician#3123936",
    email: "harry@hogwarts.com",
    name: "Harry Potter"=
  }
})
```

# CloudStorage

CloudStorage allows you to keep users' achievements persistent across different browsers and devices. It only takes a couple of minutes to add new options to get everything ready.

There are two little steps you need to do:
 - Go to **https://api.simplegoals.co/projects/new** and get an **appId** that you can use. It's might be useful to get new **appId** for each of your environments: test, staging, production and so on.
 - Add new options to `SimpleGoals.init()` call:
 ```js
 SimpleGoals.init({
  goals: goals,
  useCloudStorage: true, // Required for CloudStorage
  appId: "yourAppId", // appId that you just got
  user: { // Information about User
    uid: "magician#3123936", // Optional, but either UID or email should be present
    email: "harry@hogwarts.com", // Optional, but either UID or email should be present
    name: "Harry Potter" // Optional
  }
})
 ```
UID is any unique identifier for a user.

Either UID or email should be present for user params.

*Note: It works only for logged in users*

*Note: When users first time converts from a guest to a logged in user, all their achievements are saved in CloudStorage*

# Development

First of all, thank you for making SimpleGoals better!

All source files are in `src` folder.

To install all dependecies run:
```shell
npm install
// or
yarn install
```

To run local environment run:
```shell
npm run playground
// or
yarn playground
```
Playground will be available at `http://localhost:8080`

To build production-ready bundle run:
```shell
npm run build
// or
yarn build
```

# License
This project is licensed under [MIT license](https://opensource.org/licenses/MIT).
