import { defineQuery } from "next-sanity";

export const MENU_QUERY =
  defineQuery(`*[_type == "menu" && defined(_id)] | order(_createdAt asc){
    _id,
    "name": dish->name,
    description,
    "category": category->name,
    "imageUrl": dish->image.asset->url, 
    "altText": dish->alt.current,
    "blurDataURL": dish->image.asset->metadata.lqip, 
  }`);

export const MENU_QUERY_BY_ID =
  defineQuery(`*[_type == "menu" && _id == $id][0]{
    _id,
    "name": dish->name,
    description,
    "category": category->name,
    "imageUrl": dish->image.asset->url, 
    "altText": dish->alt.current,
    "blurDataURL": dish->image.asset->metadata.lqip, 
  }`);

export const MENU_IMAGES_QUERY =
  defineQuery(`*[_type == "menuImages" && defined(_id)] {
    _id,
    "imageUrl": image.asset->url, 
    "blurDataURL": image.asset->metadata.lqip,
    "altText": alt.current
  }`);

export const REVIEW_QUERY =
  defineQuery(`*[_type == "review" && defined(_id)] | order(_createdAt asc){
    _id, 
    author, 
    text,
  }`);

export const SHORTENED_REVIEW_QUERY =
  defineQuery(`*[_type == "review" && defined(_id)] | order(_createdAt asc){
    _id, 
    author, 
    shortText,
  }`);
