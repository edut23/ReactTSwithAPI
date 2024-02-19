import React, { useState, useEffect} from "react";
import { getProducts } from "../Services/products";

interface Movie{
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};

const useProducts = (setLoading?: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [list, setList] = useState<Movie[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState<string>('catalog');

    useEffect(() => {
        getProducts()
        .then((result) => {
            if(result instanceof Error){
                alert(result.message)
            }
            else{
                let temp: Movie[] = [];
                result.data.map((item) => {
                    temp = [...temp, {...item, unit: 0}];
                })
                setList(temp);
                if(setLoading)
                    setLoading(false);
            }
        })
    },[])

    useEffect(() => {
        let counter = 0
        list.map((item) => {
            counter = counter + item.unit
        })
        setTotal(counter);
        console.log(list)
    }, [list])

    useEffect(() => {
        console.log(page)
    }, [page])


    return {list, setList, total, page, setPage};
}

export default useProducts;