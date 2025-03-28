// mapper/sql/customers.js
// Table : customers;

const selectAll = 
`select id 
		    ,name
        ,phone
        ,address
from customers
order by id`;


module.exports = {
  selectAll,
  // 'selectAll' : selectAll
}