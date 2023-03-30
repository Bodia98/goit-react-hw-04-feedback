import React from "react";
import { useState } from "react";
import { Section } from "./FeedbackSection/FeedbackSection";
import { SectionBox } from "./FeedbackSection/FeedbackSectionStyled";
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/FeedbackStats/FeedbackStats';
import { OptionsBtn } from 'components/FeedbackBtns/FeedbackBtns';
export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const options = {good, neutral, bad};
  const handleClickOnBtn = e => {
   switch (e.target.id) {
     case 'good':
       setGood(good + 1);
       break;
     case 'neutral':
       setNeutral(neutral + 1);
       break;
     case 'bad':
       setBad(bad + 1);
       break;
     default:
       throw new Error('Undefined option')
   }
  };

 const countTotalFeedback = () => good + neutral + bad;

 const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return <SectionBox>
      
      <Section title={'Please leave feedback'}>
        <OptionsBtn options={Object.keys(options)} handleClick={handleClickOnBtn}></OptionsBtn>
      </Section>
      
      <Section>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
        </Section>
        
    </SectionBox>
  
};
