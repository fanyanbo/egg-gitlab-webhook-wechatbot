/*
 * @Author: Kuiper
 * @Date: 2021-08-12 15:00:39
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.service.wechatbot.triggerMsgByContentPlatformPushEvent();
    ctx.body = 'hi, kuiper';
  }

  async pushOnContentPlatform() {
    const { ctx } = this;
    ctx.service.wechatbot.triggerMsgByContentPlatformPushEvent();
    ctx.body = 'hi, pushOnContentPlatform';
  }

  async mergeOnContentPlatform() {
    const { ctx } = this;
    ctx.service.wechatbot.sendMsgByContentPlatformMergeRequest();
    ctx.body = 'hi, mergeOnContentPlatform';
  }

  async mergeOnPCShare() {
    const { ctx } = this;
    ctx.service.wechatbot.sendMsgByPCShareMergeRequest();
    ctx.body = 'hi, sendMsgByPCShareMergeRequest';
  }

}

module.exports = HomeController;
