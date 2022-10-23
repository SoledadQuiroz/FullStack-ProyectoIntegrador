use gardeningfriend
insert into usuario values ('01','José','Gomez','josegomez@hotmail.com','jose2001','20011008')
insert into usuario values ('02','María','Díaz','mariad@gmail.com','mariad1234','19960120')
select *from usuario
insert into cultivo values ('01','Margaritas','Con flor','Plantas','Si','01')
insert into cultivo values ('02','Helecho','Sin flor','Plantas','No','02')
select *from cultivo
insert into crecimiento values ('01','10 a 15 días','A final de Invierno','Entre Junio y Julio','01')
insert into crecimiento values ('02','7 a 10 días', 'Entre Primavera y Verano', 'No posee', '02')
select * from crecimiento
insert into temperatura values ('01','20','20191001','09:25','01')
insert into temperatura values ('02','25','20201120','07:30','02')
select *from temperatura
insert into riego values ('01','Diario','20200101','10:30','01')
insert into riego values ('02','Diario','20210501','12:00','02')
select *from riego
insert into iluminación values ('01','Cuatro horas directas','01')
insert into iluminación values ('02','Sombra','02')
select *from iluminación
update cultivo set favorito = 'Si'where usuario_idUsuario =2
update usuario set apellido = 'Dominguez' where idusuario =2
select *from usuario inner join cultivo on usuario.idusuario= cultivo.idcultivo
select *from temperatura inner join Riego on temperatura.idtemperatura=Riego.idRiego


