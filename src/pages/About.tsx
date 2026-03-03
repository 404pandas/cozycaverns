import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const team = [
  {
    name: "Lex Rumptz",
    role: "Founder & Creator",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    location: "Knoxville, TN",
  },
  {
    name: "Lex's Friend",
    role: "Founder & Creator",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    location: "Knoxville, TN",
  },
  {
    name: "Mary Elenius",
    role: "Head of Engineering",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    location: "Knoxville, TN",
  },
];

const About = () => {
  return (
    <Box sx={{ px: { xs: 3, md: 8 }, py: 10 }}>
      <Typography variant="h2" gutterBottom>
        About Cozy Caverns
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to Cozy Caverns — a light, elegant, and playful space inspired
        by the warmth of hidden underground sanctuaries. Our mission is to bring
        cozy handmade treasures to your home, blending the comfort of natural
        textures with whimsical designs.
      </Typography>

      <Typography variant="body1" paragraph>
        Founded in the heart of Tennessee, we believe every piece should tell a
        story and invite a sense of calm, comfort, and creativity into your
        life. Our team of artisans, designers, and dreamers work tirelessly to
        craft items that delight and inspire.
      </Typography>

      <Typography variant="h4" sx={{ mt: 6, mb: 4 }}>
        Meet Our Team
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {team.map((member) => (
          <Grid item xs={12} sm={6} md={3} key={member.name}>
            <Card
              sx={{
                background: "linear-gradient(145deg, #1a1d24, #14161c)",
                color: "#fff",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                textAlign: "center",
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={member.image}
                alt={member.name}
              />
              <CardContent>
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="secondary">
                  {member.role}
                </Typography>
                <Typography variant="body2">{member.location}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="body1" paragraph sx={{ mt: 6 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus,
        nunc vel tristique fermentum, sem libero aliquet sapien, a hendrerit
        sapien ex a justo. Donec non massa non erat feugiat vehicula.
      </Typography>

      <Typography variant="body1" paragraph>
        Fusce et nisl quis ligula vehicula cursus. Quisque sed arcu vitae nisi
        venenatis tincidunt. Curabitur ac ante euismod, facilisis turpis vel,
        tristique ligula. Nullam vitae leo nec justo consequat fringilla.
      </Typography>
    </Box>
  );
};

export default About;
