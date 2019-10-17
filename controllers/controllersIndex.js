module.exports = (dbPoolInstance) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let showTeachers = (request, response) => {
      dbPoolInstance.teachers.showAllTeachers((error, result) => {
        if(error){
            console.log('error in getting data')
            console.log(error)
        }
        else{
            console.log('results')
            response.send(result)
        }
      });
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    showTeachers: showTeachers,
  };

}