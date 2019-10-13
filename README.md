
<p align="center">
  <img src="https://raw.githubusercontent.com/simplegoals/simplegoals/FirstREADME/logo.png" alt="SimpleGoals: Beautiful and Easy-to-Use Achievements" width="40%">
</p>

<p align="center">Engage your users with beautiful and easy-to-use achievements.</p>

<p align="center"><b>Prettier version of this documentation is available at <a href="https://simplegoals.co">simplegoals.co</a></b></p>

- [Introduction](#introduction)
- [Installation](#installation)
  - [Intall using CDN (The easiest option)](#intall-using-cdn-the-easiest-option)
  - [Install using npm or yarn)](#install-using-npm-or-yarn)
  - [Install using module loaders like Webpack or Browserify (Advanced option)](#install-using-module-loaders-like-webpack-or-browserify--advanced-option)
- [Usage](#usage)
  - [Initializing](#initializing)
  - [Unlock achievements](#unlock-achievements)
  - [Show all achievements](#show-all-achievements)
  - [Options](#options)
- [CloudStorage](#cloudstorage)
- [Development](#development)
- [License](#license)

# Introduction

# Installation

### Intall using CDN (The easiest option)
Just add this line to HTML code of pages where you want to use SimpleGoals
```html
<script type="text/javascript" src="https://static.simplegoals.co/simplegoals.min.js"></script>
```

### Install using npm or yarn
You can install SimpleGoals with npm or yarn:

Terminal:
```shell
// With npm
npm install simplegoals --save

// With yarn
yarn add simplegoals
```

HTML code of pages where you want to use SimpleGoals:
```html
<script type="text/javascript" src="simplegoals.js"></script>
```

### Install using module loaders like Webpack or Browserify  (Advanced option)

Terminal:
```shell
// With npm
npm install simplegoals --save

// With yarn
yarn add simplegoals
```

Load SimpleGoals in your JS code
```js
// Webpack
import SimpleGoals from 'simplegoals';

// Browserify
var SimpleGoals = require('simplegoals');
```

# Usage

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
    description: "Find secret button"
  }
}

// Initialize SimpleGoals
SimpleGoals.init({
  goals: goals
})
```
## Unlock achievements

There are two ways to unlock goals.
 - You can add `data-simplegoals-unlock="key_of_goal"` attribute to any button. When user click this button, the goals will be unlocked and achievement shown. Example:
 ```html
 <a data-simplegoals-unlock="secret" href="#">I'm a secret button</a>
 ```
 - You can call `SimpleGoals.unlock("key_of_goal")` method at any time. Example:
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
 - You can call `SimpleGoals.showOverview()` method at any time. Example:
 ```js
 // Scroll through half of the page
 if (document.body.scrollTop > document.body.scrollHeight / 2) {
   SimpleGoals.showOverview()
 }
 ```

## Options

You can use next options:
- **`goals`** - an `Object` with all possible goals. Each key is a key of the goal and each value should be an `Object` with `name` and `description`
- **`useCloudStorage`** - (Default: `false`) If `true`, **[CloudStorage](#CloudStorage)** will be used and goals for users will be saved in the cloud and will be persistent across all browser sessions and devices of the user. If `false`, `LocalStorage` will be used. All data will be saved in the user's browser and will be not synced. If a user clears local storage or use another browser, all achievements will be lost.
- **`timeout`** - (Default: `0`) This options sets the time(in milliseconds) between achievements will be shown and achievements will be automatically hidden. If it is set to `0`, achievements will be not hidden automatically.
- **`appId`** - (Default: `null`). Used only when **[CloudStorage](#CloudStorage)** is enabled. You can get your `appId` here: **https://api.simplegoals.co/projects/new**
- **`user`** - (Default: `null`). Used only when **[CloudStorage](#CloudStorage)** is enabled. Used to determine user in CloudStorage. Object with `uid`, `email` and `name`. Either `uid` or `email` should be present.

Full example:
```js
SimpleGoals.init({
  goals: goals, // Required, Object with all goals
  timeout: 10000, // Optional. 10 seconds in this case
  useCloudStorage: true, // Optional, using CloudStorage
  appId: "f072c862-4f88-4be9-a86e-521e4a282e68", // Optional, appId for CloudStorage, get it here: https://api.simplegoals.co/projects/new
  user: { // Optional, used to determine user in CloudStorage
    uid: "magician#3123936", // Optional, but either UID or email should be present
    email: "harry@hogwarts.com", // Optional, but either UID or email should be present
    name: "Harry Potter" // Optional
  }
})
```

# CloudStorage

CloudStorage allows you to keep users' achievements persistent across different browsers and devices. And it only takes couple of minutes to add new options and everything is ready.

*Note: It works only for logged in users*

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
