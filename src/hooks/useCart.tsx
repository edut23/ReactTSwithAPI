import { useState, useEffect, EventHandler} from "react";
import useProducts from './useProducts'

interface Movie{
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};


const useCart = (props?: Movie[], update?: React.Dispatch<React.SetStateAction<Movie[]>>) => {
    const [total, setTotal] = useState(0)
    const [selectedId, setSelectedId] = useState<number[]>([])

    const handleAdd = (id: number) => {
        if(!selectedId.includes(id))
            setSelectedId([...selectedId, id])
        let temp: Movie[] = [];
        if(props)
            props.map((item) => {
                if(id === item.id)
                    temp = [...temp, {...item, unit: item.unit + 1}]
                else
                    temp = [...temp, item]
            })
        if(update){
            update(temp);
        }
        setTotal(total + 1);
    }

    const handleRemove = () => {
        setTotal(total - 1);
        console.log(selectedId)
    }

    return {
        total: total, 
        selectedId: selectedId,
        add: handleAdd,
        remove: handleRemove,
    }
}

export default useCart;