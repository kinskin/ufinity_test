/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (db) => {


    let showAllTeachers = (callback)=>{
        let query = 'SELECT * FROM teachers'
        db.query(query,(error,queryResult)=>{
            if(error){
                callback(error,null)
            }
            else{
                callback(null,queryResult)
            }
        })
    }

  return {
    showAllTeachers
  };
};