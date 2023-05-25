// import PropTypes from 'prop-types';

import {
  Item,
  Wrap,
  WrapImg,
  Img,
  Plug,
  Title,
  Decsr,
  WrapBottom,
  Date,
  Link,
} from './NewsItem.styled';
import icons from 'images/icons.svg';

export const NewsItem = ({ imgUrl, title, text, date, url }) => {
  const transformDate = date => {
    return date.split('T')[0].split('-').reverse().join('/');
  };
  return (
    <Item>
      <WrapImg>
        {{ imgUrl } !== '' ? (
          <Img src={imgUrl} alt={title} loading="lazy" width="280" />
        ) : (
          <Plug>
            <use href={icons + '#icon-pawprint'}></use>
          </Plug>
        )}
      </WrapImg>
      <Wrap>
        <Title>{title}</Title>

        <Decsr>{text}</Decsr>
      </Wrap>
      <WrapBottom>
        <Date>{transformDate(date)}</Date>
        <Link href={url} target="_blank" rel="noreferrer noopener">
          Read more
        </Link>
      </WrapBottom>
    </Item>
  );
};

// NewsItem.propTypes = {
//   imgUrl: PropTypes.string,
//   title: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
// };
