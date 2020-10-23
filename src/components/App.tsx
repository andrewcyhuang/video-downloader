import React, { Component } from 'react';
import SearchBar from './SearchBar'
import DownloadList from './VideoList'
import { Grid, ThemeProvider, Typography, createMuiTheme, CssBaseline } from '@material-ui/core'

const theme = createMuiTheme({
    typography: {
        h2: {
            fontSize: 50,
            marginTop: "30%",
            marginBottom: "5%",
            color: "#EEFCEA"
        }
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
      background: {
          default: '#88bdbc'
      }
    },
});

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div style={{ textAlign: "center"}}>
                    
                    <Grid container justify="center">
                        <Grid item xs={2} sm={6}>
                            <Typography variant="h2" component="div">
                                Video Downloader
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={2} sm={6}>
                            <SearchBar/>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={2} sm={6}>
                            <DownloadList/>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        )
    }
}

export default App;