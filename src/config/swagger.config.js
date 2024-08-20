const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function swaggerConfig(app){
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition: {
            info: {
                title: "Divar Application - Backend",
                version: "1.0.0",
                description: "node js, express js",
                contact: {
                    name: "Amir Hossein Olyanasab Narab",
                    email: "amirholya01@gmail.com"
                }
            },
            
        },
        apis: []
    });
    const swagger = swaggerUi.setup(swaggerDocument, {});
    app.use("/", swaggerUi.serve, swagger);
}

module.exports = swaggerConfig;