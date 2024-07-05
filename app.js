const express = require("express");

const app = express();
app.use(express.json());
app.use(express.json());

const HOST = '127.0.0.1';
const PORT = 8042;

const { Client } = require('pg');

// Database connection configuration
const dbConfig = {
	user: 'postgres',
	password: 'postgres',
	host: '127.0.0.1',
	port: '5432',
	database: 'postgres',
};

// Create a new PostgreSQL client
const client = new Client(dbConfig);

client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

/*const createTable = `
  CREATE TABLE employees(
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
  );
`;

client.query(createTable, (err, result) => {
	if (err) {
		console.error('Error creating table', err);
	} else {
		console.log('Table created successfully');
	}

});*/


app.listen(8042, () => {
    console.log("Server Listening on PORT:", PORT);
  });

app.route("/test")

.get((req, res)=>{
    const getEmployee = 'SELECT * FROM employees'

    client.query(getEmployee, (err, result) => {
		if (err) {
			console.error('Error reaching data', err);
		} else {
			console.log('Data reached successfully');
            res.json(result.rows);
		}
    });
})

.post((req,res)=>{
    const { name, email } = req.body;
    
    res.send(`Received name: ${name}, email: ${email}`);

    const insert ='INSERT INTO employees(name, email) VALUES ($1, $2)';

	const values = [name, email];

	client.query(insert, values, (err, result) => {
		if (err) {
			console.error('Error inserting data', err);
		} else {
			console.log('Data inserted successfully');
		}
    });

});

app.route("/test/:name")

.put((req, res)=>{
    const userName = req.params.name;
    const {email} = req.body;
    const updateEmployee = 'UPDATE employees SET email = $1 WHERE name = $2'
    const values = [email,userName];

    client.query(updateEmployee,values, (err, result) => {
		if (err) {
			console.error('Error inserting data', err);
		} else {
			console.log('Data updated successfully');
		}
    });
})

.delete((req, res)=>{
    const userName = req.params.name;

    const deleteEmployee = 'DELETE FROM employees WHERE name = $1'
    const values = [userName];

    client.query(deleteEmployee,values, (err, result) => {
		if (err) {
			console.error('Error inserting data', err);
		} else {
			console.log('Data updated successfully');
		}
    });
});


