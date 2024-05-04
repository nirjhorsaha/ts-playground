{
    const createPromise = () => {
        return new Promise((resolve, reject) => {
            const data: string = "here showing demo data";

            if (data) {
                resolve(data);
            } else {
                reject("no data found.!");
            }
        });
    };

    const showData = async () => {
        const data = await createPromise();

        console.log(data);
    };

    showData();
}
