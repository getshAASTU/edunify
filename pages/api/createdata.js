import mysql from "mysql2/promise";

export default async function handler(req, res) {
    const dbconnection = await mysql.createConnection({
        user: "sql12674486",
        password: "2t7scnkhTM",
        database: "sql12674486",
        host: "sql12.freesqldatabase.com",
        port: "3306",
      });
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method Not Allowed' });
    }
  
    try {
      const {data} = req.body;
      console.log(data)
  
      if (!data) {
        return res.status(400).json({ error: 'New data is required' });
      }
  
      // Perform the insert operation in the database
      const insertQuery = 'INSERT INTO schools (id, name, address, city, state, contact, email) VALUES (null, name, address, city, state, contact, email)';
      const [result] = await dbconnection.execute(insertQuery, [data]);
        dbconnection.end()
        console.log(result)
      // Return the ID of the newly inserted row (if needed)
    
  
    //   res.status(200).json({ message: 'Insert successful', insertedId });
    } catch (error) {
      console.error('Error creating new data:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }