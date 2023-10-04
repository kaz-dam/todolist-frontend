import { rest } from "msw";

export const handlers = [
    rest.get("http://localhost:5000/api/tasks", (req, res, ctx) => {
        return res(ctx.json([
            { id: 1, title: "Task 1", dueDate: "2023-10-05", completed: false, order: 1 },
            { id: 1, title: "Task 2", dueDate: "2023-10-05", completed: false, order: 2 },
            { id: 1, title: "Task 3", dueDate: "2023-10-06", completed: false, order: 3 },
            { id: 1, title: "Task 4", dueDate: "2023-10-07", completed: false, order: 4 },
        ]));
    }),
];