<?php

include __DIR__ . "/../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?=$language?>" data-theme="<?=$_SESSION['theme']?>">
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="In case you decide to reach out to me, for job opportunities and offers, please check the contact information on this page">
		<meta name="keywords" content="portfolio, developer, hire, freelance, showcase, opportunities, contact">
		<meta name="author" content="Andre Carvalho Filho">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title><?=$lang['contact-page-title']?></title>
		<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
		<link rel="stylesheet" href="../styles/main.css">
		<link rel="stylesheet" href="../styles/contact.css">
		<script src="https://www.google.com/recaptcha/enterprise.js?render=<?=$recaptchaSite?>"></script>
	</head>
	<body class="theme-dependant">
 
		<?php include __DIR__ . '/../includes/header.php';?>
		<?php include __DIR__ . '/../includes/alert.php';?>

		<div class="main-content">

			<h1 class="theme-dependant custom-heading"><?=$lang['heading_1']?></h1>

			<p class="theme-dependant custom-para"><?=$lang['paragraph_1']?></p>

			<h2 class="theme-dependant custom-heading"><?=$lang['heading_2']?></h2>

			<ul class="theme-dependant no-bp">

				<li>

					<a class="p-link theme-dependant" href="https://github.com/andrec2709" target="_blank">
						<img id="github-icon" class="github-img-icon theme-dependant" data-dark-img="../assets/icons/github-mark-white.png" data-light-img="../assets/icons/github-mark.png" alt="Github">
						&nbsp;Github
					</a>

				</li>

				<li>

					<a class="p-link theme-dependant" href="https://www.linkedin.com/in/andrecarvalhofilho/" target="_blank">
						<img id="linkedin-icon" class="linkedin-img-icon theme-dependant" data-dark-img="../assets/icons/InBug-White.png" data-light-img="../assets/icons/InBug-Black.png" alt="Linkedin">
						&nbsp;Linkedin
					</a>

				</li>

			</ul>

			<h2 class="theme-dependant custom-heading"><?=$lang['heading_3']?></h2>

			<form id="contact-me-form" method="post">

				<label for="username" class="theme-dependant form-label"><?=$lang['name']?>:</label>
				<input required maxlength="120" type="text" id="username" name="username" class="form-input-text theme-dependant" aria-label="<?=$lang['name']?>">
				
				<label for="email" class="theme-dependant form-label">E-mail:</label>
				<input required maxlength="240" type="email" id="email" name="email" class="form-input-email theme-dependant" aria-label="e-mail">

				<label for="message" class="theme-dependant form-label"><?=$lang['message']?>:</label>
				<textarea required name="message" id="message" class="theme-dependant form-input-text"></textarea>
			
				<button id="submit-form-btn" data-sitekey="<?=$recaptchaSite?>" data-callback="onSubmit" data-action="submit" class="g-recaptcha theme-dependant form-submit"><?=$lang['send']?></button>
			
			</form>

		</div>

		<?php include __DIR__ . '/../includes/footer.php';?>

		<script src="../scripts/main.js"></script>
		<script src="../scripts/contact.js"></script>
	</body>
</html>
