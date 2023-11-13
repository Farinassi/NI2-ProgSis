create table jogos(

    id bigint not null auto_increment unique,
    nomeA varchar(50) not null unique,
    nomeB varchar(50) not null,
    golsA varchar(3) not null,
    golsB varchar(3) not null,

    primary key(id)

);