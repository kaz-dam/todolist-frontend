import { rest } from "msw";

export const handlers = [
    rest.get("http://localhost:5000/api/tasks", (req, res, ctx) => {
        return res(ctx.json([
            { id: 1, title: "Task 1", dueDate: "2023-10-05", completed: false, order: 1 },
            { id: 2, title: "Task 2", dueDate: "2023-10-05", completed: true, order: 2 },
            { id: 3, title: "Task 3", dueDate: "2023-10-06", completed: false, order: 3 },
            { id: 4, title: "Task 4", dueDate: "2023-10-07", completed: false, order: 4 },
        ]));
    }),

    rest.post("http://localhost:5000/api/tasks/:id/completed", (req, res, ctx) => {
        return res(ctx.json({
            id: req.params.id,
            completed: true
        }));
    })
];