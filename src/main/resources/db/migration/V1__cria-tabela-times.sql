create table times(

    id bigint not null auto_increment,
    nome varchar(50) not null unique,
    anofund int not null,
    cidade varchar(50) not null,
    estado varchar(50) not null,

    primary key(id)

);