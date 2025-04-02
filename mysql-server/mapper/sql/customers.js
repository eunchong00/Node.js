// mapper/sql/cutomers.js
// Table : cutmoers;

const selectAll =
`SELECT id
		  ,name
      ,email
      ,phone
      ,address
FROM customers
ORDER BY id`;

const selectById = 
`SELECT id
		  ,name
      ,email
      ,phone
      ,address
FROM customers
WHERE id = ?`; // 단일값
 
const insertInfo = 
`INSERT INTO customers(name, email, phone, address)
VALUES (?,?,?,?)`; // 배열
// {name:'H', address:'daegu'}
// SET name = 'H', address = 'daegu'
const updateInfo =
`UPDATE customers
SET ?
WHERE id = ?`; // 배열[ 객체, 단일값 ]

const deleteInfo = 
`DELETE FROM customers
WHERE id = ?`;
 /*
 1) ? 갯수
 1-1) 1개 : 단일 값
 1-2) 2개 이상 : 배열

 2) ? 앞에 컬럼의 유무
 2-1) 컬럼이 존재하는 경우 기본 데이터 값(문자, 숫자, 날짜 등)
 2-2) 컬럼이 없는 경우 객체
 */

module.exports = {
  // 'selectAll' : selectAll
  selectAll,
  selectById,
  insertInfo,
  updateInfo,
  deleteInfo,
}