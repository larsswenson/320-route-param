Handling route parameters in Express

Responds to URL user input path, reading, "Hello (username)".

Throws a 404 error if path is invalid.

The route includes parameter ":username", allowing different user input in URL.

Requires Node.js and npm.
Make sure to include "type": "module" in the package.json file and to install Express, via "npm install express".
To run server, navigate to "route_param" directory via "cd route_param" in the terminal.
Run "node index.js" to start server. The console will read, "Server listening on port 3000".

Enter your name in the URL path after "user/" to see response message. Leave blank to test error handling.

License: ISC

Author: Lars Swenson

Dependencies: Express 4.18.2
