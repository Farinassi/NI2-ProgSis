create table paises(

    id bigint not null auto_increment unique,
    nome varchar(50) not null unique,
    continente varchar(50) not null,
    populacao varchar(8) not null,

    primary key(id)

);