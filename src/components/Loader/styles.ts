import styled from "styled-components";
import { CircularProgress, LinearProgress } from "@material-ui/core";

export const SpinnerWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const CircularProgressStyled = styled(CircularProgress)`
  margin: 1rem;
`;

export const LinearProgressStyled = styled(LinearProgress)<{ opacity: number }>`
  margin: 2rem 0;
  opacity: ${p => p.opacity || 1};
`;
