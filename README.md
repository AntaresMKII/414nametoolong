# 414nametoolong

## RESTful API
Here is the RESTful API. Each line contains the verb (GET, POST, etc) then the
URL and finally a description on what the request will return
- GET resources/ : returns all resources
- GET resources/:resourceID : returns the resource with specified id
- Not sure if we want to add shared notes to our application
- GET resources/:resourceID/notes : returns all notes for a specific resource
- GET resources/:resourceID/notes/:noteID : resturns a specific note
- POST resources/ : adds a new resource
- GET users/:userID : gets a user
- POST users/ : adds a new user
Static pages:
- GET / : main page
- GET login/ : login page
- GET signup/ : sign up page

If you think a functionality is missing send a message on discord

## Folder structure
Firebase require a folder containing all webpages and other files, so I changed the structure of this repository such that all files are better organized. Please follow this convention:
- Images go into public/img
- Javascript and json go into public/js
- css files go into public/css
- html files go into public/ (and not into public/html)
