import {db} from '../../database/mysql.js'

export const productsService = {
    getAllProducts : async () => {
        const sql = "SELECT * FROM datospersonales";
        try {
            const [data] = await db.query(sql, []);
            return data;
        } catch (error) {
            return null;
        }
    },    
    
    getOneProduct : async (id) => {
        const sql = "SELECT * FROM datospersonales WHERE id=?";
        const params = [id];
        try {
            const [result] = await db.query(sql, params);
            return result[0];
        } catch (error) {
            console.log("E")
            return null;
        }
    },
     
    createNewProduct : async (product) => {
        const sql = "INSERT INTO datospersonales (codigo, nombre, correo, telefono) VALUES (?, ?, ?, ?)";
        const params = [product.codigo, product.nombre, product.correo, product.telefono];
        try {
            const [result] = await db.query(sql, params);
            return {codigo: product.codigo, nombre: product.nombre, correo: product.correo, telefono: product.telefono, id: result.insertId}
        } catch (error) {
            return null;
        }
    },
      
    updateOneProduct : () => {
        return;
    },
      
    deleteOneProduct : async (id) => {
        const sql = 'DELETE FROM data WHERE id = ?';
        const params = [id];
        try {
            const result = await db.query(sql, params);
            return result;
        } catch (error) {
            return null;
        }
    }
}