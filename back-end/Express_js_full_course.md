# Express JS Full Course
Anson the devloper
You don't always want to get data, sometimes you want to update data, delete data, you'll learn about those later on. We will first learn about the app.get method. It'll take an argument.
app.get('', (req, res) => {

})

We need a request handler, that is the second handler to app.get. It'll be a call-back function, it has the request object itself, and, the second argument is the response object. It's what you use to take the second object and send it back to the user. 

One example for a response object method is res.send("Hi!!!"); We can also send res.send(msg: "Hello"); We can set response.status(200). 201 is for post requests when you make a resource. Whenever the status is successful, it's a successful status code. 

When you make a page, related to the API you should prefix it with /api/users. 

To idenfiy a specific route parameter, what you would do is use a :id, give it a name like ID, give it a request handler, now, when we visit API/users, it'll go to that endpoint. request.params is an method that will give you all the parameters. Hmm, the status method is not working for the isNaN function. Will need to look at that with Gemeni later. 

Query Parameters
A ? is knwon as a query string, separated by ampersands, with equals. 

query?=key=value&key2=value2&key3=value3. You can have as many query parameters as you want. You can send one from one page to another, you can grab the values from the query string. Normally, you wouldn't add a request body. 

You could use a query string to filter the results. Maybe you don't want to get every single username. Maybe you just want a limit.

If this condition fails, we will just return res.send(mockusers). If we only have one query parameter, defined, it won't have anything sent at all. 

## Post Requests
You can send data in the body of the request. Once they are ready, they will make a request to the back-end. It'll make a post request to the server. That data is known as a request body. You use those terms synonymously, payload, request body. The back-end will take that, if it needs to do additional data, it'll do all of that, before it needs to send it to an external API source. It'll return a 201 response status code that means that the resource was created. On the browser there's no way to do the request.body. Different JavaScript codes with interacting with the API. We want to access the dta. 

## Validation
Let's say that you have a username form, you want to check that the length of that username is 32 or less. If you're validating why do you still need to validate on the server side? You can literally go on the network tab, inspect where it's being sent to, even the Thunder client, bypass the client-side validation. You need to make sure that you're validating on the server-side. More important than on the client-side. 

Note to self, I am going to be following medium articles from here on out over youtube. I will be following the guide and I will be practicing with the outline from the medium articles instead of using their particular technology. This particular medium article is Express API Validation using Express-Validator, by Muhamad Arif Arrijal.   