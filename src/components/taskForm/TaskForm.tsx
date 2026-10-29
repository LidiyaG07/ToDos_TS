import { useState } from "react";

interface TaskFormProps {
    onAdd: (title: string) => void;
}

const TaskForm = ({ onAdd }: TaskFormProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = () => {
        if (!inputValue.trim()) return;

        onAdd(inputValue);
        setInputValue("");
    }

    return (
        <div>
            <input
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
            />

            <button onClick={() => onAdd(inputValue)}>
                Add task
            </button>
        </div>
    );
};

export default TaskForm;