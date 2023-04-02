# Database Configuration

Host locally or online your SQL database using a DBMS of your choice. I personally recommend using [MySQL](https://www.mysql.com/). After that is done, download and execute the SQL queries from this [repository](https://github.com/ousmanebarry/DB-Project-Queries) to create and populate your database.

Run the queries in this order **hotel_management.sql > triggers.sql > populate_table.sql > stored_procedures.sql > views.sql > indexes.sql**

# Server Configuration

Add a file named `.env` to the folder `/server`. Put in your local database connection information in this format

```env
host="localhost"
user="<user>"
password="<password>"
database="hotel_management"
```

Replace `user` and `password` with your database user and password information

# How to run

Navigate to `/server` and run the following two commands to install the dependencies and run the server

```cmd
npm install
```

```cmd
npm run server
```

Open a new terminal, navigate to `/client` and run the following two commands to install dependencies and run the client

```cmd
npm install
```

```cmd
npm start
```

By default the server will be running on `PORT 8800` and the client will be running on `PORT 3000`.

# Final App Images

Here are some images of what the final app looks like

### Home page

![Drag Racing](/images/home_page.png)

### Employee page

![Drag Racing](/images/employee_page.png)
