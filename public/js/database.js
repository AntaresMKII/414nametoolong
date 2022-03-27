import { getDatabase, onValue, ref, set } from "firebase/database";

// Database constructor. Do not invoke
const Database = function() {
    this.db = getDatabase();
}

// Returns all users from the database.
// Requires a callback function to be passed
Database.prototype.getAllUsers = function(callback) {
    const userRef = ref(this.db, 'users/');
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
}

// Returns a user specified by user id from the database
// Requires a callback to be passed
Database.prototype.getUser = function(uid, callback) {
    const userRef = ref(this.db, 'users/' + uid);
    onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
}

// Adds a new user to the database
Database.prototype.addUser = function(user, callback) {
    const userRef = ref(this.db, 'users/' + user.id);
    set(userRef, {
        username: user.username,
        email: user.email,
        image: uaer.image
    });
    callback(user);
}

// Get all resources. Expensive operation
Database.prototype.getAllResources = function(callback) {
    const resRef = ref(this.db, 'resources/');
    onValue(resRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
}

// Get resources for one resource with resource id
Database.prototype.getResource = function(rid, callback) {
    callback(undefined);
}

// Adds a new resource
Database.prototype.addResource = function(resource, callback) {
    callback(undefined);
}

// Get all notes. Expensive operation, Avoid using
Database.prototype.getAllNotes = function(callback) {
    callback(undefined);
}

// Get note specified by the id
Database.prototype.getNote = function(nid, callback) {
    callback(undefined);
}

// Add note
Database.prototype.addNote = function(callback) {
    callback(undefined);
}

export const database = new Database();
