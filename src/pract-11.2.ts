{
    type ShowSomething = { something: string };

    const createPromise = (): Promise<ShowSomething> => {
        return new Promise<ShowSomething>((resolve, reject) => {
            const data: ShowSomething = { something: "something Anything!!" };

            if (data) {
                resolve(data);
            } else {
                reject("Failed to load data");
            }
        });
    };

    const showData = async (): Promise<ShowSomething> => {
        const data: ShowSomething = await createPromise();
        return data;
    };

    showData();
}
