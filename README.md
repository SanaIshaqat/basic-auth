# basic-auth
## LAB - 06
### Authentication 
Author: Sana Ishaqat

[tests report (actions)](https://github.com/SanaIshaqat/api-server/actions)

[back-end (heroku proof of life)](https://sana-api-server-04.herokuapp.com/alive)

[back-end (food)](https://sana-api-server-04.herokuapp.com/food)

[PR Link](https://github.com/SanaIshaqat/api-server/pull/1)
[Final PR](https://github.com/SanaIshaqat/api-server/pull/2)
### Setup
.env requirements
PORT - Port Number


### Running the app
npm run dev
Endpoint: /status
Returns Object
{
  "status": "running",
  "port": 3030,
  "domain": "sanaishaqat-server-deploy-prod.herokuapp.com"
}

### Tests
Unit Tests: npm run test


UML
![](UML06.jpg)
![](UML04.jpg)