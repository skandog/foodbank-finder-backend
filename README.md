# Your Local FoodBank Backend

This is the repo for our server and database, where we have built the API routes, Mongoose queries and tests. Our API CRUD routes are connected to our database (MongoDB) and the data is fed to our frond end via the GET routes.

## Features of MVP
- Read Items and FoodBanks
- Create a FoodBank
- Update a FoodBank
- Delete a FoodBank

[Link to our Frontend](https://github.com/SchoolOfCode/final-project_front-end-jazzy-code-superheros)

---
## API 
#### PORT Used: 5000
<br>

#### FoodBank

| Method | Path                 | Additional Info | Result                                    | Response                                    |
| ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /foodbank            |                 | all FoodBanks                             | { success: true, payload: foodbank array }  |
| GET    | /foodbank/id         |                 | get FoodBank by id                        | { success: true, payload: foodbank array }  |
| POST   | /foodbank            |                 | create a new FoodBank                     | { success: true, payload: foodbank object } |
| PATCH  | /foodbank/id         |                 | update a FoodBank by id                   | { success: true, payload: foodbank object } |
| DELETE | /foodbank/id         |                 | delete a FoodBank by id                   | { success: false, "message": "FoodBank has been deleted" }  |


#### FoodBanks

| Method | Path                 | Additional Info | Result                                    | Response                                    |
| ------ | -------------------- | --------------- | ----------------------------------------- | ------------------------------------------- |
| GET    | /foodbanks           |                 | all FoodBanks from external API           | { success: true, payload: FoodBank array }  |
| GET    | /foodbanks/search/address |                 | single FoodBank from external API         | { success: true, payload: FoodBank object } |
| GET    | /foodbanks/search/address |                 | single FoodBank from external API         | { success: false,  message: "I am so sorry, there doesnt seem to be any results here. Please could you try another search term?" } |


---

## Tech Stack

**Database:** MongoDB
<br>

**Server:** Node, Express, Jest, Nodemon, Supertest, Mongoose

---
## Testing

To run tests, run the following command: 

```bash
  npm run test
```

---
## Run Locally

Clone the project

```bash
  git clone https://github.com/skandog/foodbank-finder-backend.git
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


### Database Documentation

- Create .env file

```
uri=<Your database URI & password>
```


## Authors

- [@Simran Toor](https://www.github.com/simran-toor)
- [@Skandy](https://github.com/skandog)
- [@Claudia Gonzalez-Casales](https://github.com/ClaudiaGC1339)
- [@Jim Wynn](https://github.com/jimlikesjazz)
- [@Joshua Langford](https://github.com/J05hL)
- [@Camilla Santos](https://github.com/millagmc)
