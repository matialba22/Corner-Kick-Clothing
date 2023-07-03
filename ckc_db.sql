/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `ckc_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `ckc_db`;

CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

INSERT INTO `brands` (`id`, `brand_name`) VALUES
	(1, 'Nike'),
	(2, 'Adidas');

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

INSERT INTO `categories` (`id`, `category_name`) VALUES
	(1, 'Apparel'),
	(2, 'Footwear'),
	(3, 'Goalkeeper'),
	(4, 'Equipment');

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` varchar(50) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `brand_id` (`brand_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `products_ibfk_2` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` (`id`, `name`, `price`, `category_id`, `brand_id`) VALUES
	(1, 'Adidas predator accuracy.3 terreno firme', '49999', 2, 2),
	(2, 'Adidas predator edge.1 low terreno blando', '84099', 2, 2),
	(3, 'Adidas nemeziz 19+ terreno blando', '102199', 2, 2),
	(4, 'Adidas predator edge+ terreno blando', '102199', 2, 2),
	(5, 'Adidas predator freak.1 terreno firme', '71999', 2, 2),
	(6, 'Nike Phantom GT2 Elite FG', '134999', 2, 1),
	(7, 'Nike Phantom GT2 Elite FG', '134999', 2, 1),
	(8, 'Nike Phantom GX Pro FG', '79999', 2, 1),
	(9, 'Nike Zoom Mercurial Superfly 9 Elite CR7 FG', '165999', 2, 1),
	(10, 'Nike Mercurial Superfly 8 Elite FG', '149999', 2, 1);

CREATE TABLE IF NOT EXISTS `product_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;

INSERT INTO `product_images` (`id`, `product_id`, `image_url`) VALUES
	(1, 1, 'ad-pracc3fg-BP1'),
	(2, 1, 'ad-pracc3fg-BP2'),
	(3, 1, 'ad-pracc3fg-BP3'),
	(4, 2, 'ad-pre1tb-WRB1'),
	(5, 2, 'ad-pre1tb-WRB2'),
	(6, 2, 'ad-pre1tb-WRB3'),
	(7, 3, 'ad-nmz19-O1'),
	(8, 3, 'ad-nmz19-O2'),
	(9, 3, 'ad-nmz19-O3'),
	(10, 4, 'ad-prepl-WB1'),
	(11, 4, 'ad-prepl-WB2'),
	(12, 4, 'ad-prepl-WB3'),
	(13, 5, 'ad-prfk1-W1'),
	(14, 5, 'ad-prfk1-W2'),
	(15, 5, 'ad-prfk1-W3'),
	(16, 6, 'nk-phgt2elitefg-BY1'),
	(17, 6, 'nk-phgt2elitefg-BY2'),
	(18, 6, 'nk-phgt2elitefg-BY3'),
	(19, 7, 'nk-phgt2elitefg-BB1'),
	(20, 7, 'nk-phgt2elitefg-BB2'),
	(21, 7, 'nk-phgt2elitefg-BB3'),
	(22, 8, 'nk-phgxprofg-BW1'),
	(23, 8, 'nk-phgxprofg-BW2'),
	(24, 8, 'nk-phgxprofg-BW3'),
	(25, 9, 'nk-zmrcsf9elite-cr7fg1'),
	(26, 9, 'nk-zmrcsf9elite-cr7fg2'),
	(27, 9, 'nk-zmrcsf9elite-cr7fg3'),
	(28, 10, 'nk-mrcsf8elitefg-W1'),
	(29, 10, 'nk-mrcsf8elitefg-W2'),
	(30, 10, 'nk-mrcsf8elitefg-W3');

CREATE TABLE IF NOT EXISTS `product_sizes` (
  `product_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  PRIMARY KEY (`product_id`,`size_id`),
  KEY `size_id` (`size_id`),
  CONSTRAINT `product_sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `product_sizes_ibfk_2` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size_name` varchar(50) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `sizes_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

INSERT INTO `sizes` (`id`, `size_name`, `category_id`) VALUES
	(1, 'xs', 1),
	(2, 's', 1),
	(3, 'm', 1),
	(4, 'l', 1),
	(5, 'xl', 1),
	(6, '6.5', 2),
	(7, '7', 2),
	(8, '7.5', 2),
	(9, '8', 2),
	(10, '8.5', 2),
	(11, '9', 2),
	(12, '9.5', 2),
	(13, '10', 2),
	(14, '11', 2),
	(15, '12', 2),
	(16, '4', 3),
	(17, '5', 3),
	(18, '6', 3),
	(19, '7', 3),
	(20, '8', 3),
	(21, '9', 3),
	(22, '10', 3),
	(23, '11', 3);

CREATE TABLE IF NOT EXISTS `subcategories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subcategory_name` varchar(100) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `subcategories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

INSERT INTO `subcategories` (`id`, `subcategory_name`, `category_id`) VALUES
	(1, 'Jerseys', 1),
	(2, 'Shorts/Pants', 1),
	(3, 'Socks', 1),
	(4, 'Training tops', 1),
	(5, 'T-shirts', 1),
	(6, 'Accessories', 1),
	(7, 'Boots', 2),
	(8, 'Sandals', 2),
	(9, 'Gloves', 3),
	(10, 'Balls', 4),
	(11, 'Bags', 4),
	(12, 'Training', 4),
	(13, 'First aid and safety', 4),
	(14, 'Shin guards', 4),
	(15, 'Referee acc', 4);

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL DEFAULT '',
  `phone_number` varchar(50) DEFAULT NULL,
  `password` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
