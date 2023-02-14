import { connection } from "../database/database.js";

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await connection.query('SELECT * FROM employee');

        res.send(rows);
    } catch (error) {
        req.status(500).json({'message': error});
    }
};

export const getEmployee = async (req, res) => {
    try {

        const { id } = req.params;
        const [employee] = await connection.query('SELECT * FROM employee WHERE id = ?', id);
    
        if(employee.length == 0){
            res.status(404).json({'message': 'Employee Not Found'});
        } else {
            res.json(employee[0]);
        }
        
    } catch (error) {
        res.status(500).json({'message': error});
    }
};

export const createEmployee = async (req, res) => {

    try {
        const { first_name, last_name, email, salary } = req.body;
        const [rows] = await connection.query(
            'INSERT INTO employee (first_name, last_name, email, salary) VALUES (?, ?, ?, ?)',
            [first_name, last_name, email, salary]
            );
        res.send({
            id: rows.insertId,
            first_name,
            last_name,
            email,
            salary
         });
        
    } catch (error) {
        res.status(500).json({'message': error});
    }
};

export const updateEmployee = async (req, res) => {

    try {
        const { id } = req.params;
        const { first_name, last_name, email, salary } = req.body;
    
        const [rows] = await connection.query(
            'UPDATE employee SET first_name = ?, last_name = ?, email = ?, salary = ? WHERE id = ?', [first_name, last_name, email, salary, id]);
    
        if(rows.affectedRows == 0){
            res.status(404).json({'message': 'Employee Not Found'});
        } else {
            res.json({'message': 'Update Employee Success'});
        }
    } catch (error) {
        res.status(500).json({'message': error});
    }
}; 

export const deleteEmployee = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await connection.query('DELETE FROM employee WHERE id = ?', id);
        if(result.affectedRows == 0){
            res.status(404).json({'message': 'Employee Not Found'});
        } else {
            res.status(204).json({'message': 'Success Delete Employee'});
        }
    } catch (error) {
        res.status(500).json({'message': error});
    }
};