import { setupWorker } from 'msw'
import { handlers } from './handlers'

let worker;

if (process.env.REACT_APP_USE_MOCK_API === "true") {
    worker = setupWorker(...handlers);
}

export { worker };