import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 30px 0 0;
`;

export const Content = styled.div`
  font-weight: var(--history-chart-weight);
  font-size: var(--history-chart-size);
  line-height: var(--history-chart-line-height);
  text-transform: var(--history-chart-transform);
  color: var(--history-chart-color);
`;

export const Nodata = styled.p`
  text-align: center;
  margin: 0;
`;

export const ChartWrapper = styled.div`
  width: 100%;
  height: 236px;
  background: var(--history-chart-bg);
  border-radius: var(--history-chart-radius);
  border: var(--history-chart-border);
  padding: var(--history-chart-padding);
  color: var(--history-chart-color);
`;

export const TooltipWrapper = styled.div`
  background: var(--history-tooltip-bg);
  border: var(--history-tooltip-border);
  border-radius: var(--history-tooltip-radius);
  color: var(--history-tooltip-color);
  width: 190px;
  min-height: 55px;
  padding: 10px;
`;

export const InfoDate = styled.span`
  display: block;
`;

export const InfoPrice = styled.span`
  display: block;
`;
