// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:4000',
  firebaseConfig: {
    apiKey: 'AIzaSyDmDEyG0bzdepSZqmeHvM1I2wEVWPEvV84',
    authDomain: 'filmder-aace1.firebaseapp.com',
    projectId: 'filmder-aace1',
    storageBucket: 'filmder-aace1.appspot.com',
    messagingSenderId: '818532842793',
    appId: '1:818532842793:web:379655b3af52e9b638cb38',
    measurementId: 'G-34LHLBKSCE',
  },
  // apiUrl: 'https://53ce-95-174-98-230.ngrok.io',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
