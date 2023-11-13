const db = require('../Config/database')
class Products{
    constructor(name,price,inventory){
        this.name=name;
        this.price=price;
        this.inventory=inventory;

    }
 

    static findAll(){
        let sql = "SELECT * FROM products;";
        return db.execute(sql)

    }

    static findById(id){
        let sql = `SELECT * FROM products WHERE id = ${id};`;
        return db.execute(sql)

    }

}
module.exports = Products;