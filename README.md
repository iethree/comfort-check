# Comfort Check

This is a little tool we use to facilitate [comfort checks](https://www.funretrospectives.com/safety-check/) for our internal retrospectives. All submissions are completely anonymous amd are deleted after 48 hours.

It is available for public use here: https://comfort-checks.s3.us-east-2.amazonaws.com/index.html

## Architecture

The front-end is a simple react app deployed to s3.

The back-end is .json files stored in S3 and updated using a simple lambda function.

## Usage

Back end deploy: `npm run deploy:api`

Front end deploy: `npm run deploy:app`

Local API test: `npm run test:handler`

Local App server: `npm run dev`
