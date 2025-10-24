<?php

include __DIR__ . "/../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?= $language ?>" data-theme="<?= $_SESSION['theme'] ?>">

<head>
	<meta charset="UTF-8">
	<meta name="description"
		content="In case you decide to reach out to me, for job opportunities and offers, please check the contact information on this page">
	<meta name="keywords" content="portfolio, developer, hire, freelance, showcase, opportunities, contact">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title data-i18n="contact.title">
		<?= $lang['contact']['title'] ?>
	</title>
	<link rel="shortcut icon" href="../assets/icons/favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="../styles/main.css">
	<link rel="stylesheet" href="../styles/contact.css">
	<script src="https://www.google.com/recaptcha/enterprise.js?render=<?= $recaptchaSite ?>"></script>
	<script>
		const theme = localStorage.getItem('theme') || 'light';
		document.documentElement.classList.add(`theme-${theme}`);
	</script>

</head>

<body class="theme-dependant">

	<?php include __DIR__ . '/../includes/header.php'; ?>
	<?php include __DIR__ . '/../includes/alert.php'; ?>

	<div class="main-content">

		<h1 class="theme-dependant custom-heading" data-i18n="contact.heading_1">
			<?= $lang['contact']['heading_1'] ?>
		</h1>

		<p class="theme-dependant custom-para" data-i18n="contact.paragraph_1">
			<?= $lang['contact']['paragraph_1'] ?>
		</p>

		<h2 class="theme-dependant custom-heading" data-i18n="contact.heading_2">
			<?= $lang['contact']['heading_2'] ?>
		</h2>

		<ul class="theme-dependant no-bp">

			<li>

				<a class="p-link theme-dependant" href="https://github.com/andrec2709" target="_blank">
					<img id="github-icon" class="github-img-icon theme-dependant"
						data-dark-img="../assets/icons/github-mark-white.png"
						data-light-img="../assets/icons/github-mark.png" alt="Github">
					&nbsp;Github
				</a>

			</li>

			<li>

				<a class="p-link theme-dependant" href="https://www.linkedin.com/in/andrecarvalhofilho/"
					target="_blank">
					<img id="linkedin-icon" class="linkedin-img-icon theme-dependant"
						data-dark-img="../assets/icons/InBug-White.png" data-light-img="../assets/icons/InBug-Black.png"
						alt="Linkedin">
					&nbsp;Linkedin
				</a>

			</li>

		</ul>

		<h2 class="theme-dependant custom-heading" data-i18n="contact.heading_3">
			<?= $lang['contact']['heading_3'] ?>
		</h2>

		<form id="contact-me-form" method="post">

			<label for="username" class="theme-dependant form-label" data-i18n="contact.name">
				<?= $lang['contact']['name'] ?>:
			</label>
			<input required maxlength="120" type="text" id="username" name="username"
				class="form-input-text theme-dependant" aria-label="<?= $lang['contact']['name'] ?>">

			<label for="email" class="theme-dependant form-label">E-mail:</label>
			<input required maxlength="240" type="email" id="email" name="email"
				class="form-input-email theme-dependant" aria-label="e-mail">

			<label for="message" class="theme-dependant form-label" data-i18n="contact.message">
				<?= $lang['contact']['message'] ?>:
			</label>
			<textarea required name="message" id="message" class="theme-dependant form-input-text"></textarea>

			<button id="submit-form-btn" data-sitekey="<?= $recaptchaSite ?>" data-callback="onSubmit"
				data-action="submit" class="g-recaptcha theme-dependant form-submit" data-i18n="contact.send">
				<?= $lang['contact']['send'] ?>
			</button>

		</form>

	</div>

	<?php include __DIR__ . '/../includes/footer.php'; ?>

	<script src="../scripts/main.js"></script>
	<script src="../scripts/contact.js"></script>
</body>

</html>