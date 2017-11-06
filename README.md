# BlogApp
Assignment2-Blog API

## Getting Started

### Prerequisities
Node js,Mongo Db,Express Js

### Deployment
Place all the three .js files in a single folder and run the mongo server using the command mongod and in another command prompt run the blogAPI.js application.Now run the link To 'http://localhost:3000/viewAllBlogs' to view all the blogs.

### Description
There are 5 API calls present in the file:
1. To create Blog : In this API call there is an additional filter present where it will check if sign in required or not,if yes then it will check for username and password.If both are entered then only the blog gets created.

2. To view all Blogs: In this API call a call back function is present where it will check if the add required is checked or not, if yes then the call back function is called present in functionsAdv.js and the body of the blog is displayed after the add is played for 10sec.In the mean time remaining blogs can be viewed.

3. To view based on id 

4. To update based on id

5. To delete based on Id

### Example
To view all blogs : http://localhost:3000/viewAllBlogs


## Author:
Sneha
