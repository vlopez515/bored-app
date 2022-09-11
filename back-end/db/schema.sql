DROP DATABASE IF EXISTS activities_dev;
CREATE DATABASE activities_dev;

\c activities_dev;

CREATE TABLE activities (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    type TEXT,
    participants INTEGER,
    price INTEGER,
    accessibility BOOLEAN,
    is_favorite BOOLEAN
);

DROP TABLE IF EXISTS stories;

CREATE TABLE stories (
    id SERIAL PRIMARY KEY,
    user TEXT,
    content TEXT,
    title TEXT,
    img TEXT,
    activity_id INTEGER REFERENCES activities (id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
);

DROP TABLE IF EXISTS users_activities;

CREATE TABLE users_activities (
    activity_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created TIMESTAMP DEFAULT NOW()
);

