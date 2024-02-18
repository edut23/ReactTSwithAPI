import { Api } from "../axios-config";

interface Movie{
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};

type MovieList = {
    data: Movie[],
}

export const getProducts = async (): Promise<MovieList | Error> => {
    try{
        const { data } = await Api.get('/products');

        return {
            data
        }
    } catch (error) {
        console.error(error)
        return new Error((error as { message: string}).message || 'Listing movies error.')
    }
}