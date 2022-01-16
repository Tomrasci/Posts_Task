# Posts_Task
Simple API and frontend with 3 3 pages for posts web - list of posts, post details page and add post page

## Used Technologies
For API:
* Visual Studio 2022
* .Net Core Web API
* Entity Framework Core
* SQL express

For frontend:
* Visual Studio Code
* React
* Axios
* Boostrap

## Database initialize
* First time running the API there might be a problem since there is no database created, it should be fixed by typing in ```dotnet ef database update``` command in the package manager console

* There is also a csv file of created posts that could be imported to the database using a tool like SQL server management studio, or added manually in the database or in the frontend of the application by using the "Add Post" post method.

## How to run
* To run the API, open the project in Visual Studio and press start or F5
* To run the frontend, navigate to the postsfrontend folder in terminal and type npm start
