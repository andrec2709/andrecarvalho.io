# andrecarvalho.io

Repository for andrecarvalho.io website.

The purpose for this repository is to be part of my portfolio, it is a demonstration of my knowledge with:

- React
- React Router
- TypeScript
- PHP
- Working with GraphQL and REST API's
- Software Architecture 
- Setting up a web server
- Version control with Git
- Etc

I also would like to mention this is my first time building a real, live website, so I am learning many new things along the way, making many mistakes, and learning from them as well.

## Run Locally

Follow the steps below to run this project locally:

### 1. Clone the repository

  ```
    git clone https://github.com/andrec2709/andrecarvalho.io
  ```

### 2. Basic setup

#### config.php

You will need to setup an environment variable named **CONFIG_PATH**, which points to your config.php file.

Your config.php file needs to contain the following variables:

- $recaptchaSite - this is your Google Cloud's recaptcha Key ID, it will be used to create assessments with the google cloud API. You can find this by going to [gCloud Console](https://console.cloud.google.com/), and using the search bar, lookup "recaptcha" and you will be able to find your existing keys, or create a new one.
- $mysqlSecret - your mysql database secret.
- $mysqlUser - your mysql database user.
- $mysqlDB - the name of your mysql database.
- $projectID - this is your Google Cloud's project ID. You can find it by going to gCloud Console, opening your Project Settings (inside "three dots" icon), and your project ID will be there.
- $GITHUB_TOKEN - this is a github personal access token that will be used to fetch the GraphQL API.

#### .env.development

You must also create the `/frontend/.env.development` file. Later on you need to create a variable inside it called VITE_API_URL, which points to your php server.

### 3. Database schema

Your database should have 3 tables, named "repos", "total_commits", and "contributions". 

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
  ```

- Use this DDL to create the table "total_commits":

  ```
  CREATE TABLE `total_commits` (
    `id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
    `commits` int NOT NULL DEFAULT '0',
    UNIQUE KEY `total_commits_unique` (`id`),
    CONSTRAINT `total_commits_ibfk_1` FOREIGN KEY (`id`) REFERENCES `repos` (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  ```
    
- Use this DDL to create the table "contributions":

  ```
      CREATE TABLE `contributions` (
    `date` date NOT NULL,
    `count` int NOT NULL DEFAULT '0',
    `level` int NOT NULL DEFAULT '0',
    PRIMARY KEY (`date`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
  ```

### 4. Dependencies

#### Composer 

1. install composer by following [this guide](https://getcomposer.org/doc/00-intro.md)
2. inside /backend/, run on the terminal:

   ```
     composer require google/cloud
   ```
4. then, install composer dependencies:

   ```
     composer install
   ```

#### NPM

1. install Node and NPM by following [this guide](https://nodejs.org/en/download)
2. inside /frontend/, run:

   ```
    npm install
   ```

### 5. The server

You need two servers running here, a php server and the vite server, for the react application.

1. Open a terminal and cd into `/backend/`
2. run:

   ```
    php -S <your-ip-address>:<port>
   ```
4. remember the address you use above, and go to your `/frontend/.env.development` file and create the VITE_API_URL variable following the pattern below:

   ```
    VITE_API_URL=<your-ip-address>:<port>/src
   ```
That is it for the php server. Now, open another terminal and cd into `/frontend/`:

1. run:

   ```
     npm run dev
   ```

By running the steps above, you should be able to run the project locally.
