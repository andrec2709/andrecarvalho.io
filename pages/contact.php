<?php

include "../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?=$language?>">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="In case you decide to reach out to me, for job opportunities and offers, please check the contact information on this page">
		<meta name="keywords" content="portfolio, developer, hire, freelance, showcase, opportunities, contact">
		<meta name="author" content="Andre Carvalho Filho">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title><?=$lang['contact-page-title']?></title>
		<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
		<link rel="stylesheet" href="../styles/main.css">
	</head>
	<body>
		<?php include '../includes/header.php';?>
		<div class="main-content">
			<h1 class="theme-dependant <?=$_SESSION['theme']?>"><?=$lang['heading_1']?></h1>
			<p class="theme-dependant <?=$_SESSION['theme']?>"><?=$lang['paragraph_1']?></p>
			<h2 class="theme-dependant <?=$_SESSION['theme']?>"><?=$lang['heading_2']?></h2>
			<ul>
				<li class="theme-dependant no-bp <?=$_SESSION['theme']?>">Github</li>
				<li class="theme-dependant no-bp <?=$_SESSION['theme']?>">Linkedin</li>
			</ul>
		</div>
		<!-- <?php include '../includes/construction.php';?> -->

		<script src="../scripts/main.js"></script>
	</body>
</html>
