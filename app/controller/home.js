/*
 * @Author: Kuiper
 * @Date: 2021-08-12 15:00:39
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.service.wechatbot.triggerMergeRequestMsg();
    ctx.body = 'hi, kuiper';
  }
}

module.exports = HomeController;
