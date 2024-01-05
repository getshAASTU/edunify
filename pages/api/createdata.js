import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection({
        user: process.env.USER,
        password: process.env.USER_PASSWORD,
        database: process.env.NAME,
        host: process.env.HOST,
        port: "3306",
      });
  
    try {
      const {name,address,city,state,contact,email} = req.body;
      const insertQuery = 'INSERT INTO schools (name,address,city,state,contact,email) VALUES (name, address, city, state, contact, email)';
      const [result] = await dbconnection.query(insertQuery, [name,address,city,state,contact,email]);
      dbconnection.end()
      res.status(200).json({data:result})
      console.log(result)
  
    } catch (error) {
      console.error('Error creating new data:', error.message);
      res.status(500).json({ error: error.message });
    }
  }