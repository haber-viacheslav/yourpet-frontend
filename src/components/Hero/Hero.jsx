import {
  HeroTitle,
  SectionWrapper,
  ImageWrapper,
  DogImage,
  CatImage,
  DoggyImage,
} from '../Hero/Hero.styled';
import cat_sm_1x from '../../images/pets-hero/cat_sm@1x.webp';
import cat_sm_2x from '../../images/pets-hero/cat_sm@2x.webp';
import cat_md_bg_1x from '../../images/pets-hero/cat_md_bg@1x.webp';
import cat_md_bg_2x from '../../images/pets-hero/cat_md_bg@2x.webp';

import dog1_sm_1x from '../../images/pets-hero/dog1_sm@1x.webp';
import dog1_sm_2x from '../../images/pets-hero/dog1_sm@2x.webp';
import dog1_md_bg_1x from '../../images/pets-hero/dog1_md_bg@1x.webp';
import dog1_md_bg_2x from '../../images/pets-hero/dog1_md_bg@2x.webp';

import dog2_sm_1x from '../../images/pets-hero/dog2_sm@1x.webp';
import dog2_sm_2x from '../../images/pets-hero/dog2_sm@2x.webp';
import dog2_md_bg_1x from '../../images/pets-hero/dog2_md_bg@1x.webp';
import dog2_md_bg_2x from '../../images/pets-hero/dog2_md_bg@2x.webp';

export const Hero = () => {
  return (
    <SectionWrapper>
      <HeroTitle>Take good care of your small pets</HeroTitle>
      <ImageWrapper>
        <CatImage
          srcSet={`${cat_sm_1x} 219w, ${cat_sm_2x} 437w , ${cat_md_bg_1x} 454w,${cat_md_bg_2x} 907w`}
          src={cat_sm_1x}
          sizes="(max-width: 767px) 219px, (max-width: 767px) 437px, (min-width: 768px) 454px, (min-width: 768px) 907px, 100vw"
          alt="cat"
          loading="lazy"
        />
        <DogImage
          srcSet={`${dog1_sm_1x} 299w, ${dog1_sm_2x} 597w , ${dog1_md_bg_1x} 729w,${dog1_md_bg_2x} 1457w`}
          src={dog1_sm_1x}
          sizes="(max-width: 767px) 299px, (max-width: 767px) 597px, (min-width: 768px) 729px, (min-width: 768px) 1457px, 100vw"
          alt="dog"
          loading="lazy"
        />
        <DoggyImage
          srcSet={`${dog2_sm_1x} 289w, ${dog2_sm_2x} 576w , ${dog2_md_bg_1x} 597w,${dog2_md_bg_2x} 1194w`}
          src={dog2_sm_1x}
          sizes="(max-width: 767px) 289px, (max-width: 767px) 576px, (min-width: 768px) 597px, (min-width: 768px) 1194px, 100vw"
          alt="dog"
          loading="lazy"
        />
      </ImageWrapper>
    </SectionWrapper>
  );
};
