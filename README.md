# Xharktank

Xharktank is a backend application built on top of Node.js, expressjs, and MongoDB, inspired by the popular show **"Shark Tank India"** where enthusiastic entrepreneurs can pitch an idea/business and sharks can invest in their idea/business in return for equity in their company.

## Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install xharktank.

```bash
npm install
```

## Implementation

**Xharktank** has 4 endpoints, They are:

- **/GET** http://localhost:8081/pitches
    - Retrieve all the pitches made by the entrepreneur.
- **/POST** http://localhost:8081/pitches
    - An entrepreneur can post a new pitch the pitch body must in 
```JSON
{
 "entrepreneur": "String",
 "pitchTitle": "String",
 "pitchIdea": "String",
 "askAmount": number,
 "equity": number
}
```
- **/GET** http://localhost:8081/pitches/:pitchId
   - Retrieve a single pitch corresponding to pitchId
- **/POST** http://localhost:8081/pitches/:pitchId/makeOffer
   - This endpoint is used by sharks to invest in pitch corresponding to pitchId
   - The investment body must be in (where ? means optional)
```JSON
{
 "investor": "String",
 "amount": number,
 "equity": number,
 "comment"?: "String" 
}
```

## Usage

To start server and listen the requests to port **8081** run the below command in the terminal/bash

```bash
npm start
```

## Usage

To start server and listen the requests to port **8081** run the below command in the terminal/bash

```bash
npm start
```

## Deployment

Deployed nodejs applicaction on heroku, following are steps involved in deploying the nodejs application on heroku platform

step 1: Sign up on Heroku Platform [https://www.heroku.com/](https://www.heroku.com/) 

step 2: Execute below command and enter user credentials
```bash
heroku login -i
```

step3: Create a new Heroku node application using below command or by using GUI on Heroku dashboard
```bash
heroku create <APPLICATION_NAME>
```

step 4: Add git remote to the application we just created on Heroku
```bash
heroku git:remote <APPLICATION_NAME>
```

step 5: Add files and commit, and finally push the code 
```bash
git add .
git commit -m "Deploy"
git push heroku master
```

## Important Links

Link to Pitch new Idea: [Xharktank-Pitch](https://xharktank.crio.do/pitches/?author=rachitpbohara123&url=https%3A%2F%2Fxharktank-rachit.herokuapp.com%2F)

Link to Invest in Pitches: [Xharktank-Invest](https://xharktank.crio.do/invest/?author=rachitpbohara123&url=https%3A%2F%2Fxharktank-rachit.herokuapp.com%2F)