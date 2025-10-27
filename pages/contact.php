<?php

include __DIR__ . "/../api/StartSession.php";

?>



<!DOCTYPE html>

<html lang="<?= $language ?>">

<head>
	<meta charset="UTF-8">
	<meta name="description"
		content="<?= $lang['contact']['description'] ?>">
	<meta name="keywords" content="<?= $lang['contact']['keywords'] ?>">
	<meta name="author" content="Andre Carvalho Filho">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title data-i18n="contact.title">
		<?= $lang['contact']['title'] ?>
	</title>
	<link rel="canonical" href="https://andrecarvalho.io/pages/contact.php">
	<link rel="icon" href="/favicon.svg" type="image/x-icon">
	<link rel="stylesheet" href="../styles/main.css">
	<link rel="stylesheet" href="../styles/contact.css">
	<script src="https://www.google.com/recaptcha/enterprise.js?render=<?= $recaptchaSite ?>"></script>
	<script>
		const theme = localStorage.getItem('theme') || '<?= $DEFAULT_THEME ?>';
		document.documentElement.classList.add(`theme-${theme}`);
	</script>

</head>

<body>

	<?php include __DIR__ . '/../includes/header.php'; ?>
	<?php include __DIR__ . '/../includes/alert.php'; ?>

	<main class="main-content">
		<section class="information-section">
			<h1 data-i18n="contact.heading_1">
				<?= $lang['contact']['heading_1'] ?>
			</h1>

			<p data-i18n="contact.paragraph_1">
				<?= $lang['contact']['paragraph_1'] ?>
			</p>

			<h2 data-i18n="contact.heading_2">
				<?= $lang['contact']['heading_2'] ?>
			</h2>

			<ul class="no-bp">

				<li>

					<a class="p-link " href="https://github.com/andrec2709" target="_blank">
						<img id="github-icon" class="github-img-icon icon" src="/assets/icons/github-mark.png" alt="Github">
						&nbsp;Github
					</a>

				</li>

				<li>

					<a class="p-link" href="https://www.linkedin.com/in/andrecarvalhofilho/"
						target="_blank">
						<img id="linkedin-icon" class="linkedin-img-icon icon" src="/assets/icons/InBug-Black.png" alt="Linkedin">
						&nbsp;Linkedin
					</a>

				</li>

			</ul>
		</section>
		<section class="contact-section">
			<h2 data-i18n="contact.heading_3">
				<?= $lang['contact']['heading_3'] ?>
			</h2>

			<form id="contact-me-form" method="post">

				<label for="username" class=" form-label" data-i18n="contact.name">
					<?= $lang['contact']['name'] ?>:
				</label>
				<input required maxlength="120" type="text" id="username" name="username"
					class="form-input-text " aria-label="<?= $lang['contact']['name'] ?>">

				<label for="email" class=" form-label">E-mail:</label>
				<input required maxlength="240" type="email" id="email" name="email"
					class="form-input-email " aria-label="e-mail">

				<label for="message" class=" form-label" data-i18n="contact.message">
					<?= $lang['contact']['message'] ?>:
				</label>
				<textarea required name="message" id="message" class=" form-input-text"></textarea>

				<button id="submit-form-btn" data-sitekey="<?= $recaptchaSite ?>" data-callback="onSubmit"
					data-action="submit" class="g-recaptcha  form-submit" data-i18n="contact.send">
					<?= $lang['contact']['send'] ?>
				</button>

			</form>
		</section>

	</main>

	<?php include __DIR__ . '/../includes/footer.php'; ?>

	<script src="../scripts/main.js"></script>
	<script src="../scripts/contact.js"></script>
</body>

</html>