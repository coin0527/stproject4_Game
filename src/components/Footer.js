import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  bottom: 15px;
  left: 45%;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
`;

export const Footer = () => {
  return (
    <Wrap>
      <Line> &copy; eden27 </Line>
    </Wrap>
  );
};
