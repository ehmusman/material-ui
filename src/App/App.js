import './App.css'
import { createMuiTheme, makeStyles, ThemeProvider } from "@material-ui/core";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";
import Employees from '../pages/employees/Employees';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3b5998'
    },
    secondary: {
      main: '#f00'
    }
  },
  shape: {
    borderRadius: '12px'
  },
  overrides: { // we can change css of component using overrides
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: { // we are changinh the ripple effect of PowerSettingsNewIcon when its active or pressed
    MuiIconButton: {
      disableRipple: true
    }
  }
})
const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme} >
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />

      </div>
    </ThemeProvider>


  );
}

export default App;
