<?php
$language = ($_GET['lang'] == 'pt') ? 'pt' : 'en';
include "../lang/$language.php";
?>


<!DOCTYPE html>

<html lang="<?=$language?>">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="In case you decide to reach out to me, for job opportunities and offers, please check the contact information on this page">
		<meta name="keywords" content="portfolio, developer, hire, freelance, showcase, opportunities, contact">
		<meta name="author" content="Andre Carvalho Filho">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title><?=$lang['main-page-title']?></title>
		<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
		<link rel="stylesheet" href="../styles/main.css">
	</head>
	<body>
		<?php include '../includes/header.php';?>


		<script src="../scripts/main.js"></script>
	</body>
</html>
