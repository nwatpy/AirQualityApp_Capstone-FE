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
* [] Update favorites
    * [] Button to refresh individual favorited items to pull in up to date aqi information [patch]
    * [] add date/time conditional to check against how old the aqi data is
* [X] Display AQI for list of favorites automatically/on landing on a page

## Stretch items - fill in as we are motivated
* [] Display AQI for list of favorites automatically/on landing on a page
* [X] Selecting return submits the search vs. refreshing the screen
* [] Deploy to cloud
* [] Get auth working for API calls
* [] Display list of recent searches
    * [] Create API to save every search that is performed
    * [] Create API to retrieve last 10 searches
    * [] Create component to display searches on load