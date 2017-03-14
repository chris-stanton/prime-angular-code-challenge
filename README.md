# Angular Solo Code Challenge

Fork, clone, and run `npm install` to get started.

## Dependencies included in package.json

* angular
* angular-route
* body-parser
* bootstrap
* express
* pg

## Database Structure

Run the sql in `database.sql`.

## Server API Endpoints

* `GET /heroes` : returns all heroes and associated power data.
* `POST /heroes` : create a new hero in the database. Duplicates are not allowed. Only one power per hero can be stored.
* `DELETE /heroes/:id` : deletes the specified hero.
* `PUT /heroes/:id` : updates a given hero. **Incomplete (requires testing)**
* `GET /powers` : returns all super power names and descriptions.

**Status of 500 is returned on all server errors.**


--------------------------------------------------------------------------------------------------


Assessment Details from the Assignment Web-App:


Assignment Details:
https://github.com/kdszafranski/prime-angular-code-challenge/

Instructions:
This assessment is intended to see how you are progressing with Angular, SQL, Node, and Express. It is open-notes and open-book. No talking is allowed for the duration.

Once you are complete, check your work into a new repo and post it on GitHub. Submit this link with your assignment.

A friendly reminder that this is simply a way for us to see how you are individually doing with the technology. If this is no problem, great. If you are struggling with it, get done what you can and still submit. This assessment is not an indicator of how you will perform post Prime or a measure of overall success thus far. It just gives us an idea of where you are at.

Just relax and show us what you know!

Thanks and good luck!

You Rock!

Your Hero Tracker
The Department of Emerging Superhero Knowledge needs an application to help track super hero aliases and their powers. They have already built out a Postgres database and a Node/Express server API. It is your job to build them an Angular front end application to connect to this API.

See the Readme on the attached repo for database and server API information.

Routes:
Your application should have two client-side routes: each with a view, template, and controller.

Client-Side Route 1: Hero Listing & Removal

This should show a list of all heroes in the system, displaying all the information from the entry captured in the view before. Each hero in the listing needs to be able to be deleted from the system in the event of their unfortunate demise. Note that the GET /heroes and DELETE /heroes routes are already built for you.

Client-Side Route 2: Hero Entry

Build a form to enter new heroes into the system. Note that the server-side POST /heroes route is already built for you.


Required fields:
persona : this is the hero's super hero name. It must be unique.
alias : this is the hero's true name, if known.
power_id : this is the hero's main super power as chosen from a list of possible powers. The power_id can just be a number input for base mode (pro mode upgrades this to a dropdown select). This power_id must match an id in the super_powers table. Not ideal because the user will have to guess the id for the power, but good enough for now.

HARD Mode:
Improve our Listing route to include the ability for the Hero information to be edited (but not the list of powers). The server has an endpoint for updating a hero but it is untested. Have a look and change what you need.

PRO Mode:
The power should be selectable from a drop-down list. This power_id must match an id in the super_powers table.

ULTRA-PRO Mode
Move $http requests into factories.
