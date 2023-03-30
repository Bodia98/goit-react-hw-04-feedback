import PropTypes from 'prop-types';
import { Title } from './FeedbackSectionStyled';
export const Section = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.shape(PropTypes.element.isRequired).isRequired,
};
