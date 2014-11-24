Manufacturing.Web
=======================

An Angular.js application that interfaces with the manufacturing API via REST and SignalR to interact with the system.

![Command Line Generating Data](readme-assets/commandline-animated.gif)

Real-time data pushed to Event Hubs can be displayed through this web project.

![Real-time event display](readme-assets/chart-animated.gif)

### Install

1. Ensure that you have [Node/npm](http://nodejs.org/) installed.
2. Run `install.bat` to install the prerequisites.

### Run

1. Start the WebAPI project, which is is the server for the front-end.
1. Run `run.bat` to run the web front-end locally.

### Troubleshooting

* I've found that npm global installs can fail when installed with Chocolatey. My solution was to uninstall them with Chocolatey, and clean up the exe's in `C:\ProgramData\chocolatey\bin`. Then, install Node with the [standard installer](http://nodejs.org/).
* If you host the backend on a different computer than the frontend, you'll need to update the server URL in `/src/app/history/history.controller.js`.

# License

Microsoft Developer Experience & Evangelism

Copyright (c) Microsoft Corporation. All rights reserved.

THIS CODE AND INFORMATION ARE PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A PARTICULAR PURPOSE.

The example companies, organizations, products, domain names, e-mail addresses, logos, people, places, and events depicted herein are fictitious. No association with any real company, organization, product, domain name, email address, logo, person, places, or events is intended or should be inferred.
