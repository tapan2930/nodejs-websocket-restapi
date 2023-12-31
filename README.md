# Follow-Up Question:

### 1. Explain the architecture of your WebSocket server and RESTful API server. How have you structured your code to handle different endpoints and requests efficiently?

---

The architecture we has been choosen in MVC (Model View Control) architecture. It helps to separate the logic part, the api exposing and connection and interation with database part separately. This helps to scale the app and organize the logic according to there usage.

For getting the resources, I have used a get request like:
` /resources/:id`, where if id is provided, then only a specific resource will be sent in the request, else all the resources will we sent in the response.

For create operation, I am accepting query params `{name: String, des: String}` with the post api request at `/resources/`.

For delete operation, I am using delete https method and params id to delete at `resources/:id`

### Discuss the design decisions, libraries, and frameworks used in your implementation. Explain how your servers handle different types of requests and how they could be extended or modified for additional functionality in the future.

---

Libraries used are: Express.js and ws.

**_Express.js_** is used for creating the a web server on the node.js for handling all the http request and sending the response.

**_WS_**: It is used to create the webserver in the node.js application that can handle multiple clients at a time.

For a production application, we can use OMR like Sequilize and Prisma for data migration, scheme validation and connecting with database. We can also used data logging and bebugging tools like datadog, santry for the same purpose.

For any furthure extension to the project, we can use the actual database, have a proper validation for a query parameters in the backend and display a proper message or error to the frotend. Another major thing that we can do is to use Typescript for a production project.
