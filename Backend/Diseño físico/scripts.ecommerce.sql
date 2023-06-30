-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema gardeningfriend
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema gardeningfriend
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `gardeningfriend` DEFAULT CHARACTER SET utf8mb4 ;
USE `gardeningfriend` ;

-- -----------------------------------------------------
-- Table `gardeningfriend`.`Provincia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Provincia` (
  `id_provincia` INT(15) NOT NULL AUTO_INCREMENT,
  `provincia` VARCHAR(25) NULL DEFAULT NULL,
  PRIMARY KEY (`id_provincia`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Ciudad`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Ciudad` (
  `id_ciudad` INT(15) NOT NULL AUTO_INCREMENT,
  `ciudad` VARCHAR(25) NULL DEFAULT NULL,
  `id_provincia1` INT(15) NOT NULL,
  PRIMARY KEY (`id_ciudad`),
  INDEX `id_provincia1` (`id_provincia1` ASC),
  CONSTRAINT `id_provincia1`
    FOREIGN KEY (`id_provincia1`)
    REFERENCES `gardeningfriend`.`Provincia` (`id_provincia`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Usuario` (
  `id_usuario` INT(15) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(35) NOT NULL,
  `apellido` VARCHAR(35) NOT NULL,
  `edad` DATETIME NULL,
  `direccion` VARCHAR(35) NULL DEFAULT NULL,
  `telefono` BIGINT(15) NULL DEFAULT NULL,
  `email` VARCHAR(25) NOT NULL,
  `pasword` VARCHAR(15) NOT NULL,
  `id_ciudad1` INT(15) NOT NULL,
  PRIMARY KEY (`id_usuario`),
  INDEX `id_ciudad1` (`id_ciudad1` ASC),
  CONSTRAINT `id_ciudad1`
    FOREIGN KEY (`id_ciudad1`)
    REFERENCES `gardeningfriend`.`Ciudad` (`id_ciudad`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Cultivo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Cultivo` (
  `id_cultivo` INT(15) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(35) NOT NULL,
  `tipo` VARCHAR(35) NULL DEFAULT NULL,
  `favorito` VARCHAR(35) NULL DEFAULT NULL,
  `categoria` VARCHAR(35) NULL DEFAULT NULL,
  `id_usuario1` INT(15) NOT NULL,
  PRIMARY KEY (`id_cultivo`),
  INDEX `id_usuario1` (`id_usuario1` ASC),
  CONSTRAINT `id_usuario1`
    FOREIGN KEY (`id_usuario1`)
    REFERENCES `gardeningfriend`.`Usuario` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Crecimiento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Crecimiento` (
  `id_crecimiento` INT(15) NOT NULL AUTO_INCREMENT,
  `cosecha` VARCHAR(35) NULL DEFAULT NULL,
  `siembra` VARCHAR(35) NULL DEFAULT NULL,
  `germinacion` VARCHAR(35) NULL DEFAULT NULL,
  `id_cultivo1` INT(15) NOT NULL,
  PRIMARY KEY (`id_crecimiento`),
  INDEX `id_cultivo1` (`id_cultivo1` ASC),
  CONSTRAINT `id_cultivo1`
    FOREIGN KEY (`id_cultivo1`)
    REFERENCES `gardeningfriend`.`Cultivo` (`id_cultivo`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Factura` (
  `id_factura` INT(15) NOT NULL AUTO_INCREMENT,
  `total` INT(15) NULL DEFAULT NULL,
  `tipo` INT(15) NULL DEFAULT NULL,
  `dir_envio` VARCHAR(35) NOT NULL,
  `fk_id_usuario1` INT(15) NOT NULL,
  `fk_id_ciudad1` INT(15) NOT NULL,
  PRIMARY KEY (`id_factura`),
  INDEX `fk_id_usuario1` (`fk_id_usuario1` ASC),
  INDEX `fk_id_ciudad1` (`fk_id_ciudad1` ASC),
  CONSTRAINT `fk_id_ciudad1`
    FOREIGN KEY (`fk_id_ciudad1`)
    REFERENCES `gardeningfriend`.`Ciudad` (`id_ciudad`),
  CONSTRAINT `fk_id_usuario1`
    FOREIGN KEY (`fk_id_usuario1`)
    REFERENCES `gardeningfriend`.`Usuario` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Jardin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Jardin` (
  `id_jardin` INT(15) NOT NULL AUTO_INCREMENT,
  `nombre_cultivo` VARCHAR(45) NULL DEFAULT NULL,
  `fecha_siembra` DATE NULL DEFAULT NULL,
  `fecha_germinacion` DATE NULL DEFAULT NULL,
  `id_cultivo` INT(15) NULL DEFAULT NULL,
  `id_crecimiento` INT(15) NULL DEFAULT NULL,
  `id_usuario` INT(15) NULL DEFAULT NULL,
  PRIMARY KEY (`id_jardin`),
  INDEX `id_cultivo` (`id_cultivo` ASC),
  INDEX `id_crecimiento` (`id_crecimiento` ASC),
  INDEX `id_usuario` (`id_usuario` ASC),
  CONSTRAINT `id_crecimiento`
    FOREIGN KEY (`id_crecimiento`)
    REFERENCES `gardeningfriend`.`Crecimiento` (`id_crecimiento`),
  CONSTRAINT `id_cultivo`
    FOREIGN KEY (`id_cultivo`)
    REFERENCES `gardeningfriend`.`Cultivo` (`id_cultivo`),
  CONSTRAINT `id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `gardeningfriend`.`Usuario` (`id_usuario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Tipo_Prod`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Tipo_Prod` (
  `id_tipo_prod` INT(15) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(35) NOT NULL,
  PRIMARY KEY (`id_tipo_prod`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Producto` (
  `id_producto` INT(15) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `descripcion` VARCHAR(45) NULL,
  `precio` DECIMAL(10) NULL,
  `peso` DECIMAL(10) NULL,
  `cantidad` INT(50) NULL DEFAULT NULL,
  `fecha_ingreso` DATE NULL DEFAULT NULL,
  `id_tipo_prod1` INT(15) NOT NULL,
  PRIMARY KEY (`id_producto`),
  INDEX `id_tipo_prod1` (`id_tipo_prod1` ASC),
  CONSTRAINT `id_tipo_prod1`
    FOREIGN KEY (`id_tipo_prod1`)
    REFERENCES `gardeningfriend`.`Tipo_Prod` (`id_tipo_prod`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `gardeningfriend`.`Detalle_Factura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `gardeningfriend`.`Detalle_Factura` (
  `cantidad` INT(50) NOT NULL,
  `descripcion` VARCHAR(35) NULL DEFAULT NULL,
  `descuento` FLOAT NULL DEFAULT NULL,
  `id_factura` INT(15) NULL,
  `id_producto` INT(15) NULL,
  INDEX `id_factura_idx` (`id_factura` ASC),
  INDEX `id_producto_idx` (`id_producto` ASC),
  CONSTRAINT `id_factura`
    FOREIGN KEY (`id_factura`)
    REFERENCES `gardeningfriend`.`Factura` (`id_factura`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_producto`
    FOREIGN KEY (`id_producto`)
    REFERENCES `gardeningfriend`.`Producto` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
