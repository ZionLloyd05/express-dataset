const sqlite3 = require('sqlite3').verbose();

const DBSOURCE = './db/event.db';

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to SQLite database.');

    // Creating DB Tables
    const createActorTableQuery = `CREATE TABLE IF NOT EXISTS actor(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            login TEXT NOT NULL UNIQUE,
            avatar_url TEXT
        );`;
    const createRepoTableQuery = `CREATE TABLE IF NOT EXISTS repo(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            url TEXT NOT NULL
        );`;
    const createEventTableQuery = `CREATE TABLE IF NOT EXISTS event(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            actor_id INTEGER NOT NULL,
            repo_id INTEGER NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );`;

    db.run(createActorTableQuery, (err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    db.run(createRepoTableQuery, (res, err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });

    db.run(createEventTableQuery, (res, err) => {
      if (err) {
        console.error(err);
        return false;
      }
    });
  }
});
