import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './header';
import LoadSpinner from '../Assets/loadSpinner';
import Catalog from './Body/catalog';
import useProducts from '../hooks/useProducts';
import OpenFont from '../fonts/OpenFont';


const Main = styled.div`
  text-align: center;
  background-color: #2F2E41;
  height: 100vh;
  width: auto;
  min-height: 100vh;
  font-family: 'Open Sans', sans-serif;
  overflow: auto;
`

const Body = styled.div`
  height: calc(100% - 74px);
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
`

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { list, setList, total, page, setPage } = useProducts(setLoading);

  return (
    <Main>
      <OpenFont />
      <Header total={total} setPage={setPage} />
      <Body>
        {loading ?
          <LoadSpinner /> :
          <Catalog
            movies={list}
            update={setList}
            page={page}
            setPage={setPage}
          />}
      </Body>
    </Main>
  );
}

export default App;
