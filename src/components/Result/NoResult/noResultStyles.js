import styled from "styled-components";
import { ReactComponent as NoData } from "../../../img/no_data.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 350px);
`;

export const Subtitle = styled.h3`
  color: #e2e8f0;
`;

export const NoDataSvg = styled(NoData)`
  width: 200px;
  height: 200px;
`;
