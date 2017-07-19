# Weekend Challenge 5 - Angular, Mongo, Bootstrap Oh My

Welcome to weekend challenge 5! This weekend, you will take on the role of an application developer for a real estate company. You will be working with data that we will be providing to you. After importing the data (instructions below), you should have two collections, *listings* and *rentals*. Inside of your collections, you will find information for properties that are either "for rent" or "for sale".

You job, is to get this data onto the DOM. Use client side routing (`angular-route`) to display the rentals on a separate tab from the listings for purchase. For base mode, make your HTTP requests from your controllers. There should be two navigation buttons on the page allowing the user to switch between the two views. Additionally, let’s bring in Bootstrap to the mix to make sure that the application looks as good as possible.

## Project Requirements

- [ ] Create a Full Stack application from the ground up using Angular, Node, and MongoDB
- [ ] Work with the data set that we have provide for you
- [ ] Use Bootstrap to present the data
- [ ] Account for the different data ("rent" versus "cost") and ensure that this is noted on the display of the information, by listing "For Rent" or "For Sale" based on which of the two properties that it has.

## Importing the Provided Data File

There is no need to do any initial setup on the database. The following commands will create the **database**, **collections** and **documents** automatically! 

> NOTE: You should complete these steps during work time on Friday before you leave.

1. Download the *listingData.js* and *rentalData.js* files.
2. In Terminal, navigate to the folder where you downloaded the above file (or move it to where you want it).
3. Make sure mongo is running in a tab within termial
4. Run this command in your Terminal: `mongoimport --db realestate --collection rentals --file rentalData.js`
5. Run this command in your Terminal: `mongoimport --db realestate --collection listings --file listingData.js`
6. You may need to close and re-open Robo 3T in order for these to appear 

## Hard Mode
- [ ] Create an interface for adding additional rental or housing properties to the collection. You will need to give the user an option for either a Rent property, or a Sale property.

- [ ] Move your HTTP requests from the controllers into a service.

## Pro Mode
- [ ] Host the application on Heroku and mLabs. You will need to transfer the data up to mLabs. You will need to research how to accomplish this.

- [ ] Ability to update or delete existing listings.
