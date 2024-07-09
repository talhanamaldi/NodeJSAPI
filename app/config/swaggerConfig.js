const swaggerJSDoc = require("swagger-jsdoc");

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'NodeJS API',
        version: '1.0.0',
        description: 'NodeJSAPI',
      },

    },
  
    apis: ["../routes/employeeRoutes.js"], 
};


const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;