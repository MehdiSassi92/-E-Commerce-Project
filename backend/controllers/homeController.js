import asyncHandler from 'express-async-handler';
import homeModel from '../models/homeModel.js';


export const getMessageData = asyncHandler(async (req, res) => {
  const homePageData = await homeModel
    .findOne()
    .select(
      'messageTitle messageSubtitle messageColor messageLink messageButton messageImage -_id',
    );
  res.json(homePageData);
});


export const getFeaturedCategoryData = asyncHandler(async (req, res) => {
  const homePageData = await homeModel
    .findOne()
    .select(
      'featuredCategoryImage featuredCategoryTitle featuredCategoryColor featuredCategoryCategoryName -_id',
    );
  res.json(homePageData);
});
