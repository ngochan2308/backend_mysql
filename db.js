const mysql  = require("mysql");
const config ={
    host: "localhost",
    user:"root",
    database:"tkweb"
};
//tạo kết nối csdl mysql sd hàm create...
const conn = mysql.createConnection(config);
//mở kết nối csdl mysql
conn.connect();
//định nghĩa 1 query làm việc với truy vấn sql, sd cơ chế promise
//hàm này nhận vào 1 chuỗi truy vấn sql và trả về 1 promise
//await chỉ xuất hiện trong async

async function query(sql) {
    return new Promise(function(resolve, reject){
         //trong hàm executor, hàm conn.query đc gọi để thực thi 
        //truy vấn sql đến csdl mysql
        conn.query(sql, function(err, rows, fields){
            if (err){
                return reject(err);
            }
            resolve(rows);
        });
         //sql là tham số đầu tiên
        //hàm cb của conn.query đc đnghia với 2 tham số err, rows(kq truy vấn)
        //fields là đối tượng chứa thông tin các trường trong kq trả về
        //từ 1 truy vấn sql. chứa các thuộc tính như name,type,length,...
    });
}
  //xuất hàm query ra bên ngoài module
module.exports = {
    query,
}