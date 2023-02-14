import express from "express";
import employeesRouter from "./routers/employees.routes.js";

const app = express();

app.use(express.json());

app.use('/api',employeesRouter);

app.use((req, res) => {
  res.status(404).json({
    'message': 'Not Found'
  });
});

export default app;