export const getPriceFromString = (value: string) => {
    return Number(value.split('$')[1]);
}

