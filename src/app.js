import {Switch, Route} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import {makeStyles, useTheme} from '@material-ui/core/styles'
import LeftMenu from 'src/components/menus/left-menu'
import BottomMenu from 'src/components/menus/bottom-menu'

// components
import ThemeSwitcher from 'src/components/theme-switcher'
import TranslationSwitcher from 'src/components/translation-switcher'

// routes
import Profile from 'src/views/profile'
import Home from 'src/views/home'
import Search from 'src/views/search'
import User from 'src/views/user'
import Peers from 'src/views/peers'

const useStyles = makeStyles((theme) => ({
  leftColumn: {
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    [theme.breakpoints.down('md')]: {
      width: theme.sav3.layout.columns.left.width.sm
    },
    [theme.breakpoints.down('lg')]: {
      width: theme.sav3.layout.columns.left.width.xs
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.sav3.layout.columns.left.width.md
    }
  },
  middleColumn: {
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    },
    [theme.breakpoints.up('xs')]: {
      width: theme.sav3.layout.columns.middle.width.md
    },
    // borders
    borderLeftWidth: theme.sav3.borderWidth,
    borderRightWidth: theme.sav3.borderWidth,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderStyle: 'solid',
    borderColor: theme.sav3.borderColor
  },
  rightColumn: {
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.down('lg')]: {
      width: theme.sav3.layout.columns.right.width.md,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.up('lg')]: {
      width: theme.sav3.layout.columns.right.width.lg,
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  bottomMenu: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  appBar: {
    backgroundColor: theme.palette.background.default
  }
}))

/**
 * @returns {JSX.Element}
 */
function App () {
  const classes = useStyles()
  const theme = useTheme()
  window.theme = theme

  return (
    <div>
      <Grid container justify='center'>
        <Grid item className={classes.leftColumn}>
          <LeftMenu />
        </Grid>
        <Grid item className={classes.middleColumn}>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/profile' exact>
              <Profile />
            </Route>
            <Route path='/search' exact>
              <Search />
            </Route>
            <Route path='/user' exact>
              <User />
            </Route>
            <Route>
              <Peers path='/peers' exact />
            </Route>
          </Switch>
        </Grid>
        <Grid item className={classes.rightColumn}>
          <ThemeSwitcher />
          <TranslationSwitcher />
        </Grid>
      </Grid>
      <BottomMenu className={classes.bottomMenu} />
    </div>
  )
}

export default App
