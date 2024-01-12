import { setupServer } from "msw/node";
import { handlers } from "./handlers";

let server;

if (process.env.REACT_APP_USE_MOCK_API === "true") {
    server = setupServer(...handlers);
}

export { server };