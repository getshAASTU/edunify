import { query } from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const schools = await query({
      query: "SELECT * FROM schools",
      values: [],
    });
    res.status(200).json({ schools: schools });
  }

  if (req.method === "POST") {
    const {data} = req.body;
    const {name,address,city,state,contact,email}=data
    const addSchool = await query({
      query:
        "INSERT INTO schools (name, address, city, state, contact, email) VALUES (?,?,?,?,?,?)",
      values: [name??null, address??null, city??null, state??null, contact??null, email??null],
    });

 const insertId= addSchool.insertId
    const school = {
      id: insertId,
      name,
      address,
      city,
      state,
      contact,
      img:'/schoolImages/kolkata.jpg',
      email,
    };
    res.status(200).json({response:{data:school}});
    console.log(school);
  }
}
