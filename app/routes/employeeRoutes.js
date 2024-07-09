module.exports = app => {
  const employees = require("../controllers/employeeController.js");

  var router = require("express").Router();



/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */



  // Create a new Employee

  router.post("/", employees.create);



// Retrieve all employees
  router.get("/", employees.findAll);

  // Retrieve a single Employee with id
  router.get("/:id", employees.findOne);

  // Update a Employee with id
  router.put("/:id", employees.update);

  // Delete a Employee with id
  router.delete("/:id", employees.delete);

  // Delete all employees
  router.delete("/", employees.deleteAll);

  app.use("/api/employees", router);
};
