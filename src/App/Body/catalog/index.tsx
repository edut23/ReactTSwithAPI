import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Movie from './movie';
import Cart from './cart';
import Finish from './finish';
import useCart from '../../../hooks/useCart';

interface CatalogProps{
    movies: Movie[],
    update: React.Dispatch<React.SetStateAction<Movie[]>>,
    page: string,
    setPage: React.Dispatch<React.SetStateAction<string>>
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
    margin: 0 240px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        margin: 0 16px;
    }
`

const Catalog = (props: CatalogProps) => {
    const {selectedId, add, remove, finish} = useCart(props.movies, props.update, props.setPage);

    return(
        <>
        {props?.page === 'catalog' ?
        <Wrap>
            {props?.movies.map((movie) => 
                <Movie 
                    title={movie?.title} 
                    id={movie?.id}
                    image={movie?.image}
                    price={movie?.price}
                    unit={movie?.unit}
                    selected={movie?.unit > 0}
                    add={add}
                />
            )}
        </Wrap> : 
        props?.page === 'cart' ?
        <Cart 
            movies={props?.movies} 
            selectedId={selectedId} 
            add={add} 
            remove={remove} 
            setPage={props.setPage}
            finish={finish}
        /> :
        <Finish setPage={props.setPage}/>
        }
        </>
    )
}

export default Catalog;