CREATE TABLE distance_app.search_history(
    id                  INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    datetime            timestamp NOT NULL DEFAULT current_timestamp,
    sourceAddress       varchar(150) NOT NULL,
    destinationAddress  varchar(150) NOT NULL,
    miles               NUMERIC(10,2) NOT NULL
);

GRANT ALL PRIVILEGES ON distance_app TO distance_app_user;