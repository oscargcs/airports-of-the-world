## Angular Airports App

This project is a small Angular application built as part of a technical assessment and later refined for portfolio purposes.
It demonstrates authentication, state management, routing and accessibility.

## Requirements

-Node.js 20 up to 23. Please note that the stubs will not work with Node.js 24 and potentially other versions.
-npm

## Usage

-Use "npm run start:all" to start both the stub server and the Angular development server.

-Use "ng test" to run the tests.

-Login only succeeds with username "oscar" and password "123". Any other combination throws an error.

## General considerations

-Angular signals were used in the application for reactive state management.

## SCSS structure

-"styles.scss" contains global styles.

-"palette.scss" and "typography.scss" contain global types of colours and fonts respectively.

## Accessibility

-"aria-labels" were used to describe items.

-"aria-live" combined with a span with a "cdk-visually-hidden" class was used to inform the user about
updates (logging in, loading and errors).

-Keyboard navigation was considered.

## Authentication

-Local storage was used to preserve the login information in the browser, in case the page is refreshed.

-The login state is handled using NgRx.

## Images

-NgOptimizedImage was used to improve the loading of images that are not SVG (airport-detail).

-As images are visible in the viewport, even if they are decorative, no lazy loading was applied.

-"width" and "height" were added to all the images in order to avoid layout shifts.

## Single airport component

-Direct navigation is supported: if a user manually changes or shares the URL,
the airport detail page will still load correctly.
