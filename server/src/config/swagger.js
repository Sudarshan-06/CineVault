import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CineVault API",
      version: "1.0.0",
      description: "Movie Explorer Platform API documentation",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // where swagger comments live
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
