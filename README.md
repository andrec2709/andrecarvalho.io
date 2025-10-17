# andrecarvalho.io
Repository for andrecarvalho.io website.

The purpose for this repository is to be part of my portfolio, it is a demonstration of my knowledge with:

- HTML
- CSS
- JavaScript
- PHP
- Setting up a web server
- Version control with Git
- Etc.

I also would like to mention this is my first time building a real, live website, so I am learning many new things along the way, making many mistakes, and learning from them as well.


## Run locally

If you wish to run this project locally, here is what you will have to do:

1. You will need to setup an environment variable named CONFIG_PATH, which points to your config.php file.

	Your config.php file needs to contain the following variables:
	- $recaptchaSite - this is your Google Cloud's recaptcha Key ID, it will be used to create assessments with the google cloud API. You can find this by going to [gCloud Console](https://console.cloud.google.com), and using the search bar, lookup "recaptcha" and you will be able to find your existing keys, or create a new one.
	- $mysqlSecret - your mysql database secret.
	- $mysqlUser - your mysql database user.
	- $mysqlDB - the name of your mysql database.
	- $projectID - this is your Google Cloud's project ID. You can find it by going to [gCloud Console](https://console.cloud.google.com), opening your Project Settings (inside "three dots" icon), and your project ID will be there.


2. Your database should have two tables, named "repos" and "total_commits". 

	- Use this DDL to create the table "repos":

		 ```
			CREATE TABLE `repos` (
			  `id` varchar(20) NOT NULL,
			  `repo_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
			  `description` varchar(255) DEFAULT 'No description',
			  `updated_at` datetime NOT NULL,
			  `commits_url` varchar(255) NOT NULL,
			  `avatar_url` varchar(255) NOT NULL,
			  PRIMARY KEY (`id`)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

	- Use this DDL to create the table "total_commits":

		```
		  CREATE TABLE `total_commits` (
			  `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
			  `commits` int NOT NULL DEFAULT '0',
			  UNIQUE KEY `total_commits_unique` (`id`),
			  CONSTRAINT `total_commits_ibfk_1` FOREIGN KEY (`id`) REFERENCES `repos` (`id`)
			) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
	
3. Make sure you have [Composer](https://getcomposer.org/doc/00-intro.md) set up, in order to install the google cloud recaptcha dependencies.

With this setup, you should be able to run the project locally.
