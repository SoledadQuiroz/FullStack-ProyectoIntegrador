-- MariaDB dump 10.19  Distrib 10.4.24-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: gardeningfriend
-- ------------------------------------------------------
-- Server version	10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `crecimiento`
--

DROP TABLE IF EXISTS `crecimiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crecimiento` (
  `idCrecimiento` int(11) NOT NULL AUTO_INCREMENT,
  `Tiempo de germinacion` varchar(45) NOT NULL,
  `Tiempo de siembra` varchar(45) NOT NULL,
  `Tiempo de cosecha` varchar(45) NOT NULL,
  `Cultivo_idCultivo` int(11) NOT NULL,
  PRIMARY KEY (`idCrecimiento`),
  KEY `fk_idCultivo` (`Cultivo_idCultivo`),
  CONSTRAINT `fk_idCultivo` FOREIGN KEY (`Cultivo_idCultivo`) REFERENCES `cultivo` (`idCultivo`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crecimiento`
--

LOCK TABLES `crecimiento` WRITE;
/*!40000 ALTER TABLE `crecimiento` DISABLE KEYS */;
/*!40000 ALTER TABLE `crecimiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cultivo`
--

DROP TABLE IF EXISTS `cultivo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cultivo` (
  `idCultivo` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Tipo` varchar(45) NOT NULL,
  `Categoria` varchar(45) NOT NULL,
  `Favorito` varchar(45) NOT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idCultivo`),
  KEY `fk_idUsuario` (`Usuario_idUsuario`),
  CONSTRAINT `fk_idUsuario` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cultivo`
--

LOCK TABLES `cultivo` WRITE;
/*!40000 ALTER TABLE `cultivo` DISABLE KEYS */;
/*!40000 ALTER TABLE `cultivo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `iluminación`
--

DROP TABLE IF EXISTS `iluminación`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `iluminación` (
  `idIluminación` int(11) NOT NULL,
  `Descripción` varchar(45) NOT NULL,
  `Riego_idRiego` int(11) NOT NULL,
  PRIMARY KEY (`idIluminación`),
  KEY `fk_idRiego` (`Riego_idRiego`),
  CONSTRAINT `fk_idRiego` FOREIGN KEY (`Riego_idRiego`) REFERENCES `riego` (`idRiego`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `iluminación`
--

LOCK TABLES `iluminación` WRITE;
/*!40000 ALTER TABLE `iluminación` DISABLE KEYS */;
/*!40000 ALTER TABLE `iluminación` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `riego`
--

DROP TABLE IF EXISTS `riego`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `riego` (
  `idRiego` int(11) NOT NULL,
  `Modo` varchar(45) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `Temperatura_idTemperatura` int(11) NOT NULL,
  PRIMARY KEY (`idRiego`),
  KEY `fk_idTemperatura` (`Temperatura_idTemperatura`),
  CONSTRAINT `fk_idTemperatura` FOREIGN KEY (`Temperatura_idTemperatura`) REFERENCES `temperatura` (`idTemperatura`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `riego`
--

LOCK TABLES `riego` WRITE;
/*!40000 ALTER TABLE `riego` DISABLE KEYS */;
/*!40000 ALTER TABLE `riego` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `temperatura`
--

DROP TABLE IF EXISTS `temperatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `temperatura` (
  `idTemperatura` int(11) NOT NULL AUTO_INCREMENT,
  `Valor temperatura` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Hora` time NOT NULL,
  `Crecimiento_idCrecimiento` int(11) NOT NULL,
  PRIMARY KEY (`idTemperatura`),
  KEY `fk_idCrecimiento` (`Crecimiento_idCrecimiento`),
  CONSTRAINT `fk_idCrecimiento` FOREIGN KEY (`Crecimiento_idCrecimiento`) REFERENCES `crecimiento` (`idCrecimiento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `temperatura`
--

LOCK TABLES `temperatura` WRITE;
/*!40000 ALTER TABLE `temperatura` DISABLE KEYS */;
/*!40000 ALTER TABLE `temperatura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Apellido` varchar(45) NOT NULL,
  `Email` varchar(45) NOT NULL,
  `Contraseña` varchar(10) NOT NULL,
  `Fecha Nacimiento` date NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-18 10:22:00
