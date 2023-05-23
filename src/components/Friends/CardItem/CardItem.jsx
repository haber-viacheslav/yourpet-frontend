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

export const CardItem = ({
  email,
  address,
  url,
  addressUrl,
  imageUrl,
  phone,
  title,
  workDays,
}) => {
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

    return () => document.removeEventListener('click', e => handleOnClick(e));
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

  const minMN = workDays
    ? workDays[0].isOpen
      ? workDays[0].from + '-'
      : 'closed'
    : 'day & night';
  const maxMN = workDays ? (workDays[0].isOpen ? workDays[0].to : '') : '';

  const minTU = workDays
    ? workDays[1].isOpen
      ? workDays[1].from + '-'
      : 'closed'
    : 'day & night';
  const maxTU = workDays ? (workDays[1].isOpen ? workDays[1].to : '') : '';

  const minWE = workDays
    ? workDays[2].isOpen
      ? workDays[2].from + '-'
      : 'closed'
    : 'day & night';
  const maxWE = workDays ? (workDays[2].isOpen ? workDays[2].to : '') : '';

  const minTH = workDays
    ? workDays[3].isOpen
      ? workDays[3].from + '-'
      : 'closed'
    : 'day & night';
  const maxTH = workDays ? (workDays[3].isOpen ? workDays[3].to : '') : '';

  const minFR = workDays
    ? workDays[4].isOpen
      ? workDays[4].from + '-'
      : 'closed'
    : 'day & night';
  const maxFR = workDays ? (workDays[4].isOpen ? workDays[4].to : '') : '';

  const minSA = workDays
    ? workDays[5].isOpen
      ? workDays[5].from + '-'
      : 'closed'
    : 'day & night';
  const maxSA = workDays ? (workDays[5].isOpen ? workDays[5].to : '') : '';

  const minSU = workDays
    ? workDays[6].isOpen
      ? workDays[6].from + '-'
      : 'closed'
    : 'day & night';
  const maxSU = workDays ? (workDays[6].isOpen ? workDays[6].to : '') : '';

  let workTime;
  switch (new Date().getDay()) {
    case 0:
      workTime = minMN + maxMN;
      break;
    case 1:
      workTime = minTU + maxTU;
      break;
    case 2:
      workTime = minWE + maxWE;
      break;
    case 3:
      workTime = minTH + maxTH;
      break;
    case 4:
      workTime = minFR + maxFR;
      break;
    case 5:
      workTime = minSA + maxSA;
      break;
    case 6:
      workTime = minSU + maxSU;
      break;
    default:
  }

  return (
    <Wrapper>
      <CardTitle
        href={url}
        rel="noreferrer noopener"
        target="_blank"
        aria-label="Happy paw"
      >
        {title}
      </CardTitle>
      <ContentWrapper>
        <LogoWrapper>
          <LogoContent src={imageUrl} alt={title} loading="lazy"></LogoContent>
        </LogoWrapper>
        <TextContent>
          <ScheduleWrapper>
            <ScheduleBtn
              ref={scheduleRef}
              onClick={handleOnClick}
              data-schedule={showSchedule}
            >
              <Title>Time:</Title>
              <Text>{workTime}</Text>
            </ScheduleBtn>
            {showSchedule && (
              <Schedule>
                <DayWrapper data-time={time} data-day={1}>
                  <Day>MN</Day>
                  <DayTime>
                    <MinTime>{minMN}</MinTime>
                    <MaxTime>{maxMN}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={2}>
                  <Day>TU</Day>
                  <DayTime>
                    <MinTime>{minTU}</MinTime>
                    <MaxTime>{maxTU}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={3}>
                  <Day>WE</Day>
                  <DayTime>
                    <MinTime>{minWE}</MinTime>
                    <MaxTime>{maxWE}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={4}>
                  <Day>TH</Day>
                  <DayTime>
                    <MinTime>{minTH}</MinTime>
                    <MaxTime>{maxTH}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={5}>
                  <Day>FR</Day>
                  <DayTime>
                    <MinTime>{minFR}</MinTime>
                    <MaxTime>{maxFR}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={6}>
                  <Day>SA</Day>
                  <DayTime>
                    <MinTime>{minSA}</MinTime>
                    <MaxTime>{maxSA}</MaxTime>
                  </DayTime>
                </DayWrapper>
                <DayWrapper data-time={time} data-day={0}>
                  <Day>SU</Day>
                  <DayTime>
                    <MinTime>{minSU}</MinTime>
                    <MaxTime>{maxSU}</MaxTime>
                  </DayTime>
                </DayWrapper>
              </Schedule>
            )}
          </ScheduleWrapper>
          <Link
            href={addressUrl}
            rel="noreferrer noopener"
            target="_blank"
            aria-label="address"
          >
            <Title>Address:</Title>
            <Text>{address}</Text>
          </Link>
          <Link href={`mailto:${email || ''}`} aria-label="email">
            <Title>Email:</Title>
            <Text>{email}</Text>
          </Link>
          <Link href={`tel:${phone}`} aria-label="phone number">
            <Title>Phone:</Title>
            <Text>{phone}</Text>
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
