import { Button, makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";

import { addGUESTBOOKData } from "../../store/ducks/guestbook/actions";
import { entriesAPI } from "../../api/entries";
import { GuestBookEntry } from "../../store/ducks/guestbook/contracts/state";

const schema = yup.object().shape({
  name: yup.string().trim().required("Обязательное имя"),
  content: yup
    .string()
    .trim()
    .min(10, "Минимальная длинна 10 символов")
    .max(150, "Максимальная длинна 150 символов")
    .required("Обязательный контент"),
});

const useStyles = makeStyles({
  formContainer: {
    margin: 10,
    width: 300,
    "& .MuiTextField-root + .MuiTextField-root": {
      margin: "20px 0 0 0",
    },
  },
  wrapperForm: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  formButton: {
    textAlign: "center",
    margin: "10px auto",
    display: "block",
  },
});

// Чист для разнообразия добавление записи без санки :)

const GuestBookEntryForm: React.FC = () => {
  const { register, handleSubmit, errors, reset } = useForm<GuestBookEntry>({
    resolver: yupResolver(schema),
  });
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onSubmit = async (data: GuestBookEntry) => {
    try {
      setLoading(true);
      const response = await entriesAPI.create(data);
      dispatch(addGUESTBOOKData([response.data]));
      setLoading(false);
      reset();
    } catch (error) {
      setLoading(false);
      reset();
    }
  };

  return (
    <div className={classes.wrapperForm}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className={classes.formContainer}
      >
        <TextField
          inputRef={register}
          label="Имя"
          name="name"
          variant="outlined"
          type="text"
          error={!!errors.name?.message}
          helperText={errors.name?.message}
          fullWidth
        />

        <TextField
          inputRef={register}
          label="Содержание"
          name="content"
          multiline
          variant="outlined"
          fullWidth
          helperText={errors.content?.message}
          error={!!errors.content?.message}
          rows={3}
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={isLoading}
          className={classes.formButton}
        >
          {isLoading ? "Добавляется запись" : "Добавить запись"}
        </Button>
      </form>
    </div>
  );
};

export default GuestBookEntryForm;
