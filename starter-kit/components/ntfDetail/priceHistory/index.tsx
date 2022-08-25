import { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash';
import { HistoryIcon } from '../../shared/icons/index';
import { IGlobalActivities } from '../../../../base/interfaces/collection';
import { formatTotalAmount } from '../../../../base/utils/helper';
import { formatToCurrency } from '../../../../base/utils/price.helper';
import { formatDate } from '../../../../base/utils/time.helper';
import { ETimeFormat } from '../../../../base/constants/common';
import Collapse from '../../shared/collapse';
import { LineChart, Line, Label, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Wrapper, Content, Nodata, ChartWrapper, TooltipWrapper, InfoDate, InfoPrice } from './Styled';

interface NTFPriceHistoryProps {
  activities: IGlobalActivities[] | null;
}

const NTFPriceHistory: FC<NTFPriceHistoryProps> = (props) => {
  const { activities } = props;

  const chartStyle = {
    baseColor: '#BB9772',
    textColor: '#886F55',
    textSize: '14px',
    textWeight: '500',
    titleSize: '16px',
    titleLetterSpacing: ' 0.04em',
    priceLineColor: 'rgba(25, 171, 110, 1)',
    priceDotColor: '#F3EADB'
  };

  const priceHistory = useMemo(() => {
    if (activities && activities.length > 0) {
      const filterData = _.filter(activities, (item) => item.txType === 'exchange');
      const data = _.orderBy(filterData, 'blockTime', 'asc');
      let history: any[] = [];
      const isFormatHour = false;
      const preTime = -1;
      data.map((item) => {
        // if (preTime > 0) {
        //   const checkTime = item.blockTime - preTime;
        //   isFormatHour = checkTime < 3600000;
        // }
        // preTime = item.blockTime;
        history = [
          ...history,
          {
            blockTime: item.blockTime,
            price: Number(formatTotalAmount(item, true))
          }
        ];
      });

      return {
        history: history,
        isFormatHour: isFormatHour
      };
    }
    return null;
  }, [activities]);

  if (!priceHistory) {
    return <></>;
  }

  const renderTooltip = (data: any) => {
    const { payload } = data;
    return (
      <>
        {payload[0] ? (
          <TooltipWrapper>
            <InfoDate>{formatDate(+payload[0]?.payload?.blockTime, ETimeFormat.LONG)}</InfoDate>
            <InfoPrice>Price: {formatToCurrency(payload[0]?.payload?.price)} SOL</InfoPrice>
          </TooltipWrapper>
        ) : (
          <></>
        )}
      </>
    );
  };

  const formatXAxis = (tickItem: any) => {
    return formatDate(+tickItem, priceHistory.isFormatHour ? ETimeFormat.HOUR : ETimeFormat.MEDIUM) ?? '';
  };

  const calculateMin = (dataMin: any) => dataMin - 600000;

  const xScale = priceHistory.isFormatHour ? 'auto' : 'time';
  const xType = priceHistory.isFormatHour ? 'category' : 'number';

  return (
    <Wrapper>
      <Collapse title='Price history' icon={<HistoryIcon />} isOpen={true}>
        <Content>
          {priceHistory.history.length > 0 ? (
            <ChartWrapper>
              <ResponsiveContainer>
                <LineChart
                  width={500}
                  height={300}
                  data={priceHistory.history}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                  }}>
                  <CartesianGrid horizontal={true} vertical={false} style={{ stroke: chartStyle.baseColor }} />
                  <XAxis
                    dataKey='blockTime'
                    axisLine={{ stroke: chartStyle.baseColor }}
                    tickLine={{ stroke: chartStyle.baseColor }}
                    tick={{
                      fill: chartStyle.textColor,
                      stroke: 'none',
                      strokeWidth: 0,
                      color: chartStyle.textColor,
                      fontSize: chartStyle.textSize,
                      fontWeight: chartStyle.textWeight
                    }}
                    tickFormatter={formatXAxis}
                    tickSize={8}
                    scale={xScale}
                    type={xType}
                    domain={[calculateMin, 'dataMax']}
                  />
                  <YAxis
                    axisLine={{ stroke: chartStyle.baseColor }}
                    tickLine={{ stroke: chartStyle.baseColor }}
                    tick={{
                      fill: chartStyle.textColor,
                      stroke: 'none',
                      strokeWidth: 0,
                      color: chartStyle.textColor,
                      fontSize: chartStyle.textSize,
                      fontWeight: chartStyle.textWeight
                    }}>
                    <Label
                      value={'Price (SOL)'}
                      angle={-90}
                      style={{
                        textAnchor: 'middle',
                        fill: chartStyle.textColor,
                        color: chartStyle.textColor,
                        fontSize: chartStyle.titleSize,
                        letterSpacing: chartStyle.titleLetterSpacing
                      }}
                      position='left'
                    />
                  </YAxis>
                  <Tooltip cursor={{ stroke: chartStyle.baseColor, strokeWidth: 1 }} content={renderTooltip} />
                  <Line
                    type='monotone'
                    dataKey='price'
                    stroke={chartStyle.priceLineColor}
                    activeDot={{ fill: chartStyle.priceLineColor, stroke: chartStyle.priceDotColor, strokeWidth: 1, r: 8 }}
                    dot={{ fill: chartStyle.priceDotColor, stroke: chartStyle.priceLineColor, strokeWidth: 1, r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartWrapper>
          ) : (
            <Nodata>No data to display</Nodata>
          )}
        </Content>
      </Collapse>
    </Wrapper>
  );
};

export default observer(NTFPriceHistory);
