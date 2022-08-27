import db from '../../models/index.js';

export default defineEventHandler((event) => {
  return db.Posts.findAll();
})