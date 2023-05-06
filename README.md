# WorkoutLogger

## Introduction
An app to log your activities and search for instructions on how to do different excercises. This is the final project for Haaga-Helia's mobile programming course. The app is still in development so everything might not work as intended.

## Built with
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)

## Overview
Opening the app you are greeted with a "Login"-page, from where you can login to an existing account, or sign up as a new user. The authentication is built with [Firebase Auth](https://firebase.google.com/docs/auth).

On the app's homepage you can log activities you've completed. The "Add Activity"-button opens a card, in which are input fields for the activity's name, duration and date. When you're ready, you can press the "Save"-button, which is also in the card, which then saves the activity to Firebase. The saved activities are displayed on the apps homepage.

In the "Search"-tab of the app you can search for certain exercises using keywords like biceps, triceps or back for example. Exercises containing the keyword will then be displayed on the screen as cards and you can then click the cards to open a more detailed view of the selected exercise.

### This Readme will keep updating as the development progresses
