import { Card, CardContent, CardMedia, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface Props {
  title: string;
  price: string;
  image: string;
  etsyLink: string;
}

export default function ProductCard({ title, price, image, etsyLink }: Props) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <a
        href={etsyLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <Card
          sx={{
            background: "linear-gradient(145deg, #1a1d24, #14161c)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}
        >
          <CardMedia component="img" height="200" image={image} />
          <CardContent>
            <Typography variant="h6">{title}</Typography>
            <Typography color="secondary">{price}</Typography>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}
