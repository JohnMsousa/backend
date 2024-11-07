<<<<<<< HEAD
const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API - Geração Tech",
      version: "1.0.0",
      description: "Documentação oficial da API",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "servidor local",
      },
    ],
    components: {
      securitySchemes: {
        bearerToken: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Nome do usuário",
            },
            email: {
              type: "string",
              description: "Email do usuário",
            },
            password: {
              type: "string",
              description: "Senha do usuário",
            },
            require: ["name", "email", "password"],
          },
        },
      },
    },
    security: [
      {
        bearerToken: [],
      },
    ],
  },
  apis: ["./routes/*.js"],
=======
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API - Geração Tech',
            version: '1.0.0',
            description: 'Documentação oficial da API'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor local'
            }
        ],
        components: {
            securitySchemes: {
                bearerToken: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            },
            schemas: {
                User: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string',
                            description: 'Nome do usuário'
                        },
                        email: {
                            type: 'string',
                            description: 'Email do usuário'
                        },
                        password: {
                            type: 'string',
                            description: 'Senha do usuário'
                        },
                        required: ['name', 'email', 'password']
                    }
                }
            }
        },
        security: [
            {
                bearerToken: [],
            }
        ],
    },
    apis: ['./routes/*.js']
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

<<<<<<< HEAD
module.exports = swaggerDocs;
=======
module.exports = swaggerDocs;
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431
