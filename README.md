Auth Microservice

# Auth Microservice

Basic RESTful api for SIGNUP and SIGNIN of Users.

## User Table Schema



|Key| Field Name          | Data Type       | Allow Null | Description                     |
|---|---------------------|---------------------|------------|---------------------------------|
|PK | id (auto incr.)           | INTEGER         | No         | ID of User           |
|   | email                | VARCHAR(30)     | No         | Email of the User           |
|   | password         | VARCHAR(15)     | Yes        | Password of the User       |
|   | createdAt        | INTEGER         | No         | Date of Creation         |
|   | updatedAt        | INTEGER         | No         | Latest Update Date        |


#### INSTALLATION INSTRUCTIONS
-   Clone or download the repo. into your local system.
-   cd into that root folder you just cloned locally.
-   install all dependencies which are written in the packet.json file, type
    ```
    npm install
    ```
-   Now typing
    ```
    npm start
    ```
    will start a server !
    
    App should now be running on **localhost:[PORT]**
         
### Dependencies 
 - For dependencies refer ackage.json


## Available API Routes

### For Testing (Postman)
- Postman extension can be used for testing !

### [User Routes](#1-user-routes)

| Routes                     | Description                                  |
|----------------------------|----------------------------------------------|
| [`POST /api/v1/signup/`](#a-add-new-user)  | User Signup: adding new User            |
| [`POST /api/v1/signin`](#b-authenticate-existing-user) | Check Authentication of an existing User |

## 1. User Routes

### A. Add a new User.
Send a POST request to add a new User (Sign Up)
```
Method: POST 
URL: /api/v1/signup
Produces: application/json
```


#### Body Parameters :
| Field        | Type           |Required  |
| ------------- |-------------|-------|
| email   | String |Required | 
| password   | String |Required|


#### Example :
- **Request:**  `/api/v1/signup`

- **Body:**

````
{
    "email" : "soham@gmail.com",
    "password": "Soham@1904"
}
````

- **Response:**
````
{
    "success": true,
    "message": "Successfuly created a new user",
    "data": {
        "id": 7,
        "email": "soham@gmail.com",
        "password": "$2b$10$2RNMFfnhqYqV2JRsdn968uUdHBT3MapTHmLDz0haGyO/mEEThCKuW",
        "updatedAt": "2025-03-14T18:31:47.988Z",
        "createdAt": "2025-03-14T18:31:47.988Z"
    },
    "err": {}
}
````


### B. Authenticate Existing User
Send a POST request to authenticate existing user (Sign In)
```
Method: POST 
URL: /api/v1/signin
Produces: application/json
```


#### Body Parameters :
| Field        | Type           |Required  |
| ------------- |-------------|-------|
| email   | String |Required | 
| password   | String |Required|


#### Example :
- **Request:**  `/api/v1/signin`

- **Body:**

````
{
    "email" : "soham@gmail.com",
    "password": "Soham@1904"
}
````

- **Response:**
````
{
    "success": true,
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNvaGFtQGdtYWlsLmNvbSIsImlkIjo3LCJpYXQiOjE3NDE5NzgyMzksImV4cCI6MTc0MTk4MTgzOX0.-U7YFoCuaA0kdwdr4ugdFAp-MvQe8YkTSaPiuOycUSk",
    "err": {},
    "message": "Successfully signed In"
}
````

