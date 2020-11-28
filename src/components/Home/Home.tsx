import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import GuestBookEntryForm from "../GuestBookEntryForm/GuestBookEntryForm";
import { GuestBookEntry } from "../../store/ducks/guestbook/contracts/state";
import { actionsThunkGuestbook } from "../../store/ducks/guestbook/actionsThunk";
import {
  selectEntries,
  selectLoadingState,
} from "../../store/ducks/guestbook/selectors";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

//  Не Обработана логика если бэк отдает пустой массив с записями.
const Home: React.FC = () => {
  const entries = useSelector(selectEntries);
  const isLoading = useSelector(selectLoadingState);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(actionsThunkGuestbook.getEntries());
  }, []);

  return (
    <div>
      {!isLoading && entries.length ? (
        <React.Fragment>
          <GuestBookEntryForm />

          {entries.map((item: GuestBookEntry) => (
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Запись
                </Typography>
                <Typography variant="h6" component="h6">
                  {item.name}
                </Typography>
                <Typography variant="body2" component="p">
                  {item.content}
                </Typography>
                <Typography variant="caption">{item.submitted}</Typography>
              </CardContent>
            </Card>
          ))}
        </React.Fragment>
      ) : (
        <CircularProgress style={{ margin: "50px auto", display: "block" }} />
      )}
    </div>
  );
};

export default Home;
