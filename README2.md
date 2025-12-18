## Usage

-Use "npm run start:all" to start both the stub server and the Angular development server.

-Use "ng test" to run the tests.

-Login only succeeds with username "oscar" and password "123". Any other combination throws an error.

## Configuration changes

-Configuration files had to be changed in order to run tests.

-This project was migrated to Angular 20. Please ensure your Node.js version is at least 20.11.1 (Windows command: node
-v) and your TypeScript version is least 5.8 (Windows command: tsc -v).

-Angular material was also upgraded to version 20.

## General considerations

-Angular signals were used in the application for reactive state management.

## SCSS structure

-"styles.scss" contains global styles.

-"palette.scss" and "typography.scss" contain global types of colours and fonts respectively.

-Unused "indigo-pink.scss" was removed from "angular.json".

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

-The backend links contained large images, so I modified to get smaller images. Using some modern format like WebP, AVIF
or compressing the images would be a better solution from the backend side.

-"width" and "height" were added to all the images in order to avoid layout shifts.

## Single airport component

-Direct navigation is supported: if a user manually changes or shares the URL,
the airport detail page will still load correctly.
