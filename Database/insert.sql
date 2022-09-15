 id_user | name |  last_nameame   | phone_number  | user_name
---------+-----------+---------+---------------+-----------
       1 | Prince    | Abraham | +261348290618 | Abybgbe69

insert into users(id_user,name,last_name,phone_number,user_name,password,fk_role_id) values
(1,'Abraham','Prince','+261345678934','BgDeMada','abraham',1);

insert into users(id_user,name,last_name,phone_number,user_name,password,fk_role_id) values
(2,'Fanjasoa','Soa','+261345678901','Fanjasoa ratsy Kely','fanjasoa',2);

insert into users(id_user,name,last_name,phone_number,user_name,password,fk_role_id) values
(3,'Fanjasoa','SoaMariaka','+261335678901','PesudoTikoBe','soa',2);

insert into users(id_user,name,last_name,phone_number,user_name,password,fk_role_id) values
(4,'Raheriniriana','Valisoa','+261345378903','Akiziko','valisoa',2);

insert into users(id_user,name,last_name,phone_number,user_name,password,fk_role_id) values
(5,'Ramaro','Sandy','+261325688904','BigUp','sandy',2);

insert into users(id_user,name,last_name,phone_number,user_name,password,fk_role_id) values
(6,'Rakoto','Ndratianona','+261330532415','MiVida','neninay',2);

insert into users(id_user,name,last_name,phone_number,user_name,password,fk_role_id) values
(7,'RAMAROSANDY','Assael','+261344678901','Bota','assael',2);

insert into users(id_user,name,last_name,phone_number,user_name,password,fk_role_id) values
(8,'Aaron','Princy','+261345678934','RaBobo','princy',2);



 role_id | role_name
---------+-----------


insert into roles (role_id,role_name) values (1,'admin');
insert into roles (role_id,role_name) values (2,'member');


id_category | category_name 


insert into category(id_category,category_name) values
(1,'Football');


insert into category(id_category,category_name) values
(2,'BasketBall');

insert into category(id_category,category_name) values
(3,'Rugby');


 id_competitionition | compet_name | id_category

insert into competition(id_competition,compet_name,id_category) values
(1,'UEFA CHAMPIONS LEAGUES',1);

insert into competition(id_competition,compet_name,id_category) values
(2,'BARCLAYS PREMIER LEAGUE',1);

insert into competition(id_competition,compet_name,id_category) values
(3,'LA LIGA SANTANDER',1);

insert into competition(id_competition,compet_name,id_category) values
(4,'LIGUE1',1);

insert into competition(id_competition,compet_name,id_category) values
(5,'SERIE A',1);

insert into competition(id_competition,compet_name,id_category) values
(6,'BUNDESLIGA',1);

insert into competition(id_competition,compet_name,id_category) values
(7,'WEST CONFERENCE LEAGUE',2);

insert into competition(id_competition,compet_name,id_category) values
(8,'EAST CONFERENCE LEAGUE',2);

insert into competition(id_competition,compet_name,id_category) values
(9,'PLAY OFF',2);


id_team | country_team | team_name

insert into team_list(id_team,country_team,team_name) values
(1,'Manchester City','ENGLAND');

insert into team_list(id_team,country_team,team_name) values
(2,'Bayern Munich','GERMANY');

insert into team_list(id_team,country_team,team_name) values
(3,'Liverpool','ENGLAND');

insert into team_list(id_team,country_team,team_name) values
(4,'Chelsea Fc','ENGLAND');

insert into team_list(id_team,country_team,team_name) values
(5,'RB Leipzig','GERMANY');

insert into team_list(id_team,country_team,team_name) values
(6,'Borussia Dortmund','GERMANY');

insert into team_list(id_team,country_team,team_name) values
(7,'Paris Saint Germain','FRANCE');

insert into team_list(id_team,country_team,team_name) values
(8,'Juventus','ITALIA');

insert into team_list(id_team,country_team,team_name) values
(9,'Ac Milan','ITALIA');

insert into team_list(id_team,country_team,team_name) values
(10,'Fc Porto','PORTUGAL');

insert into team_list(id_team,country_team,team_name) values
(11,'Fc Barcelona','ESPAIN');

insert into team_list(id_team,country_team,team_name) values
(12,'Real de Madrid','ESPAIN');

insert into team_list(id_team,country_team,team_name) values
(13,'As Monaco','FRANCE');

insert into team_list(id_team,country_team,team_name) values
(14,'LA Lakers','USA');

insert into team_list(id_team,country_team,team_name) values
(15,'Bulls','USA');

insert into team_list(id_team,country_team,team_name) values
(16,'Portland','USA');

insert into team_list(id_team,country_team,team_name) values
(17,'Milwakee','USA');

insert into team_list(id_team,country_team,team_name) values
(18,'Golden State','USA');

insert into team_list(id_team,country_team,team_name) values
(19,'Cleveland Cavaliers','USA');

insert into team_list(id_team,country_team,team_name) values
(20,'Torronto Raptors','USA');

insert into team_list(id_team,country_team,team_name) values
(21,'Minesota','USA');

insert into team_list(id_team,country_team,team_name) values
(22,'Phoenix Suns','USA');

insert into team_list(id_team,country_team,team_name) values
(23,'Denver Nuggets','USA');



 id_game | broadcast_day | broadcast_time | team_away_rating | team_home_rating | id_competition | id_team_away | id_team_home

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(1,'14/09/2022','15:00 GMT',1,1.4,3,1.4,2);

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(2,'15/09/2022','16:00 GMT',6,1.4,2,3.3,6);

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(3,'16/09/2022','17:00 GMT',11,2,12,2,3);

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(4,'17/09/2022','18:00 GMT',11,2,12,2,3);

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(5,'18/09/2022','19:00 GMT',7,4,14,1,4);

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(6,'19/09/2022','20:00 GMT',8,1,9,1,5);

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(7,'20/09/2022','21:00 GMT',20,1.09,15,4.9,7);

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(8,'21/09/2022','22:00 GMT',18,3.09,21,1.78,8);

insert into game_list(id_game,broadcast_day,broadcast_time,id_team_home,team_home_rating,id_team_away,team_away_rating,id_competition) values
(9,'22/09/2022','23:00 GMT',19,3.09,22,5.06,9);




 id_bet | bet_stake | stake_date | status | id_game
--------+-----------+------------+--------+---------

insert into bet_stake(id_bet,bet_stake,stake_date,status,id_game) values
(1,2000,current_date,'win',1);

insert into bet_stake(id_bet,bet_stake,stake_date,status,id_game) values
(2,1000000,current_date,'lose',5);

insert into bet_stake(id_bet,bet_stake,stake_date,status,id_game) values
(3,30000,current_date,'win',4);

insert into bet_stake(id_bet,bet_stake,stake_date,status,id_game) values
(4,2000,current_date,'lose',3);

insert into bet_stake(id_bet,bet_stake,stake_date,status,id_game) values
(5,500,current_date,'win',8);

insert into bet_stake(id_bet,bet_stake,stake_date,status,id_game) values
(6,500,current_date,'lose',7);

 bet_id_bet | id_user_id_user
------------+-----------------

insert into bet_stake_id_user(bet_id_bet,id_user_id_user) values
(1,1);

insert into bet_stake_id_user(bet_id_bet,id_user_id_user) values
(3,2);

insert into bet_stake_id_user(bet_id_bet,id_user_id_user) values
(4,3);

insert into bet_stake_id_user(bet_id_bet,id_user_id_user) values
(1,4);

insert into bet_stake_id_user(bet_id_bet,id_user_id_user) values
(4,5);

insert into bet_stake_id_user(bet_id_bet,id_user_id_user) values
(4,4);
