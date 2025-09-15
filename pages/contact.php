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

				<li class="theme-dependant no-bp <?=$_SESSION['theme']?>">

					<a class="p-link" href="https://github.com/andrec2709" target="_blank">
						<img id="github-icon" class="github-img-icon" src="" alt="Github">
						&nbsp;Github
					</a>

				</li>

				<li class="theme-dependant no-bp <?=$_SESSION['theme']?>">

					<a class="p-link" href="https://www.linkedin.com/in/andrecarvalhofilho/" target="_blank">
						<img id="linkedin-icon" class="linkedin-img-icon" src="" alt="Linkedin">
						&nbsp;Linkedin
					</a>

				</li>

			</ul>

			<h2 class="theme-dependant <?=$_SESSION['theme']?>"><?=$lang['heading_3']?></h2>

			<form method="post" action="" id="contact-me-form">

				<label for="username" class="theme-dependant form-label <?=$_SESSION['theme']?>"><?=$lang['name']?>:</label><br>
				<input maxlength="120" type="text" id="username" name="username" class="form-input-text theme-dependant <?=$_SESSION['theme']?>" aria-label="<?=$lang['name']?>">
				
				<br><br>

				<label for="email" class="theme-dependant form-label <?=$_SESSION['theme']?>">E-mail:</label><br>
				<input maxlength="240" type="email" id="email" name="email" class="form-input-email theme-dependant <?=$_SESSION['theme']?>" aria-label="e-mail">

				<br><br>

				<label for="message" class="theme-dependant form-label <?=$_SESSION['theme']?>"><?=$lang['message']?>:</label><br>
				<textarea name="message" id="message" id="" class="theme-dependant form-input-text <?=$_SESSION['theme']?>"></textarea>
			</form>

		</div>

		<script src="../scripts/main.js"></script>
	</body>
</html>
