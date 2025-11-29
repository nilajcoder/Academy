import { Routes } from '@angular/router';
import { Landingpage } from '../component/landingpage/landingpage';
import { Login } from '../component/login/login';
import { Register } from '../component/register/register';
import { Course } from '../component/course/course';
import { Component } from '@angular/core';
import { Contact } from '../component/contact/contact';
import { About } from '../component/about/about';
import { Portfolio } from '../component/portfolio/portfolio';

export const routes: Routes = [

    {

        path :'',
        component : Landingpage
    } ,

    {
        path : 'login',
        component : Login 
    } ,

    {
        path : 'register',
        component : Register
    } ,

    {
        path : 'course',
        component : Course
    },

    {
        path :'contact',
        component :Contact
    } ,

    {
        path :'about',
       component :About
    } ,

    {
        path : 'portfolio',
        component : Portfolio
    }
];


