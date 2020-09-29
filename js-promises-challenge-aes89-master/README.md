# Promises Challenge

In this repository, there is an index.html and a script.js

Currently in the `script.js`, there is a call to a random user API that uses a callback function to console.log the result of the response, or an error message if there is a problem.

**Step 1:** Open the index.html in a browser, and look at what is logged to the console.

**Step 2:** Make the following change to the definition of the `randomsUrl`, which will cause the API to return 10 random users:

```javascript
const randomsUrl = 'https://randomuser.me/api/?results=10';

```

Refresh `index.html` and look at the results that are logged.

Now that you have an understanding of what is returned by this API, here is your challenge!

### Part 1 Using a promise

Modify the script.js to use a promise instead of just a callback. Look at what we did in class for the dad jokes example and see if you can do the same to:

1. Get **one random user** and return their details in a JSON object. Console log those details like this example:

```
Name: Mrs Sally Ride
Email: sally.ride@example.com
Age: 32
```

To do this, you should:

- implement an asynchronous function that returns a promise, and that calls the API (like getJoke in our lesson example)
- implement a callback function that will be passed to the `.then` method of the promise that is returned, which will console log the results as indicated
- call the asynchronous function and pass the callback function you defined to the `.then` method

### Part 2 Return multiple users

Alter your asynchronous function to call the random user api and request 10 results. It should return the array of results when the promise resolves.

Console log the details for each of the 10 random users in your modified callback function that is passed to the `.then` method.

Note that this is unlike our lesson example where we made multiple calls to the getJoke function to get multiple dad jokes. This will be a bit simpler.

### Part 3 Add DOM manipulation to display results on the page

**A.** Modify the callback function to display the results on the web page in addition to logging the results. When the page loads, it should display the details for 10 random users.

**B.** Add a button to the page that will refresh the page with 10 new random users when clicked.

There is a solution for this challenge in the **challenge-complete** branch of this repository.