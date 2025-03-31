<h1 align="center">Live Group Chat</h1>

<p align="center">
  Real-time messaging within one chat box using spring websockets with spring REST API for fetching of logging.
</p>



<div align="center">

[![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/en/)
[![SpringBoot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Next.JS](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)

</div>

![live-group-chat-img](https://github.com/user-attachments/assets/9cb27844-7bab-4e08-a9e4-e072425cba75)

# Quick Start / Setup

Follow these steps for quick start of using the app

### Pre-requisites

Make sure that these are installed in your local machine

- ["git"](https://git-scm.com/)
- ["Node.js"](https://nodejs.org/en)
- ["npm"](https://www.npmjs.com/)
- ["Intellij IDEA Ultimate"](https://www.jetbrains.com/idea/download/?section=windows) (Recommended)
### Installation on Local Machine

Clone the repository

```shell
git clone https://github.com/xNeshi/live-group-chat
```

Install the packages

```shell
cd frontend
npm install

# Start Intellij IDEA Ultimate
# Open backend file only
mvn clean install
```

Setup the environmental variables

Check the `backend/.env.example`. Copy paste the config then paste it on a new .env file. Modify base on your database configurations. 

```dotenv
# backend/.env.exmaple
DB_NAME=messages
DB_HOST=localhost
DB_PORT=3306
DB_TYPE=mysql

DB_USERNAME=
DB_PASSWORD=

DB_DDL-AUTO=update
DB_DRIVER=com.mysql.cj.jdbc.Driver
DB_DIALECT=MySQLDialect
```

Run the project

```shell
# start the backend
mvn spring-boot:run

# start the frontend
npm run dev 
```

Project should be running on http://localhost:3000. All users only use one link
