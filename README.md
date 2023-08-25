## AirQuality Capstone App

## Feature List
* [X] Working stubbed out front end and back end (stubbed/starter project)
* [X] Retrieve data from AirVisual API and Display based on location
    * [X] Browser location
    * [X] Typed location 
* [X] Save Favorite to the database
    * [X] Create API to save favorite [post]
    * [X] Create API to get all favorites
    * [X] Check if favorite already exists so you cant save a favorite twice [get]
* [X] Remove a favorite
    * [X] Create API to delete favorite (will build off the check for duplicates) [delete]
    * [X] Refactor main page to delete favorite when star is selected
* [X] Update favorites
    * [X] Button to refresh individual favorited items to pull in up to date aqi information [patch]
    * [X] add date/time conditional to check against how old the aqi data is

## Stretch items - fill in as we are motivated
* [X] Display AQI for list of favorites automatically/on landing on a page
* [X] Selecting return submits the search vs. refreshing the screen
* [] Get auth working for user log-in
    * [X] Implement Logged-In User functionality
        * [X] Guests (not logged in) no longer get access to favorites/database
            * [] Fix code so logged in users dont access each others favorites
* [] Deploy to cloud