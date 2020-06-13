import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import Mood from "@material-ui/icons/Mood";
import {
  Paper,
  Typography,
  List,
  ListItemText,
  ListItem,
  TextField,
  Button,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: "1rem",
    display: "flex",
    maxHeight: "90vh",
    justifyContent: "center",
  },
  title: {
    padding: "1rem",
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  dashboard: {
    minHeight: "90vh",
  },
  topicList: {
    width: "30%",
    height: "50vh",
    borderRight: "1px solid gray",
  },
  chatBox: {
    width: "70%",
    margin: "2rem",
  },
  chatList: {
    display: "flex",
    flexDirection: "column",
    height: "50vh",
  },
  chatButton: {
    height: "3rem",
    margin: "1rem",
  },
  chats: {
    display: "flex",
    alignItems: "center",
    padding: "1rem",
  },
});

export const Dashboard = () => {
  const { topics } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [recordedChats, setRecordedChats] = useState("");
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.dashboard} elevation={3}>
        <Typography className={classes.title} variant="h4">
          WhatElse?
        </Typography>
        <Typography className={classes.title} variant="h5">
          {topic}
        </Typography>
        <div className={classes.flex}>
          <List className={classes.topicList}>
            {topics.map((topic, i) => (
              <ListItem
                button
                key={i}
                onClick={(e) => setTopic(e.target.innerText)}
              >
                <ListItemText primary={topic} />
              </ListItem>
            ))}
          </List>
          <div className={classes.chatList}>
            <div className={classes.chats}>
              <Chip size="small" label="Mariam" icon={<Mood />} />
              <Typography className={classes.title} variant="p">
                Hello
              </Typography>
            </div>
          </div>
        </div>

        {/* chat input */}

        <div className={classes.flex}>
          <TextField
            className={classes.chatBox}
            label="Send a message"
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            className={classes.chatButton}
            variant="contained"
            color="primary"
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};
