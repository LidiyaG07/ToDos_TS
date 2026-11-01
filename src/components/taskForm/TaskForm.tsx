import { useState } from "react";

interface TaskFormProps {
    onAdd: (title: string) => void;
}

const TaskForm = ({ onAdd }: TaskFormProps) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (inputValue: string) => {
        if (inputValue.trim()) {
            onAdd(inputValue);
        }

        setInputValue("");
    }

    const keyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit(inputValue)
        }
    }

    return (
        <div>
            <input
                onKeyDown={keyDown}
                value={inputValue}
                onChange={(event) => {
                    setInputValue(event.target.value);
                }}
            />

            <button onClick={() => handleSubmit(inputValue)}>
                Add task
            </button>
        </div>
    );
};

export default TaskForm;