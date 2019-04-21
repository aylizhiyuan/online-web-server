# Dump of table USER
# ------------------------------------------------------------

DROP TABLE IF EXISTS `USER`;

CREATE TABLE `USER` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `token` varchar(255) NOT NULL DEFAULT '',
  `roles` varchar(255) NOT NULL DEFAULT '',
  `avatar` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;

INSERT INTO `USER` (`id`, `username`, `password` , `roles` , `avatar`)
VALUES
	(1,'admin','e5d2a815230449badccf00bc67436696','admin','/static/default.jpeg');

INSERT INTO `USER` (`id`, `username`, `password` , `roles` , `avatar`)
VALUES
	(2,'editor','e5d2a815230449badccf00bc67436696','editor','/static/default.jpeg');

INSERT INTO `USER` (`id`, `username`, `password` , `roles` , `avatar`)
VALUES
	(3,'gust','e5d2a815230449badccf00bc67436696','gust','/static/default.jpeg');


/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;
