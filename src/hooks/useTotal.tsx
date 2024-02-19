import { useEffect, useState } from "react";

interface CartProps {
    movies: Movie[],
    selectId: number[],
    add: ((id: number) => void),
    remove: ((id: number) => void) | ((id: number, removeAll: boolean) => void),
    finish: (() => void)
}

interface Movie {
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};


const useTotal = (props: CartProps) => {
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        let temp = 0;
        props.movies.map((item) => {
            temp = temp + (item.unit * item.price)

            return null
        })
        setTotal(temp)
    }, [props.add, props.remove, props.movies])

    return total;
}

export default useTotal;