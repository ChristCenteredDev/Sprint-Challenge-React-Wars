import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import { SWCard } from './SWCard';

const SWCardsDiv = styled.div`
    max-width: 1160px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
`;

export function SWCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get('https://swapi.co/api/people/')
        .then(res => {
          console.log(res.data.results);
          setData(res.data.results);
        });
    };

    fetchData();
  }, []);

  function renderCard(obj) {
    return <SWCard
      name={obj.name}
      mass={obj.mass}
      height={obj.height}
      gender={obj.gender}
      year={obj.birth_year}
      key={obj.name}
    />
  }

  return (
    <SWCardsDiv>
      {data.map(renderCard)}
    </SWCardsDiv>
  );
}