# Blog App

This is a simple blog app project that contains both backend and frontend components. The project requires Node.js and npm to be installed to run.

## Prerequisites

Make sure you have the following software installed:

- [Node.js](https://nodejs.org) - JavaScript runtime environment
- [npm](https://www.npmjs.com) - Node package manager

## Installation

To install the dependencies for both the frontend and backend, navigate to the root folder of the project and run the following command:

`npm install`

This will install all the necessary dependencies for both the frontend and backend components.

## Testing

This project includes tests for both the frontend and backend components. To run the tests, use the following command:

`npm run test`

The tests for the backend are written using Jest, while the tests for the frontend are written using React Testing Library. Running this command will execute the tests and display the test results.

## Running the App

Firstly create .env file in backend/ folder and add the following environment variables as given in .env.example file. Also change value of ENDPOINT in frontend/src/utils/constants.js to the URL of the backend server.

To start the app, use the following command:

`npm run start`

This will start the backend server and the frontend development server. You can access the app by opening your browser and navigating to the specified URL.

## State Management

For this project, no external state management library like Redux has been used. Since it is a simple project, the state management is handled within the components using React's built-in state capabilities.

## Improvements

Frontend can be improved to look better and also please note that the feedback functionality has not been implemented in the frontend component of this app, even though all errors are caught and handled by the backend. This is a deliberate design choice for this particular project based on time requirements.

