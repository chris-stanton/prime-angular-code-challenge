-- Super Power table
CREATE TABLE super_powers (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
	description VARCHAR(150) NOT NULL
);

-- Super Power content
INSERT INTO super_powers (name, description)
VALUES ('Invisibility', 'Subject is able to become completely unseen to the unaided eye. Usually remains detectible with infrared sensors as well as auditory.'),
('Flight', 'Subject can defy gravity at will, requiring no obvious means of propulsion.'),
('Super Speed', 'Subject can move at high speeds. This can be running, swimming, or any other non-flight locomotion.'),
('Super Strength', 'Subject posseses physical strength well beyond the normal human range. Lift maximum is often measured in tons, not pounds.'),
('Accelerated Healing', 'Subject is able to heal physical wounds or illnesses at a rapid pace'),
('Power Blast', 'General. Subject can emit a dangerous energy from various parts of their body. Energy types vary.'),
('Animal Affinity', 'Subject can communicate with various animals. Sometimes this is limited to specific types of animals. ie: rodents, fish, etc.'),
('Telekineses', 'Subject can move physical items using only their thoughts.'),
('Invulnerability','Subject cannot be physically harmed. Impervious to bullets, blasts, fire, and most kinetic energy.'),
('Fire Control','Subject can emit and control flames, radiate heat or otherwise control heat energy.');

-- Heroes table
CREATE TABLE heroes (
	id SERIAL PRIMARY KEY,
	persona VARCHAR(120) UNIQUE NOT NULL,
	alias VARCHAR(200) NOT NULL,
	power_id INT REFERENCES super_powers
);

-- Heroes content
INSERT INTO heroes (persona, alias, power_id)
VALUES ('Cipher', 'Alisa Tager', 1),
('Vulcan', 'Gabriel Summers', 2),
('Thunderbird', 'John Proudstar', 3),
('Colossus', 'Piotr Nikolaievitch "Peter" Rasputin', 4),
('Wolverine', 'James "Logan" Howlett', 5),
('Cyclops', 'Scott Summers', 6),
('Overlay', 'Zach Halliwell', 7),
('Phoenix', 'Jean Grey-Summers', 8),
('Juggernaut', 'Cain Marko', 9),
('Match', 'Ben Hamill', 10);
