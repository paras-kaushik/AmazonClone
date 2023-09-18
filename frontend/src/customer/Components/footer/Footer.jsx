import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid
      className="bg-black text-white mt-10 text-center"
      container
      color={'white'}
      sx={{ bgcolor: 'black', color: 'white', py: 1 }}
    >
      <Grid item xs={12} sm={12} md={12}>
        <Typography className="pb-2" variant="h6" gutterBottom>
          Contact Info
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Perfect Collection
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          9899258797
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          SUNRISE GREENS, SC-190, Jaipuria, behind BIKANERWALA
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Ahinsa Khand 1,Indirapuram, Ghaziabad, Uttar Pradesh 201014
        </Typography>
      </Grid>
      <Grid className="pt-2" item xs={12}>
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 Perfect Collection. All rights reserved.
        </Typography>
        <Typography variant="body2" component="p" align="center">
          <Link
            href="https://www.linkedin.com/in/paras-kaushik-722a84134/"
            color="inherit"
            underline="always"
          >
            Made with love by Paras Kaushik
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
