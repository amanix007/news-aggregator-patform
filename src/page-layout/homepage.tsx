import React from "react";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  styled,
  Box,
} from "@mui/material";
import SearchInput from "../components/Common/SerchInput";

const articles = [
  {
    id: 1,
    title: "Breaking News: New Discovery in Science",
    author: "John Doe",
    date: "March 16, 2024",
    category: "Science",
    source: "Scientific American",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    id: 2,
    title: "Technology Advancements: AI Takes Over the World",
    author: "Jane Smith",
    date: "March 15, 2024",
    category: "Technology",
    source: "TechCrunch",
    content: "Nulla facilisi. Sed consectetur ligula sed lacinia suscipit.",
    imageUrl: "https://example.com/image2.jpg",
  },
  // Add more articles as needed
];
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  marginBottom: theme.spacing(2),
  padding: 16,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(7),
  height: theme.spacing(7),
  marginRight: theme.spacing(2),
}));

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Box>
          <SearchInput />
        </Box>
        {articles.map((article) => (
          <Grid item xs={12} key={article.id}>
            <StyledCard>
              <StyledAvatar alt={article.author} src={article.imageUrl} />
              <div>
                <Typography variant="h6">
                  <a href="#">{article.title}</a>{" "}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  {`${article.author} - ${article.date} - ${article.category} - ${article.source}`}
                </Typography>
                <CardContent>
                  <Typography variant="body2" component="p">
                    {article.content}
                  </Typography>
                </CardContent>
              </div>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
