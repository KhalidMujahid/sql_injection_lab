# SQL Injection Site

## Getting Started

To set up the project, follow these steps:

1. **Clone the Repository**
   - Clone the repository to your local machine:
     ```bash
     git clone <repository-url>
     cd <repository-directory>
     ```

2. **Install Dependencies**
   - Run the following command to install the required dependencies:
     ```bash
     npm install
     ```

3. **Configure Environment Variables**
   - Rename the `.env.example` file to `.env` and update the values with your database configuration:
     ```plaintext
     HOST=hostname
     USER=mysql_username
     PASSWORD=mysql_password
     DATABASE=database_name
     ```

4. **Create a Database**
   - Create a new database using the following SQL command:
     ```sql
     CREATE DATABASE database_name;
     ```

5. **Create a Table**
   - Create a table for user data with the following SQL command:
     ```sql
     CREATE TABLE user (
         id INT AUTO_INCREMENT PRIMARY KEY,
         username VARCHAR(50) NOT NULL,
         password VARCHAR(255) NOT NULL
     );
     ```

## Notes

- Ensure that you have MySQL installed and running.
- Replace `<repository-url>` and `<repository-directory>` with the actual URL and directory name of your repository.
