import { rest } from "msw";

export const handlers = [
    rest.get("http://localhost:4000/tasks", (req, res, ctx) => {
        return res(ctx.json([
            { id: 1, title: "Task 1", dueDate: new Date(), completed: false, order: 1 },
            { id: 2, title: "Task 2", dueDate: new Date(), completed: false, order: 2 },
            { id: 3, title: "Task 3", dueDate: new Date(), completed: false, order: 3 },
            { id: 4, title: "Task 4", dueDate: new Date(), completed: false, order: 4 },
        ]));
    }),

    rest.put("http://localhost:4000/tasks/:id", (req, res, ctx) => {
        return res(ctx.json({
            id: req.params.id,
            completed: false
        }));
    }),
    
    rest.post("http://localhost:4000/tasks", (req, res, ctx) => {
        return res(ctx.json({
            id: Math.floor(Math.random() * 100),
            title: 'New Task'
        }));
    }),

    rest.put("http://localhost:4000/tasks/:id", (req, res, ctx) => {
        return res(ctx.json({
            id: req.params.id,
            title: 'Updated Task'
        }));
    })
];