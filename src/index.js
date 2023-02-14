import app from "./app.js";
import { puerto } from "./config.js";

app.listen(puerto);

console.log("Server running on port " + puerto);