import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const productDetails = ({ item }) => {

  const priceDrop = parseInt((item.price_strikethrough-item.price)/item.price * 100) ; 

  return (
    <div>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={
            item.url_image
              ? item.url_image
              : "https://www.theworlds50best.com/filestore/jpg/W50BR22-Restaurant-Tim-Raue-Interior.jpg"
          }
          title={item.title.slice(0,20)}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {item.title.slice(0,20)}
          </Typography>
          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="subtitle1">
              Price drop by {priceDrop}%
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Rating value={Number(item.rating)} readOnly />
            <Typography gutterBottom variant="subtitle1">
              Out of {item.reviews_count} reviews
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {item.price}
            </Typography>
          </Box>
          {item.isPrime && <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">isPrime</Typography>
            <Typography gutterBottom variant="subtitle1">
              {item.is_prime}
            </Typography>
          </Box>}
          {item.best_seller && <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">BestSeller</Typography>
            <Typography gutterBottom variant="subtitle1">
              {item.best_seller}
            </Typography>
          </Box>}
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Shipping Information</Typography>
            <Typography gutterBottom variant="subtitle1">
              {item.shipping_information}
            </Typography>
          </Box>

          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(`https://www.amazon.in/${item.url}`, "_blank")}
            >
              Buy Now!
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};

export default productDetails;
