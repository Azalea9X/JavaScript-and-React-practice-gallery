import mysql from "mysql2"; 
import dotenv from "dotenv";
dotenv.config();
const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password:  process.env.password,
  database: process.env.database,
  

}).promise();

 

export const createCats = async(label, breed, species) => {
  const [result] = await pool.query("insert into cats (label, breed, species) values (?,?,?)", [label, breed, species]);
  return result; 

}

export const updateCats = async (label, breed, species, id) => {
  try {
    const [result] = await pool.query(
      "UPDATE cats SET label = ?, breed = ?, species = ? WHERE id = ?",
      [label, breed, species, id]
    );

    // Check if any rows were affected (updated)
    if (result.affectedRows === 0) {
      // No rows updated, potentially handle this scenario (e.g., log or throw an error)
      console.warn(`No cats updated with id ${id}`);
      return null; // Or throw an appropriate error based on your application logic
    }

    return result; // Return the result object for potential further processing
  } catch (error) {
    console.error("Error updating cats:", error);
    throw error; // Re-throw the error for proper handling at the calling point
  }
};




export const deleteCats = async (id) => {
  try {
    const [result] = await pool.query("DELETE FROM cats WHERE id =?", [id]);
    return result;
    // Check if any rows were affected (deleted)
    if (result.affectedRows === 0) {
      // No rows deleted, potentially handle this scenario (e.g., log or throw an error)
      console.warn(`No cats deleted with id ${id}`);
      return null; // Or throw an appropriate error based on your application logic
    }
  }
  catch {
    console.error("Error deleting cats:", error);
    throw error; // Re-throw the error for proper handling at the calling point
  }
}




export const createUsers = async(username, email, password) => {
  const [result] = await pool.query("insert into usernames (username, email, password) values (?,?,?)", [username, email, password]);
  return result; 

}

export const patchUserandEmail = async (username, email, id) => {
    try {
      const [result] = await pool.query(
        "UPDATE usernames SET username = ?, email = ? WHERE id = ?",
        [username, email, id]
      );
  
      // Check if any rows were affected (updated)
      if (result.affectedRows === 0) {
        // No rows updated, potentially handle this scenario (e.g., log or throw an error)
        console.warn(`No cats updated with id ${id}`);
        return null; // Or throw an appropriate error based on your application logic
      }
  
      return result; // Return the result object for potential further processing
    } catch (error) {
      console.error("Error updating cats:", error);
      throw error; // Re-throw the error for proper handling at the calling point
    }
  }

  export const putUserEmailandPassword = async (username, email, password, id) => {
    try {
      const [result] = await pool.query(
        "UPDATE usernames SET username = ?, email = ?, password = ? WHERE id = ?",
        [username, email, password, id]
      );
  
      // Check if any rows were affected (updated)
      if (result.affectedRows === 0) {
        // No rows updated, potentially handle this scenario (e.g., log or throw an error)
        console.warn(`No users updated with id ${id}`);
        return null; // Or throw an appropriate error based on your application logic
      }
  
      return result; // Return the result object for potential further processing
    } catch (error) {
      console.error("Error updating users:", error);
      throw error; // Re-throw the error for proper handling at the calling point
    }
  }


  export const getUsers = async() => {
    const [result] = await pool.query("select * from usernames");
    return result;
    // Check if any rows were affected (deleted)
    if (result.affectedRows === 0) {
      // No rows deleted, potentially handle this scenario (e.g., log or throw an error)
      console.warn(`No users deleted with id ${id}`);
      return null; // Or throw an appropriate error based on your application logic
    }
  }

  export const getUsersById = async(id=req.params.id) => {
   
    const [result] = await pool.query(
      "select * from usernames WHERE id = ?",
      [id]
    );

    return result;
    // Check if any rows were affected (deleted)
    if (result.affectedRows === 0) {
      // No rows deleted, potentially handle this scenario (e.g., log or throw an error)
      console.warn(`No users deleted with id ${id}`);
      return null; // Or throw an appropriate error based on your application logic
    }
  }