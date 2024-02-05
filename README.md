# Air Ticket Booking Service

Welcome to the Air Ticket Booking Service! This service provides APIs for booking flights and publishing booking information to a message queue within the airline booking management system.

## Endpoints

1. Create Booking: POST /api/v1/bookings - Create a new flight booking.

2. Publish Message: POST /api/v1/publish - Publish booking information to a message queue.

## Getting Started

To get started with the Air Ticket Booking Service, follow these steps:

## Project setup

-clone the project on your local
-Execute `npm install` on th esame path as of your ropot directory of the downloaded project
-Create a `.env` file in the root directory and add the following environment variable
    -`PORT: 3002`
-Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
    "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Booking_DB",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
```

-Once you've added  your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute  `npx sequelize db:migrate`.
Start the service using `npm start`.
Access the endpoints using a REST client or integrate them into your application.
