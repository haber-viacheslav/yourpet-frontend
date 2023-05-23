import { useState, useEffect, useRef } from 'react';
import {
  CardTitle,
  Wrapper,
  ContentWrapper,
  LogoWrapper,
  ScheduleWrapper,
  LogoContent,
  TextContent,
  Link,
  Title,
  Text,
  ScheduleBtn,
  Schedule,
  DayWrapper,
  DayTime,
  Day,
  MinTime,
  MaxTime,
} from './CardItem.styled';
// import PropTypes from 'prop-types';

import cat_sm_1x from '../../../images/pets-hero/cat_sm@1x.webp';

export const CardItem = () => {
  const [showSchedule, SetShowSchedule] = useState(false);
  const [time, SetTime] = useState([]);
  const scheduleRef = useRef(null);

  useEffect(() => {
    const handleKeyEscape = event => {
      if (event.code === 'Escape') {
        SetShowSchedule(false);
      }
    };
    if (showSchedule === true) {
      window.addEventListener('keydown', handleKeyEscape);
    }

    return () => window.removeEventListener('keydown', handleKeyEscape);
  }, [showSchedule]);

  useEffect(() => {
    const schedule = scheduleRef.current;
    const handleOnClick = e => {
      if (e.target !== schedule && !schedule.contains(e.target)) {
        SetShowSchedule(false);
      }
    };

    if (showSchedule === true) {
      document.addEventListener('click', e => handleOnClick(e));
    }

    return () => {
      document.removeEventListener('click', e => handleOnClick(e));
    };
  }, [showSchedule]);

  const handleOnClick = () => {
    SetShowSchedule(prevState => !prevState);

    const day = new Date().getDay();
    let hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    hours = hours === 0 ? 24 : hours;
    const time = Number(hours + '.' + minutes);
    SetTime([day, time]);
  };

  return (
    <Wrapper>
      <CardTitle
        href="https://happypaw.ua/ua/"
        rel="noreferrer noopener"
        target="_blank"
        aria-label="Happy paw"
      >
        Happy paw
      </CardTitle>
      <ContentWrapper>
        <LogoWrapper>
          <LogoContent src={cat_sm_1x} alt="cat" loading="lazy"></LogoContent>
        </LogoWrapper>
        <TextContent>
          <ScheduleWrapper>
            <ScheduleBtn
              ref={scheduleRef}
              onClick={handleOnClick}
              data-schedule={showSchedule}
            >
              <Title>Time:</Title>
              <Text>09:00-19:00</Text>
            </ScheduleBtn>
            {showSchedule && (
              <Schedule>
                <DayWrapper data-time={time} data-day={1}>
                  <Day>MN</Day>
                  <DayTime>
                    <MinTime>8:00</MinTime>-<MaxTime>19:00</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={2}>
                  <Day>TU</Day>
                  <DayTime>
                    <MinTime>8:00</MinTime>-<MaxTime>19:00</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={3}>
                  <Day>WE</Day>
                  <DayTime>
                    <MinTime>8:00</MinTime>-<MaxTime>19:00</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={4}>
                  <Day>TH</Day>
                  <DayTime>
                    <MinTime>8:00</MinTime>-<MaxTime>19:00</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={5}>
                  <Day>FR</Day>
                  <DayTime>
                    <MinTime>8:00</MinTime>-<MaxTime>19:00</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={6}>
                  <Day>SA</Day>
                  <DayTime>
                    <MinTime>8:00</MinTime>-<MaxTime>19:00</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={0}>
                  <Day>SU</Day>
                  <DayTime>
                    <MinTime>8:00</MinTime>-<MaxTime>19:00</MaxTime>
                  </DayTime>
                </DayWrapper>
              </Schedule>
            )}
          </ScheduleWrapper>
          <Link
            href="https://goo.gl/maps/o4fTwHgZk6BJGLU1A?coh=178572&entry=tt"
            rel="noreferrer noopener"
            target="_blank"
            aria-label="address"
          >
            <Title>Address:</Title>
            <Text>Chota Rystaveli Street, 44</Text>
          </Link>
          <Link href="mailto:hello@happypaw.ua" aria-label="email">
            <Title>Email:</Title>
            <Text>hello@happypaw.ua</Text>
          </Link>
          <Link href="tel:+380 44 290-03-29" aria-label="phone number">
            <Title>Phone:</Title>
            <Text>+380 44 290-03-29</Text>
          </Link>
        </TextContent>
      </ContentWrapper>
    </Wrapper>
  );
};

// CardItem.propTypes = {
//   emulTouch: PropTypes.arrayOf(PropTypes.string).isRequired,
//   errors: PropTypes.object.isRequired,
//   touched: PropTypes.object.isRequired,
//   category: PropTypes.string.isRequired,
// };
