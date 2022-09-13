DROP DATABASE IF EXISTS activities_dev;
CREATE DATABASE activities_dev;

\c activities_dev;

CREATE TABLE activities (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    type TEXT,
    participants INTEGER,
    price DECIMAL(3,2),
    accessibility DECIMAL(3,2),
    is_favorite BOOLEAN
);

