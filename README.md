# WorkoutLogger

## Introduction
An app to log your workouts and search for instructions on how to do the exercises you've chosen for the day. This is the final project for Haaga-Helia's mobile programming course. The app is, at least for now exclusively for logging gym workouts and still in development, so everything might not work as intended at the moment.

## Built with
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [ExerciseDB API](https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
- [Firebase Auth](https://firebase.google.com/docs/auth)
- [Firebase Realtime Database](https://firebase.google.com/docs/database)

## Overview
Opening the app you are greeted with a "Login"-page, from where you can login to an existing account, or sign up as a new user. The authentication is built with [Firebase Auth](https://firebase.google.com/docs/auth).

On the app's homepage you can log workouts you've completed. The "Add workout"-button opens a card, in which are input fields for the exercise's name, sets, reps and weight. The card also contains an "Add exercise"-button, that adds an exercise to the workout you're logging. When you're ready, you can press the "Save"-button, which is also in the card, which then saves the workout to Firebase. The saved workouts are displayed on the apps homepage.

In the "Search"-tab of the app you can search for certain exercises using keywords like biceps, triceps or back for example. Exercises containing the keyword will then be displayed on the screen, along with the equipment needed for doing the exercise and the muscle that the exercise targets.

### This Readme will keep updating as the development progresses
