CREATE TABLE skaters (
    id SERIAL, 
    email VARCHAR(50) NOT NULL,
    nombre VARCHAR(25) NOT NULL, 
    password VARCHAR(25) NOT NULL, 
    anos_experiencia INT NOT NULL, 
    especialidad VARCHAR(50) NOT NULL, 
    foto VARCHAR(255) NOT NULL, 
    estado BOOLEAN NOT NULL
);

INSERT 