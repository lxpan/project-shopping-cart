# project-shopping-cart

A simple frontend that feature a watch shop and a shopping cart.

![My Image](screenshot.png)

# Description

With a design that embraces mountain and nature themes of Seiko's Alpinist collection, this project presents these watches with their nature themed environments as the backdrop. Users are greeted immediately on the homepage with the sight of majestic sceneries.

## What it does

This project implements a frontend in React that allows users to browse existing shop items, add those items to a shopping cart, and view the totalled amounts.

## Technologies used

-   React

## Challenges faced

### The shopping cart

The primary challenge faced involved animating the "slide in" animation of the shopping cart. The process of creating the animation required the use of both CSS and JavaScript. In a nut shell, the solution is similar to how many modals are created (define your container, set initial dimensions to 0 to hide it, then display it later using JavaScript).

The process is as follows:

Step 1: Within CSS, create a class that adds a transition effect for the shopping cart modal. This class, called `sidenav` will have a transition effect, a particular height (100% in this case) and width (initialised to 0). Later in JavaScript, the width will be toggled to its full size.

Step 2: In JavaScript, add an event listener that changes `sidenav` width to upon clicking on the shopping cart icon. The effect of changing the width together with the `transition` property is what creates the "slide in" effect.

## Future considerations

As this project is implemented within the frontend, future possibilities include integrating a backend that could hold various product details, purchases and thus bringing in functionality as a "full-stack" application.

# How to install & run the project

NB: this app requires that `npm` (Node Package Manager) is installed on your system.

To run this app locally:

1. Clone the repo to your local machine
2. Navigate to the directory: `cd memory-game`
3. Run `npm install` to install the node packages
4. Run `npm start` to run the web server locally

Alternatively, visit the app hosted on [GitHub Pages](https://lxpan.github.io/project-shopping-cart/).

# Attribution

Full attributions are given in the "About" section in the app.

All product images are used under Fair Use for educational purposes.
