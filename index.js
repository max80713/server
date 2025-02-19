const express = require("express");
const app = express();

// 1. const numbers = [1, 5, 3];
// 2. sqlite3

app.get("/", (req, res) => {
  const number = Number(req.query.number);
  const sum = number * (number + 1) / 2;
  res.send({ sum: sum })
});

// app.post 新增數字

// app.put 更新數字

// app.delete 刪除數字 index 


app.listen(80, () => {
  console.log("Server is running on port 3000");
});
