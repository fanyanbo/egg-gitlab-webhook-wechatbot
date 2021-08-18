/*
 * @Author: Kuiper
 * @Date: 2021-08-12 15:00:39
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/contentplatform/push', controller.home.pushOnContentPlatform);
  router.post('/contentplatform/merge', controller.home.mergeOnContentPlatform);
};
