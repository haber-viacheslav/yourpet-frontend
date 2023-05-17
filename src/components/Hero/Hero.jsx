import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Typography, Paper } from '@mui/material';
import * as images from 'images/images';
import { randomPosition } from 'components/helpers/randomPosition';
import { HeroWrp } from './Hero.styled';

export const Hero = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  const matchedLg = useMediaQuery(theme.breakpoints.up('lg'));
  const matchesXl = useMediaQuery(theme.breakpoints.up('xl'));
  return (
    <Paper sx={{ height: { xs: '72vh', sm: '80vh', lg: '84vh', xl: '85vh' } }}>
      <HeroWrp>
        <MouseParallaxContainer
          className="parallax"
          containerStyle={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            right: 0,
            display: 'flex',
          }}
          globalFactorX={0.3}
          globalFactorY={0.3}
          resetOnLeave
        >
          <Typography
            variant="h1"
            sx={{
              position: 'absolute',
              left: { xs: '20%', sm: '50%' },
              top: '65%',
              transform: {
                xs: 'translate(-20%, -50%)',
                sm: 'translate(-50%, -50%)',
              },
              zIndex: 50,
            }}
          >
            Keep your contacts in one place - our contacts library!
          </Typography>
          <MouseParallaxChild
            factorX={0.1}
            factorY={0.1}
            style={{
              background: `url(${images.mainBg})`,
              backgroundPositionY: '50%',
              transform: 'scale(1.2)',
              position: 'absolute',
              filter: 'blur(6px) brightness(50%)',
              backgroundSize: 'auto',
              backgroundRepeat: 'repeat',
              width: '100%',
              height: '100%',
              backfaceVisibility: 'hidden',
            }}
          />
          {matchesMd && (
            <>
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.2}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(20, 30)}px`,
                  left: `${randomPosition(20, 40)}px`,
                }}
              >
                <img width="100px" src={images.iconVoice} alt="voice" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.01}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: '-10%',
                  left: '50%',
                  zIndex: 40,
                  transform: 'translateX(-50%)',
                }}
              >
                <img
                  width="600px"
                  src={images.phoneHands}
                  alt="phone in hands"
                />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.1}
                factorY={0.2}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(20, 60)}px`,
                  right: `${randomPosition(30, 50)}px`,
                }}
              >
                <img width="100px" src={images.iconPhone} alt="phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(20, 60)}px`,
                  right: `${randomPosition(30, 50)}px`,
                }}
              >
                <img width="100px" src={images.iconPhoneOld} alt="old phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.5}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(200, 280)}px`,
                  left: `${randomPosition(20, 80)}px`,
                }}
              >
                <img width="60px" src={images.iconPhone1} alt="phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(30, 100)}px`,
                  left: `${randomPosition(30, 100)}px`,
                }}
              >
                <img width="100px" src={images.iconMail} alt="mail" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.5}
                factorY={0.2}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(30, 150)}px`,
                  left: '50%',
                }}
              >
                <img width="100px" src={images.iconMail1} alt="open mail" />
              </MouseParallaxChild>
            </>
          )}

          {matchedLg && (
            <>
              <MouseParallaxChild
                factorX={0.05}
                factorY={0.4}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: `${randomPosition(50, 80)}px`,
                  right: `${randomPosition(150, 200)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone} alt="color phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.4}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(40, 60)}%`,
                  right: `${randomPosition(50, 80)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone4} alt="over phone" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.4}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(100, 150)}px`,
                  left: `${randomPosition(140, 200)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone3} alt="phone 3" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.4}
                factorY={0.4}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(100, 200)}px`,
                  right: `${randomPosition(100, 200)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone2} alt="phone 2" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.4}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  bottom: `${randomPosition(300, 400)}px`,
                  left: `${randomPosition(30, 80)}px`,
                }}
              >
                <img width="100px" src={images.colorPhone1} alt="phone 1" />
              </MouseParallaxChild>
            </>
          )}

          {matchesXl && (
            <>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.2}
                style={{
                  filter: 'invert(2)',
                  position: 'absolute',
                  top: '25%',
                  left: '65%',
                  transform: 'translate(-25%, -65%)',
                }}
              >
                <img width="100px" src={images.button9} alt="button9" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.3}
                style={{
                  filter: 'invert(2)',
                  position: 'absolute',
                  top: '30%',
                  left: '60%',
                  transform: 'translate(-30%, -60%)',
                }}
              >
                <img width="100px" src={images.button8} alt="button8" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.2}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: '35%',
                  left: '55%',
                  transform: 'translate(-35%, -55%)',
                }}
              >
                <img width="100px" src={images.button7} alt="button7" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: '40%',
                  left: '50%',
                  transform: 'translate(-40%, -50%)',
                }}
              >
                <img width="100px" src={images.button6} alt="button6" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.4}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: '35%',
                  left: '45%',
                  transform: 'translate(-35%, -45%)',
                }}
              >
                <img width="100px" src={images.button5} alt="button5" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.4}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: '30%',
                  left: '40%',
                  transform: 'translate(-30%, -40%)',
                }}
              >
                <img width="100px" src={images.button4} alt="button4" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.2}
                factorY={0.4}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: '25%',
                  left: '35%',
                  transform: 'translate(-25%, -35%)',
                }}
              >
                <img width="100px" src={images.button3} alt="button3" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.4}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: '30%',
                  left: '30%',
                  transform: 'translate(-30%, -30%)',
                }}
              >
                <img width="100px" src={images.button2} alt="button2" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.4}
                style={{
                  filter: 'invert(3)',
                  position: 'absolute',
                  top: '35%',
                  left: '25%',
                  transform: 'translate(-35%, -25%)',
                }}
              >
                <img width="100px" src={images.button1} alt="button1" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: '40%',
                  left: '20%',
                  transform: 'translate(-40%, -20%)',
                }}
              >
                <img width="100px" src={images.button0} alt="button0" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.3}
                factorY={0.4}
                style={{
                  filter: 'invert(2)',
                  position: 'absolute',
                  top: '30%',
                  left: '70%',
                  transform: 'translate(-30%, -70%)',
                }}
              >
                <img width="100px" src={images.button10} alt="button10" />
              </MouseParallaxChild>
              <MouseParallaxChild
                factorX={0.4}
                factorY={0.3}
                style={{
                  filter: 'invert(1)',
                  position: 'absolute',
                  top: '35%',
                  left: '75%',
                  transform: 'translate(-35%, -75%)',
                }}
              >
                <img width="100px" src={images.button11} alt="button11" />
              </MouseParallaxChild>
            </>
          )}
        </MouseParallaxContainer>
      </HeroWrp>
    </Paper>
  );
};
