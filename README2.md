-This project was migrated to Angular 20, please ensure your Node.js version is at least 20.11.1 (Windows command: node
-v) and your TypeScript version is least 5.8 (Windows command: tsc -v).

-Angular material was also upgraded to version 20.

-If you want to see the login error behaviour:

1. Open stubby.json
2. Clear the whole POST to /login object.
3. Paste the following and save:
   {
   "request": {
   "method": "POST",
   "url": "/login"
   },
   "response": {
   "status": 401,
   "body": {
   "message": "Invalid credentials"
   }
   }
   }
4. Go to  http://localhost:4200/login and log in with any username and password.

-"switchMap" was used in single-airport.component so that
if someone changes or shares the link manually they can also see the airport information.

-first() was was used in guards and interceptors 
