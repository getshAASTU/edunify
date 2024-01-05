// import mysql from "mysql2/promise";

// export default async function handler(req, res) {
//   const dbconnection = await mysql.createConnection({
//     user: "sql12674486",
//     password: "2t7scnkhTM",
//     database: "sql12674486",
//     host: "sql12.freesqldatabase.com",
//     port: "3306",
//   });
//   try {
//     const query='SELECT  name, state, address, img  FROM schools'
//     const values=[]
//     const [data]= await dbconnection.execute(query,values)
//     dbconnection.end()
//     res.status(200).json({result:data})
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// }
