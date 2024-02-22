import { useEffect, useState } from "react";

interface Movie {
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
    const [isWeb, setIsWeb] = useState(true);

    const handleAdd = (id: number) => {
        if (!selectedId.includes(id))
            setSelectedId([...selectedId, id])
        let temp: Movie[] = [];
        if (props)
            props.map((item) => {
                if (id === item.id)
                    temp = [...temp, { ...item, unit: item.unit + 1 }]
                else
                    temp = [...temp, item]

                return temp
            })
        if (update) {
            update(temp);
        }
    }

    const handleRemove = (id: number, removeAll?: Boolean) => {
        let temp: Movie[] = [];
        if (props) {
            let index: number = selectedId.indexOf(id);
            let idx: number = -1;
            props.map((item, propsIndex) => {
                if (id === item.id) {
                    idx = propsIndex;
                    if (removeAll)
                        temp = [...temp, { ...item, unit: 0 }]
                    else
                        temp = [...temp, { ...item, unit: item.unit - 1 }]
                }
                else
                    temp = [...temp, item]
                return temp
            })
            if (temp[idx]?.unit === 0)
                selectedId.splice(index, 1);

        }
        if (update) {
            update(temp);
        }
    }

    const handleFinish = () => {
        let temp: Movie[] = [];
        setSelectedId([]);
        if (props)
            props.map((item) => {
                temp = [...temp, { ...item, unit: 0 }]

                return temp
            })
        if (update)
            update(temp);
        if (setPage)
            setPage('finish')
    }

    useEffect(() => {
        if(window.innerWidth < 1024)
            setIsWeb(false)
        else
            setIsWeb(true)
    },[window.innerWidth])

    return {
        selectedId: selectedId,
        add: handleAdd,
        remove: handleRemove,
        finish: handleFinish,
        isWeb: isWeb
    }
}

export default useCart;