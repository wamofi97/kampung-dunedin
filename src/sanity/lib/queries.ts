import { defineQuery } from "next-sanity";

export const MENU_QUERY =
  defineQuery(`*[_type == "menu" && defined(_id)] | order(_createdAt asc) {
    _id, 
    name, 
    image, 
    alternateText, 
    price, 
    description, 
  }`);

export const REVIEW_QUERY =
  defineQuery(`*[_type == "review" && defined(_id)] | order(_createdAt asc){
    _id, 
    author, 
    text,
  }`);
