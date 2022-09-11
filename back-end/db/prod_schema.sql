DROP DATABASE IF EXISTS activities_dev;
CREATE DATABASE activities_dev;

\c activities_dev;

CREATE TABLE activities (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    type TEXT NOT NULL,
    participants INTEGER,
    price INTEGER,
    accessibility BOOLEAN
);
