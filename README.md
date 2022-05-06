# Udagram
Hosting a full-stack web

## Website
- [URL] (http://mostafa-bucket-123.s3-website-us-east-1.amazonaws.com/)

## GitHub Repo
- [GitHub](https://github.com/mostafanassr2000/udagram-1)

## Installation

Provide the following AWS services for the application to run:

1. Create a publicly accessible RDS database in AWS that runs Postgres.
2. Create an S3 bucket on AWS to store the uploaded files.
3. Navigate to the udagram-api folder `cd starter/udagram-api` to install the node modules `npm install` from the origin of the repo. Start the api in dev mode with `npm run dev` after the installation is complete.
4. Navigate to the udagram-frontend `cd starter/udagram-frontend` to install the node modules `npm install` without leaving the terminal in step 1. Start the api in dev mode using `npm run start` after the installation is complete.

## Testing

There are two types of tests in this project: unit tests and end-to-end tests (e2e). To perform the tests, follow the steps below.

1. `cd udagram-frontend`
2. `npm run test`
3. `npm run e2e`

On the backend, there are no unit tests.

### End-to-End Tests:

The e2e tests are using Protractor and Jasmine.

## Built With

- [Angular](https://angular.io/)
- [Node](https://nodejs.org)
- [Express](https://expressjs.com/)
