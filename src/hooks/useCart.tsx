import { useState, useEffect} from "react";

interface Movie{
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};


const useCart = (
    props?: Movie[], 
    update?: React.Dispatch<React.SetStateAction<Movie[]>>, 
    setPage?: React.Dispatch<React.SetStateAction<string>>
    ) => {
    const [selectedId, setSelectedId] = useState<number[]>([])

    const handleAdd = (id: number) => {
        console.log(id)
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
    }

    const handleRemove = (id: number, removeAll?: Boolean) => {
        let temp: Movie[] = [];
        if(props){
            let index: number = selectedId.indexOf(id);
            props.map((item) => {
                if(id === item.id)
                    if(removeAll)
                        temp = [...temp, {...item, unit: 0}]
                    else
                        temp = [...temp, {...item, unit: item.unit - 1}]
                else
                    temp = [...temp, item]
            })
            if(temp[id-1].unit === 0)
                selectedId.splice(index, 1);
        }
        if(update){
            update(temp);
        }
    }
    
    const handleFinish = () => {
        let temp: Movie[] = [];
        setSelectedId([]);
        if(props)
            props.map((item) => {
                temp = [...temp, {...item, unit: 0}]
            })
        if(update)
            update(temp);
        if(setPage)
            setPage('finish')
    }

    return {
        selectedId: selectedId,
        add: handleAdd,
        remove: handleRemove,
        finish: handleFinish
    }
}

export default useCart;