import { combineReducers } from 'redux';
import { app } from './app.js';
import { login } from './login.js';
import { course } from './course.js';
import { courses } from './courses.js';
import { categories } from './categories.js';

export default combineReducers({
  app,
  login,
  course,
  courses,
  categories
});
