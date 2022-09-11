\c activities_dev

INSERT INTO activities (name, type, participants, price, accessibility, is_favorite) VALUES
('rowing a boat', 'recreational', 4, 45, false, true),
('Learn a new recipe', 'cooking', 1, 0, true, true),
('Hold a yard sale', 'social', 1, 0, true, true);


INSERT INTO stories (activity_id, user, title, content, img)
VALUES
('1', 'Tony', 'Amazing Time', 'I am glad I was recommended this activity!', 'https://previews.123rf.com/images/ferli/ferli1202/ferli120200001/12371463-beautiful-woman-cooking-something-in-the-kitchen.jpg?fj=1'),
('2', 'Ada', 'Would do again!', 'Had a great time with friends!'),
('3', 'Luis', 'Not for me', 'Glad a tried it but I probably would never do this again.'),

INSERT INTO users (email, username)
VALUES
('Tony@gmail.com','Tony'),
('Ada@gmail.com','Ada'),
('Luis@gmail.com','Luis'),


INSERT INTO users_activities( activity_id, user_id)
VALUES
(1,1),
(2,1),
(3,1),
(2,2),







 














