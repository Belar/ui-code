import styled from "styled-components";
import { tablet } from "../global/breakpoints";

interface PanelProps {
  readonly color: string;
  readonly background: string;
}

export const Panel = styled.div<PanelProps>`
  box-sizing: border-box;
  background: ${(props) => props.background};
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 20px 50px -40px #ff9950;

  color: ${(props) => props.color};

  @media ${tablet} {
    padding: 70px;
  }
`;

export const Heading = styled.h1`
  font-size: 18px;
  line-height: 1.5;
  margin: 10px auto 20px;

  @media ${tablet} {
    margin: 10px auto 50px;
    font-size: 24px;
  }
`;

export const TimeLabel = styled.span`
  font-family: sans-serif;
  font-size: 16px;
  opacity: 0.6;
`;

export const TwoColumnSides = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
