import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { useNavigate } from "react-router-dom"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      margin: -8,
      marginBottom: 30,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function Navbar() {
  const classes = useStyles();
  const navigation = useNavigate()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit" onClick={() => navigation('/')}>Contacts</Button>
          </Typography>
          <Button color="inherit" onClick={() => navigation('/register-contacts')}>Register</Button>
          <Button color="inherit" onClick={() => navigation('/consult-contacts')}>Consult</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}