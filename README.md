
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# shop-apotheke-backend


A Github proxy API.

* it's support some features of Search API in github

## tl;dr
* clone project and go to folder
* Install by executing `npm install` or `yarn`.
* to start server just use this command `npm start`. it will be run on port 5000. you can define a new port in .env file
* to start server with docker you can use docker file that is provided. it will expose  5000 port. docker production is also the same and just diffrent about the node enviroment that it runs.
* you can also start the project with docker-compose. it also start at port 5000

## tools:

- NodeJs Express framework
- node-fetch for handle http requests.
- Mocha and supertest library 
- handle cors, cookies and other things 
- webpack as module bundler
- babel as Typescript and ES6 transpiler
- docker and docker compose

## Demo

the project doesn't have UI and it's just provide one main endpoint and one test endpoint. the main endpoint is `/repositories` and you can provide this queryparams to change the result. of course, it would response without any query but the response is with default values that has been declared by me and just for the test.

the availble query parameters are is here:

| QueryParameter | result | default param |
|-------|-------|-------|
| sort |sort repositories by this params. it's sort by number of stars right now (As it mentiond on the task) |by number of stars |
|  per_page | 10    |how many repositories it should return in each page |
| page | 1 | number of page in the list (it start with 1 and it will thrown error if it wasn't any data) |
| created | a specefic time that filter repos that are newer that this date   | 2019-01-10 |
| order | order of repos    |desc |
| language | filter repos by a specefic programming language     | js |


the other endpoint is the main page and doesn't show anything specefic.

## project structure

```

.

├── build # Compiled files (just server file is saved as index.js)

├── public # public assets 

├── src # main project logic files

│ ├── bootstrap # main files to start express server and it's configurations (including static assets address and ...)

│ ├── controllers # main controllers including git hub api and main page api


│ ├── providers # main app providers (inclduing error provider. error-handler for my project is often use for a source of error handling for all error happening in project. but we don't have enough data to use here and didn't have time to do so it's not working and just here for showcase my works. 

│ ├── router # main router file and it's configuration

│ ├── utils # main utils of project.
  
│ ├── views # main views of project.

├── tests # unit tests ()

├── Dockerfile.prod # docker file to build in production wepack config

├── Dockerfile # docker file to build the server file and run it with nodemon and watch it changes with webpack and reload the server with nodemon

├── docker-compose # docker-compose file to build and run docker file

├── LICENSE

└── README.md

└── ... # other configs for editor config, typescript, prettier and ...
  

```
## other 

### Why I used Webpack?

this project, I used webpack for building server file and transpiling typescript files and used nodemon to refresh after every successfull build. why webpack? It's not really a great option for such project, I can say but I wanted to have some flexibility over tools and also showcase my abilites. but it would be done so much easier with just babel and Typescript.( as I used them this way before). I also used babel because of much more flexibility that it provide me to choose the prefered syntax.