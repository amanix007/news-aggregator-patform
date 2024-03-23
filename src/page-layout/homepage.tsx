import React, { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Avatar,
  styled,
  Box,
  Button,
  Skeleton,
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

const data = [
  {
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
    channel: 'Don Diablo',
    views: '396k views',
    createdAt: 'a week ago',
  },
  {
    src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
    title: 'Queen - Greatest Hits',
    channel: 'Queen Official',
    views: '40M views',
    createdAt: '3 years ago',
  },
  {
    src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
    title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
    channel: 'Calvin Harris',
    views: '130M views',
    createdAt: '10 months ago',
  },
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

const SavePreferenceButton = styled(Button)(({ theme }) => ({
  minWidth: 180,
  marginLeft: 8,
}));
const SearchButton = styled(Button)(({ theme }) => ({
  minWidth: 100,
  marginLeft: 8,
}));
type Props = {};

export default function HomePage({}: Props) {
  const [loading, setloading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const initSearchAll = () => {
    setloading(true);
    setloading(false);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: 700,
            ml: "auto",
            mr: "auto",
            mb: 8,
          }}
          component={"form"}
        >
          <SearchInput
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchButton
            variant="contained"
            sx={{ textWrap: "nowrap" }}
            type="submit"
            onClick={initSearchAll}
          >
            Search
          </SearchButton>
          <SavePreferenceButton variant="outlined">
            Save Preference
          </SavePreferenceButton>
        </Box>

        <Grid container wrap="nowrap">
          {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
            <Box key={index} sx={{ width: 252, marginRight: 4, my: 8 }}>
              {item ? (
                <img
                  style={{ width: 252, height: 142 }}
                  alt={item.title}
                  src={item.src}
                />
              ) : (
                <Skeleton variant="rectangular" width={252} height={142} />
              )}
              {item ? (
                <Box sx={{ pr: 2 }}>
                  <Typography gutterBottom variant="body2">
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="caption"
                    color="text.secondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {`${item.views} • ${item.createdAt}`}
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ pt: 4 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Box>
          ))}
        </Grid>
      
      </Grid>
    </div>
  );
}
