Create Database Employee_db;
use Employee_db;

Create table Employee
(
Emp_id INT AUTO_INCREMENT PRIMARY KEY,
Emp_Name varchar(100), 
Emp_email_id varchar(100), 
Emp_Cnt_no INT, 
Emp_Dept varchar(100), 
Emp_DOJ DATE, 
Emp_Location varchar(100)
)

select * from Employee;