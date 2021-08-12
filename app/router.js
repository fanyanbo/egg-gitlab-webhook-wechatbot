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
  router.post('/mr', controller.home.index);
};
