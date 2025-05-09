import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { CardActions, Grid } from '@mui/material';
import ShareButton from './shareButton';


export default function SmallerViewObject(props: any) {

    const location = useLocation();

    const [rawurl, setRawURL] = useState(props.rawurl);

    // const width =props.width ? props.width : 200




    return (
        <Card sx={{ display: "flex", width: '100%' }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                        Object: {props.detectedObject}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" component="div">
                        Taken on: {props.date ? props.date : new Date().toLocaleString().split(',')[0] + ''}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component="img"
                sx={{ height: "22vh", marginLeft: 'auto' }}
                image={props.rawurl}
                alt="Detected Object"
            />
        </Card>
    );
}
