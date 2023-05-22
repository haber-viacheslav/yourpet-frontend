import notfound_sm_1x from '../../images/notfound-hero/notfound-sm@1x-1.webp';
import notfound_sm_2x from '../../images/notfound-hero/notfound-sm@2x-2.webp';
import notfound_md_1x from '../../images/notfound-hero/notfound-md@1x-1.webp';
import notfound_md_2x from '../../images/notfound-hero/notfound-md@2x-2.webp';
import notfound_lg_1x from '../../images/notfound-hero/notfound-lg@1x-1.webp';
import notfound_lg_2x from '../../images/notfound-hero/notfound-lg@2x-2.webp';

import {
  Title,
  Span,
  BlockTitle,
  ImageWrapper,
  Box,
  BlockBtn,
  Cat,
  LinkToMain,
  Links,
} from './NotfoundHero.syled';
import { SvgPawprint } from '../buttons/buttons';

export const NotFoundHero = () => {
  return (
    <Box>
      <BlockTitle>
        <Title>
          <Span>Ooops!</Span>
          This page not found :(
        </Title>
      </BlockTitle>

      <ImageWrapper>
        <Cat
          srcSet={`${notfound_sm_1x} 280w, ${notfound_sm_2x} 560w, ${notfound_md_1x} 704w, ${notfound_md_2x} 1408w, ${notfound_lg_1x} 822w, ${notfound_lg_2x} 1644w`}
          src={`${notfound_sm_1x}`}
          sizes="(min-width: 1280px) 1644px, (min-width: 1280px) 822px, (min-width: 768px) 1408px, (min-width: 768px) 704px,  100vw"
          alt="not found page"
          loading="lazy"
        />
      </ImageWrapper>

      <BlockBtn>
        <LinkToMain>
          <Links to="./">
            To main page
            <SvgPawprint />
          </Links>
        </LinkToMain>
      </BlockBtn>
    </Box>
  );
};
