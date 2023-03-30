import PropTypes from 'prop-types';
import {
  Stats,
  StatisticsTitle,
  StatisticsList,
  StatisticsItem,
  StatisticsText,
} from './FeedbackStatsStyled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Stats>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        <StatisticsItem>
          <StatisticsText>Good: {good}</StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>Neutral: {neutral}</StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>Bad: {bad}</StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>Total: {total}</StatisticsText>
        </StatisticsItem>
        <StatisticsItem>
          <StatisticsText>
            Positive feedback: {positivePercentage}%
          </StatisticsText>
        </StatisticsItem>
      </StatisticsList>
    </Stats>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
