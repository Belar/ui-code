import styled from "styled-components";
import { desktop, tablet } from "../global/breakpoints";

interface HeadingProps {
  readonly color: string;
}

interface TimeLabelProps {
  readonly color: string;
}

export const Panel = styled.div`
  box-sizing: border-box;
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 20px 50px -40px #ff9950;

  @media ${desktop} {
    padding: 70px;
  }
`;

export const Heading = styled.h1<HeadingProps>`
  color: ${(props) => props.color};
  font-size: 18px;
  line-height: 1.5;
  margin: 10px auto 20px;

  @media ${tablet} {
    margin: 10px auto 50px;
    font-size: 24px;
  }
`;

export const TimeLabel = styled.span<TimeLabelProps>`
  color: ${(props) => props.color};
  font-family: sans-serif;
  font-size: 16px;
  opacity: 0.6;
`;
