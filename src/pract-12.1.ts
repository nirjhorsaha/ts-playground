{
    type PoshManush = {
        bike: string;
        car: string;
        iphone: boolean;
    };

    type checkPoisa<T> = T extends keyof PoshManush ? true : false;

    type hasPoisa = checkPoisa<"Posha">;
}
