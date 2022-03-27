# 414nametoolong

## Database functions
IMPORTANT! Read How Data is Stored section
First of all import the database:
`import database from database.js`

Then use the following functions to get user informations:
- database.getAllUsers(function(data));
- database.getUser(user id, function(data));
- database.addUser(user object, function(data));
- database.getAllResources(function(data));
- database.getResource(resource id, function(data));
- database.addResource(resource, function(data));

## How Data is Stored:
The data will be stored as multiple JSON objects following this structure:
`Users: {
    userid: {
        username
        email
        image
    }
}

Resources: {
    resourceId: {
        title
        link
        description
        userid
        notes: [noteid]
        tags: [tags]
    }
}

Notes: {
    noteid: {
        userid
        title
        content
    }
}
`

All functions require a callback function where the data is passed into.

## Folder structure
Firebase require a folder containing all webpages and other files, so I changed the structure of this repository such that all files are better organized. Please follow this convention:
- Images go into public/img
- Javascript and json go into public/js
- css files go into public/css
- html files go into public/ (and not into public/html)
