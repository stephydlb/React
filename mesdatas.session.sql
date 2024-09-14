
create table chatting(
    id int primary key auto_increment,
    name varchar(20),
    message varchar(100)
);

insert into chatting values(null, 'steve', 'bonjour comment ca va?');

INSERT INTO chatting (name, message) VALUES
('Alice', 'Bonjour tout le monde !'),
('Bob', 'Salut Alice, comment ça va ?'),
('Charlie', 'Je suis nouveau ici, ravi de vous rencontrer.'),
('Alice', 'Bienvenue Charlie !');

select * from chatting;

drop table chatting;
