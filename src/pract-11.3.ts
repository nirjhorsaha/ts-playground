{
    type TodoData = {
        id: number;
        userId: string;
        title: string;
        completed: boolean;
    };
    const getTodoData = async (): Promise<TodoData> => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1",
        );

        const data = await response.json();
        // console.log(data);
        return data;
    };

    getTodoData();
}
