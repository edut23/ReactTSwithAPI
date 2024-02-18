import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from '../movie';
import useCart from '../../../hooks/useCart';
import { getProducts } from '../../../Services/products';

interface CatalogProps{
    movies: Movie[]
    update: React.Dispatch<React.SetStateAction<Movie[]>>
}

interface Movie{
    id: number,
    title: string,
    price: number,
    image: string,
    unit: number
};

const Wrap = styled.div`
    display: grid;
    gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    width: 100%;
    `


const Catalog = (props: CatalogProps) => {
    const handleAdd = useCart(props.movies, props.update).add;
    const selectedArray = useCart(props.movies).selectedId;
    
    useEffect(() => {
        console.log(selectedArray)
    },[handleAdd])

    return(
        <Wrap>
            {props?.movies.map((movie) => 
                <Movie 
                    title={movie?.title} 
                    id={movie?.id}
                    image={movie?.image}
                    price={movie?.price}
                    unit={movie?.unit}
                    selected={movie?.unit > 0}
                    add={handleAdd}
                />
            )}
        </Wrap>
    )
}

export default Catalog;