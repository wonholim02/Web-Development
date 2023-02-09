import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const Box = styled.div`
  background-color: green;
  width: 100px;
  height: 100px;
`;

function Main() {
  return (
    <Wrapper>
      <Box />
      <div>ksea website -initial setting is done
           donation list: 홍길동
      </div>
      <Box />
    </Wrapper>
  );
}

export default Main;
