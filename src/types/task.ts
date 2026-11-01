export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

export const tasks: Task[] = [
    {
        id: 1,
        title: "Купить молоко",
        completed: false,
    },
    {
        id: 2,
        title: "Позвонить врачу",
        completed: false,
    },
];