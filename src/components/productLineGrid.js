import React from 'react';
import { 
    makeStyles,
    GridList,
    GridListTile,
    IconButton,
    GridListTileBar
} from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// import Img from 'gatsby-image';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background: 
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    }
}))

export default function ProductLineGrid(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {props.products.map(({node}) => (
                    <GridListTile key={node.shopifyId}>
                        {node.images && <img src={node.images[0].localFile.childImageSharp.fluid.originalImg} alt={node.title} />}
                        <GridListTileBar
                            title={node.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title
                            }}
                            actionIcon={
                                <IconButton aria-label={`star ${node.title}`}>
                                    <StarBorderIcon className={classes.title} />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    )
}