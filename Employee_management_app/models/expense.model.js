const db = require('../config/db');

exports.create = async (expense) => {
    const {Name, Designation, EMail, Contact, Department, JoiningDate, Location} = expense;
    
    await db.query('INSERT INTO Employee (Emp_Name, Emp_email_id, Emp_Cnt_no, Emp_Dept, Emp_DOJ, Emp_Location) VALUES (?, ?)', [Name, Designation, EMail, Contact, Department, JoiningDate, Location]);
}

exports.getAll = async () => {
    const [rows] = await db.query('SELECT * FROM Employee order by Emp_id desc');
    return rows;
}

exports.delete = async (id) => {
    await db.query('DELETE FROM Employee WHERE Emp_id = ?', [id]);
}


exports.getById = async (id) => {
  const [rows] = await db.query("SELECT * FROM Employee WHERE Emp_id = ?", [id])
  return rows[0]
}

exports.update = async (id, { Name, Designation, EMail, Contact, Department, JoiningDate, Location }) => {
  await db.query(
    "UPDATE Employee SET Name = ?, Designation = ?, EMail = ?, Contact = ?, Department = ?, JoiningDate = ?, Location = ? WHERE Emp_id = ?",
    [Name, Designation, EMail, Contact, Department, JoiningDate, Location, Emp_id]
  )
}