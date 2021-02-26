import React from 'react';
import {Box, Grid, Switch, Button as MaterialButton, FormControlLabel} from '@material-ui/core'
function TopBar(props) {
    return (
        <Box px={1} py={1} mt={3} mb={1} bgcolor="#cbe8e7">
            <Grid container alignItems={'center'}>
                <Grid item xs>
                    <FormControlLabel control={<Switch checked={true} />} label={'Enable'}  />
                </Grid>
                <Grid item>
                    <MaterialButton size={'small'} variant={'outlined'} color={'secondary'}>
                        Serialize JSON to Console
                    </MaterialButton>
                </Grid>
            </Grid>

        </Box>
    );
}

export default TopBar;
