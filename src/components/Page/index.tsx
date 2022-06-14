import React from "react";
import { T86Nav } from "../Nav";
import styled from "styled-components";

const Container = styled.div`
  div {
    max-width: 800px;
  }
  padding-top: 1rem;
  display: flex;
  justify-content: center;
  width: 100vw;
`;
export const Page = ({ children }: { children: React.ReactNode }) => (
  <>
    <T86Nav />
    <Container>
      <div>{children}</div>
    </Container>
  </>
);
