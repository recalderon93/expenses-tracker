# API FOLDER

### Folder Structure
---
> Api
>> Routes
>>> User
>>>
>>>> Transactions
>>>>
>>>> index.js
>>>> 
>>>> All transactions Routes
>>>
>>>>wallets
>>>>
>>>> index.js
>>>>
>>>> All wallets Routes
>>>
>>> index.js
>>> 
>>> All user Routes

## Abstract 
---
This folder will contain all the routes of the api, with a folder structure related with the URL paths used.

The API structure will related with the user creation process and the differents methods avalible for each one.

The 404 page or the main page will be declare too, and this API router will be exported to be used in a Express server.

## Scope
---
The API layer is the router that connect the client side with the server. Each Route connect with a specific controllers, located in each entity folder. And it will not connect directly with the DB or any domain.

## Routes
| URL                       |  Methods           |                             Description                 |
|---------------            |-----               |---                                                      |
|/ users                    |GET, POST           | Get all the users and create a new one in the DB        |
|/ : user                   |GET, UPDATE, DELETE | Get an user data (Dashboard), modify any info or deleted|
|/ : user/transactions      |GET, POST           | Get all the transactions of one user, add a new one     |
|/ : user/transactions/:id  |GET, UPDATE, DELETE | Get a transaction, and modify or deleted                |
|/ : user/wallets           |GET, POST           | Get all the wallets of an user or add a new one         |
|/ : user/walllets/:id      |GET, UPDATE, DELETE | Get, and update or delete any wallet                    |
| | | 


 