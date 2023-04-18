const db = require("./db");
sql ="SELECT * FROM students ORDER BY MaSV LIMIT 10,5";
//hàm query đc gọi trên đối tượng db, dc import từ module ./db
//với tham số truy vấn vấn SQL là sql
//hàm query này dc trả về bằng 1 promise nên có thể sd then và catch
db.query(sql).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});