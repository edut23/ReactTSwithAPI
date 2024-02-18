import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './header';
import LoadSpinner from '../Assets/loadSpinner';
import Catalog from './Body/catalog';
import useProducts from '../hooks/useProducts';
import OpenFont from '../fonts/OpenFont';

interface Movie{
  id: number,
  title: string,
  price: number,
  image: string,
  unit: number
};


const Main = styled.div`
  text-align: center;
  background-color: #2F2E41;
  height: 100vh;
  width: auto;
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
`

const Body = styled.div`
  height: calc(100% - 74px);
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 240px;
`

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const {list, setList, total} = useProducts(setLoading);

  return (
    <Main>
      <OpenFont/>
      <Header total={total}/>
      <Body>
        {loading ? <LoadSpinner/> : <Catalog movies={list} update={setList}/>}
      </Body>
    </Main>
  );
}

export default App;
