-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dev-codearena
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dev-codearena
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dev-codearena` ;
USE `dev-codearena` ;

-- -----------------------------------------------------
-- Table `dev-codearena`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dev-codearena`.`User` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `birth_date` DATE NULL,
  `country` VARCHAR(45) NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE INDEX `idUser_UNIQUE` (`idUser` ASC) VISIBLE)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `dev-codearena`.`Problem`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dev-codearena`.`Problem` (
  `idProblem` INT NOT NULL,
  `body` VARCHAR(45) NULL,
  `tags` VARCHAR(45) NULL,
  `difficulty` VARCHAR(45) NULL,
  `title` VARCHAR(45) NULL,
  PRIMARY KEY (`idProblem`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `dev-codearena`.`TestCase`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dev-codearena`.`TestCase` (
  `idTestCase` INT NOT NULL AUTO_INCREMENT,
  `inputs` VARCHAR(45) NULL,
  `outputs` VARCHAR(45) NULL,
  `problem_id` INT NULL,
  `Problem_idProblem` INT NOT NULL,
  PRIMARY KEY (`idTestCase`, `Problem_idProblem`),
  INDEX `fk_TestCase_Problem1_idx` (`Problem_idProblem` ASC) VISIBLE,
  CONSTRAINT `fk_TestCase_Problem1`
    FOREIGN KEY (`Problem_idProblem`)
    REFERENCES `dev-codearena`.`Problem` (`idProblem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dev-codearena`.`ProblemProgress`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dev-codearena`.`ProblemProgress` (
  `idUserProgress` INT NOT NULL,
  `statue` VARCHAR(45) NULL,
  `User_idUser` INT NOT NULL,
  `Problem_idProblem` INT NOT NULL,
  PRIMARY KEY (`idUserProgress`, `User_idUser`, `Problem_idProblem`),
  INDEX `fk_ProblemProgress_User_idx` (`User_idUser` ASC) VISIBLE,
  INDEX `fk_ProblemProgress_Problem1_idx` (`Problem_idProblem` ASC) VISIBLE,
  CONSTRAINT `fk_ProblemProgress_User`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `dev-codearena`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ProblemProgress_Problem1`
    FOREIGN KEY (`Problem_idProblem`)
    REFERENCES `dev-codearena`.`Problem` (`idProblem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dev-codearena`.`Solution`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dev-codearena`.`Solution` (
  `idSolution` INT NOT NULL,
  `idUser` VARCHAR(45) NULL,
  `idProblem` VARCHAR(45) NULL,
  `body` VARCHAR(45) NULL,
  `submitted_at` DATE NULL,
  `language` VARCHAR(45) NULL,
  `status` VARCHAR(45) NULL,
  `execution_time` VARCHAR(45) NULL,
  `memory_usage` VARCHAR(45) NULL,
  `Problem_idProblem` INT NOT NULL,
  `User_idUser` INT NOT NULL,
  PRIMARY KEY (`idSolution`, `Problem_idProblem`, `User_idUser`),
  INDEX `fk_Solution_Problem1_idx` (`Problem_idProblem` ASC) VISIBLE,
  INDEX `fk_Solution_User1_idx` (`User_idUser` ASC) VISIBLE,
  CONSTRAINT `fk_Solution_Problem1`
    FOREIGN KEY (`Problem_idProblem`)
    REFERENCES `dev-codearena`.`Problem` (`idProblem`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Solution_User1`
    FOREIGN KEY (`User_idUser`)
    REFERENCES `dev-codearena`.`User` (`idUser`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dev-codearena`.`Container`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dev-codearena`.`Container` (
  `idcontainer` INT NOT NULL,
  `status` VARCHAR(45) NULL,
  `image` VARCHAR(45) NULL,
  `language` VARCHAR(45) NULL,
  PRIMARY KEY (`idcontainer`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
