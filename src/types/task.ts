export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

const tasks: Task[] = [
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