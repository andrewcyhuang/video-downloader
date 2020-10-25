import { ListItem, ListItemIcon, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
      width: '100%',
      height: '100%'
    },
    content: {
        height: 84,
        width: 150
    },
    icon: {
        marginLeft: -35,
        paddingRight: 20
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    duration: {
      fontSize: 12,
    },
    pos: {
      marginBottom: 12,
    },
  });

export const VideoInfo = props => {
    const classes = useStyles();

    return (
        <div key={props.videoInfo.id}>
            <ListItem className={classes.root}>
                <ListItemIcon>
                    <div className={classes.icon}>
                        <img className={classes.content} src={props.videoInfo.thumbnail} alt=''/>
                    </div>
                </ListItemIcon>
                <div className={classes.details}>
                    <Typography className={classes.title} color="textPrimary" gutterBottom>
                        {props.videoInfo.fulltitle}
                    </Typography>
                    <Typography className={classes.duration} color="textSecondary" component="h2">
                        {props.videoInfo._duration_hms}
                    </Typography>
                </div>
            </ListItem>
        </div>
    )
}