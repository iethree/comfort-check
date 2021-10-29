# Comfort Check

![preview](preview.png)

This is a little serverless web app we use to facilitate [comfort checks](https://www.funretrospectives.com/safety-check/) for our internal retrospectives. All submissions are completely anonymous and are deleted after 48 hours.

It is available for public use [here](https://comfort-checks.s3.us-east-2.amazonaws.com/index.html).

## Architecture

The front-end is a simple react app deployed to s3. Built with [Vite](https://vitejs.dev/) and styled with [tailwind](https://tailwindcss.com/)

The back-end API is .json files stored in s3 and updated using a simple lambda function configured with [serverless](https://www.serverless.com/).

## Install

You are welcome to use our [public installation](https://comfort-checks.s3.us-east-2.amazonaws.com/index.html) for your own team, but if you'd like to spin up your own version, you'll need to:

1. Set up an AWS s3 bucket with public-read access, CORS enabled, and an auto-deletion policy for `data/` objects
2. Update the serverless.yml for your writer-lambda to have iam access to your bucket and deploy your own writer-lambda
3. Update 'lambdaAddress' and 'bucketAddress' in utils.js to read from that bucket, and to send updates to your lambda's http address

## Usage

Back end deploy: `npm run deploy:api`

Front end deploy: `npm run deploy:app`

Local API test: `npm run test:handler`

Local App server: `npm run dev`
