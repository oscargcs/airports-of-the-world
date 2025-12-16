## Usage

-Use npm run start:all to start to run the stubs and ng serve.

-Use ng test to run the tests.

-Login only works with username: oscar and password: 123, any other combination throws an error.

## Configuration changes

-Configuration files had to be changed in order to run tests.

-This project was migrated to Angular 20, please ensure your Node.js version is at least 20.11.1 (Windows command: node
-v) and your TypeScript version is least 5.8 (Windows command: tsc -v).

-Angular material was also upgraded to version 20.

## General considerations

-Signals were used in the application for reactive state management.

## SCSS structure

-styles.scss contains global styles.

-palette.scss and typography.scss contain global types of colours and fonts respectively.

## Accessibility

-Some aria-labels are already set by Angular Material.

-aria-live was added for loading spinner.

## Authentication

-Local storage was used to preserve the login information in the browser, in case the page is refreshed.

-The login state is handled using NgRx.

## Single airport component

-If someone changes or shares the link manually they can also see the airport information.
