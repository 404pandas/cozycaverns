import { Typography, Box } from "@mui/material";
import { Grid, Container } from "@mui/material";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

const Products = () => {
  return (
    <>
      <Box>
        <Typography variant="h2" gutterBottom>
          Our Products
        </Typography>
        <Typography variant="body1">
          Welcome to Cozy Caverns — a light, elegant, and playful space inspired
          by the warmth of hidden underground sanctuaries.
        </Typography>
      </Box>
      <Box>
        {/* Product cards will go here */}

        <Container sx={{ py: 10 }}>
          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ProductCard
                    title={product.title}
                    price={product.price}
                    image={product.image}
                    etsyLink={product.etsyLink}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Products;
