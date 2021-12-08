# Recruiters

Simple React Portal for recruiters to manage Outstanding Candidates.

## Setup

- Clone repositry and navigate to root directory of project
- Run npm install (Assume Latest version of NodeJs installed)
- Run project using npm start (app will run in http://localhost:3000 )

## Build

Following command will create build in **dist** folder

> npm run build

## Test

To run tests:

> npm run test

To check code coverage:

> npm run test -- --coverage

html report will be generated in coverage folder

## Storybook

Use storybook to verify components independently.

> Run storybook using _npm run storybook_
> Storybook runs in localhost port 6006

## Custom Table Component - Reusable Table Component used under the hood

- The CustomTable Component is a scalable & reusable - configuration based component used for generating candidates table.
- As of now CustomTable has Filter and Sort Functionality
- Filter Can be applied on one field at a time. Planning to improve this to simultaneously apply multiple filters

## Todo

- Complete All test cases
- Separate CustomTable and treat as an independent component
- Enhance Component to have customFormatting option
- Option customize style / pass custom class to component
- ..
