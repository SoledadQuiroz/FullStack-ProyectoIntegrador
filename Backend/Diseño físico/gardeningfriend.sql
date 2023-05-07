use gardeningfriend;
create table provincia(
id_provincia int(15) not null auto_increment,
provincia Varchar(25),
PRIMARY KEY (id_provincia)
);
create table ciudad(
id_ciudad int(15) not null auto_increment,
ciudad Varchar(25),
id_provincia1 int(15) not null,
PRIMARY key(id_ciudad),
Constraint id_provincia1
Foreign key (id_provincia1)
References provincia(id_provincia)
);
create table usuario(
id_usuario int(15) not null auto_increment,
nombre Varchar(35) not null,
apellido Varchar(35) not null,
direccion Varchar(35),
provincia Varchar(35),
ciudad Varchar(35),
correo Varchar(25) not null,
celular bigint(15),
pasword Varchar(15) not null,
id_ciudad1 int(15) not null,
PRIMARY KEY (id_usuario),
constraint id_ciudad1
Foreign key (id_ciudad1)
References ciudad(id_ciudad)
);
create table cultivo(
id_cultivo int(15) not null auto_increment,
nombre Varchar(35) not null,
tipo Varchar(35),
favorito Varchar(35),
categoria Varchar(35),
id_usuario1 int(15) not null,
PRIMARY KEY (id_cultivo),
Constraint id_usuario1
Foreign key (id_usuario1)
References usuario(id_usuario)
);
create table crecimiento(
id_crecimiento int(15) not null auto_increment,
cosecha Varchar(35),
siembra Varchar(35),
germinacion Varchar(35),
id_cultivo1 int(15) not null,
PRIMARY KEY (id_crecimiento),
Constraint id_cultivo1
Foreign key (id_cultivo1)
References cultivo(id_cultivo)
);
create table jardin(
id_jardin int(15) Not null auto_increment,
nombre_cultivo Varchar(45),
fecha_siembra Date,
fecha_germinacion Date,
id_cultivo int(15),
id_crecimiento int(15),
id_usuario int(15),
PRIMARY KEY (id_jardin),
Constraint id_cultivo
Foreign key(id_cultivo)
References cultivo(id_cultivo),
Constraint id_crecimiento
Foreign key (id_crecimiento)
References crecimiento(id_crecimiento),
Constraint id_usuario
Foreign key(id_usuario)
References usuario(id_usuario)
);
create table tipo_prod(
id_tipo_prod int(15) not null auto_increment,
nombre Varchar(35) not null,
PRIMARY KEY(id_tipo_prod)
);
create table producto(
id_producto int(15) not null auto_increment,
costo int(15),
valor int(15),
fecha_ingreso Date,
cantidad int(50),
id_tipo_prod1 int(15) not null,
PRIMARY KEY(id_producto),
Constraint id_tipo_prod1
Foreign key (id_tipo_prod1)
References tipo_prod(id_tipo_prod)
);
create table factura(
id_factura int(15) not null auto_increment,
total int(15),
tipo int(15),
fecha_apertura Date,
fecha_cierre Date,
dir_envio Varchar(35) not null,
fk_id_usuario1 int(15)not null,
fk_id_ciudad1 int(15) not null,
fk_id_provincia1 int(15) not null,
PRIMARY KEY (id_factura),
Constraint fk_id_usuario1
Foreign key (fk_id_usuario1)
References usuario(id_usuario),
Constraint fk_id_ciudad1
Foreign key (fk_id_ciudad1)
References ciudad(id_ciudad),
Constraint fk_id_provincia1
Foreign key (fk_id_provincia1)
References provincia(id_provincia)
);
create table venta(
id_venta int(15) not null auto_increment,
cantidad int(50),
estado Varchar(35),
descuento Float,
id_producto int(15),
id_factura int(15),
PRIMARY KEY(id_venta),
Constraint id_producto
Foreign key (id_producto)
References producto(id_producto),
Constraint id_factura
Foreign key (id_factura)
References factura(id_factura)
);


