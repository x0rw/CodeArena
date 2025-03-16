-- MySQL dump 10.13  Distrib 8.0.41, for Linux (x86_64)
--
-- Host: localhost    Database: dev-codearena
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Container`
--

DROP TABLE IF EXISTS `Container`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Container` (
  `idcontainer` int NOT NULL AUTO_INCREMENT,
  `status` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `image` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `language` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`idcontainer`),
  UNIQUE KEY `idcontainer_UNIQUE` (`idcontainer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Container`
--

LOCK TABLES `Container` WRITE;
/*!40000 ALTER TABLE `Container` DISABLE KEYS */;
/*!40000 ALTER TABLE `Container` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Problem`
--

DROP TABLE IF EXISTS `Problem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Problem` (
  `idProblem` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `body` text,
  `tags` varchar(45) DEFAULT NULL,
  `difficulty` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idProblem`),
  UNIQUE KEY `idProblem_UNIQUE` (`idProblem`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Problem`
--

LOCK TABLES `Problem` WRITE;
/*!40000 ALTER TABLE `Problem` DISABLE KEYS */;
INSERT INTO `Problem` VALUES (1,'The smallest child','Problem !','greedy,algo','Hard'),(2,'binary tree implementation','Go gof ofo ','binary tree','Easy'),(3,' Two Sum','Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\n\nYou can return the answer in any order.\n\n','greedy, arrays, two pointers','Easy'),(4,'3sum','Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.\n\nNotice that the solution set must not contain duplicate triplets.','Array Pointers Sorting','Medium'),(5,'Merge Sorted Array','You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.\n\nMerge nums1 and nums2 into a single array sorted in non-decreasing order.\n\nThe final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.','Array\nTwo Pointers\nSorting','Easy'),(6,'Remove Duplicates from Sorted Array II\n','Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.\n\nSince it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.\n\nReturn k after placing the final result in the first k slots of nums.\n\nDo not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.','Two Pointers','medium'),(7,'4sum','body body built like soda','two pointers','Hard'),(8,'hello from this side','hello test','two pointers','Hardello');
/*!40000 ALTER TABLE `Problem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ProblemProgress`
--

DROP TABLE IF EXISTS `ProblemProgress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProblemProgress` (
  `idUserProgress` int NOT NULL AUTO_INCREMENT,
  `statue` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `User_idUser` int NOT NULL,
  `Problem_idProblem` int NOT NULL,
  PRIMARY KEY (`idUserProgress`,`User_idUser`,`Problem_idProblem`),
  UNIQUE KEY `idUserProgress_UNIQUE` (`idUserProgress`),
  KEY `fk_ProblemProgress_User_idx` (`User_idUser`),
  KEY `fk_ProblemProgress_Problem1_idx` (`Problem_idProblem`),
  CONSTRAINT `fk_ProblemProgress_Problem1` FOREIGN KEY (`Problem_idProblem`) REFERENCES `Problem` (`idProblem`),
  CONSTRAINT `fk_ProblemProgress_User` FOREIGN KEY (`User_idUser`) REFERENCES `User` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProblemProgress`
--

LOCK TABLES `ProblemProgress` WRITE;
/*!40000 ALTER TABLE `ProblemProgress` DISABLE KEYS */;
/*!40000 ALTER TABLE `ProblemProgress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Solution`
--

DROP TABLE IF EXISTS `Solution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Solution` (
  `idSolution` int NOT NULL AUTO_INCREMENT,
  `idUser` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `idProblem` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `body` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `submitted_at` date DEFAULT NULL,
  `language` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `status` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `execution_time` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `memory_usage` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Problem_idProblem` int NOT NULL,
  `User_idUser` int NOT NULL,
  PRIMARY KEY (`idSolution`,`Problem_idProblem`,`User_idUser`),
  UNIQUE KEY `idSolution_UNIQUE` (`idSolution`),
  KEY `fk_Solution_Problem1_idx` (`Problem_idProblem`),
  KEY `fk_Solution_User1_idx` (`User_idUser`),
  CONSTRAINT `fk_Solution_Problem1` FOREIGN KEY (`Problem_idProblem`) REFERENCES `Problem` (`idProblem`),
  CONSTRAINT `fk_Solution_User1` FOREIGN KEY (`User_idUser`) REFERENCES `User` (`idUser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Solution`
--

LOCK TABLES `Solution` WRITE;
/*!40000 ALTER TABLE `Solution` DISABLE KEYS */;
/*!40000 ALTER TABLE `Solution` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TestCase`
--

DROP TABLE IF EXISTS `TestCase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `TestCase` (
  `idTestCase` int NOT NULL AUTO_INCREMENT,
  `inputs` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `outputs` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `problem_id` int DEFAULT NULL,
  `Problem_idProblem` int NOT NULL,
  PRIMARY KEY (`idTestCase`,`Problem_idProblem`),
  UNIQUE KEY `idTestCase_UNIQUE` (`idTestCase`),
  KEY `fk_TestCase_Problem1_idx` (`Problem_idProblem`),
  CONSTRAINT `fk_TestCase_Problem1` FOREIGN KEY (`Problem_idProblem`) REFERENCES `Problem` (`idProblem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TestCase`
--

LOCK TABLES `TestCase` WRITE;
/*!40000 ALTER TABLE `TestCase` DISABLE KEYS */;
/*!40000 ALTER TABLE `TestCase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `idUser_UNIQUE` (`idUser`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-16 22:37:51
