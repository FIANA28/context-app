import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles'
import { MenuItem } from '@material-ui/core';
import { LanguageContext } from './contexts/LanguageContext';
const words = {
    polish: {
        signIn: 'Zarejestruj się',
        email: 'Adres e-mail',
        password: 'Hasło',
        remember: 'Zapamiętaj mnie'
    },
    english: {
        signIn: 'Sign In',
        email: 'Email Address',
        password: 'Password',
        remember: 'Remember Me'
    }, 
    finnish: {
        signIn: 'Kirjaudu',
        email: 'Sahköpostiosoite',
        password: 'Salasana',
        remember: 'Muista minua'
    }
}

class Form extends Component {
    static contextType = LanguageContext;

    render() {
        const { classes } = this.props; 
        const { language, changeLanguage } = this.context;
        const { email, signIn, password, remember } = words[language];
        return (
        <main className={classes.main}>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />                
                </Avatar>
                <Typography variant='subtitle1'>
                    {signIn}
                </Typography>
                <Select className={classes.option} value={language} onChange={changeLanguage}>
                    <MenuItem value='polish'>Polski</MenuItem>
                    <MenuItem value='finnish'>Suomi</MenuItem>
                    <MenuItem value='english'>English</MenuItem>
                </Select>
                <form className={classes.form}>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='email'>
                            {email}
                        </InputLabel>
                        <Input id='email' name='email' autoFocus />
                    </FormControl>
                    <FormControl margin='normal' required fullWidth>
                        <InputLabel htmlFor='password'>
                            {password}
                        </InputLabel>
                        <Input id='password' name='password' autoFocus />
                    </FormControl>
                    <FormControlLabel control={<Checkbox color='primary'/>} label={remember}/>
                    <Button className={classes.submit} variant='contained' type="submit" color='primary' fullWidth>{signIn}</Button>
                </form>
            </Paper>
        </main>
        )
    }
}

export default withStyles(styles)(Form);