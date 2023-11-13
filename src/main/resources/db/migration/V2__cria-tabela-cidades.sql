create table cidades(

    id bigint not null auto_increment unique,
    nome varchar(50) not null unique,
    estado VARCHAR(50) not null,
    pais varchar(50) not null,
    populacao varchar(8) not null,

    primary key(id)

);