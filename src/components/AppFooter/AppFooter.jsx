import { Paper, Container, Typography, Box, Link } from '@mui/material';

export const AppFooter = () => {
  return (
    <footer>
      <Paper sx={{ border: "1px solid '#2e2e2ef'" }}>
        <Container
          sx={{
            py: { xs: '6px', md: '20px', lg: '40px' },
          }}
        >
          <address>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: '10px', sm: '20px' },
                flexWrap: 'wrap',
                flexDirection: { sx: 'column', md: 'row' },

                px: '3rem',
              }}
            >
              <Link
                color="inherit"
                underline="hover"
                href="https://goo.gl/maps/8YeCY9hVubBcZu2P9"
                target="blank_"
                rel="noopener nofollow noreferrer"
              >
                <Typography sx={{ fontSize: '1rem' }} variant="body1">
                  Odessa, Ukraine
                </Typography>
              </Link>

              <Link
                color="inherit"
                underline="hover"
                href="mailto:gaberslavik@gmail.com"
              >
                <Typography sx={{ fontSize: '1rem' }} variant="body1">
                  gaberslavik@gmail.com
                </Typography>
              </Link>

              <Link color="inherit" underline="hover" href="tel:+380970461086">
                <Typography sx={{ fontSize: '1rem' }} variant="body1">
                  +38 097 046 10 86
                </Typography>
              </Link>
            </Box>
          </address>
        </Container>
      </Paper>
    </footer>
  );
};
