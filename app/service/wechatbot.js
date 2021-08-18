/*
 * @Author: Kuiper
 * @Date: 2021-08-12 14:12:55
 */
'use strict';

const request = require('request');

const Service = require('egg').Service;

class WeChatBotService extends Service {
  triggerMsgByContentPlatformPushEvent() {
    console.log('triggerMsgByContentPlatformPushEvent in');
    const message = {
      msgtype: 'text',
      text: {
        content: '叮咚！订阅号项目有人push代码啦！',
        // mentioned_mobile_list: [ '18825296369', '@all' ],
        mentioned_mobile_list: [ '@all' ],
      },
    };
    request({
      url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7d0b684f-8f86-4af0-a859-f6e0bbc2865f',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }

  sendMsgByContentPlatformMergeRequest() {
    console.log('sendMsgByContentPlatformMergeRequest in');
    const message = {
      msgtype: 'text',
      text: {
        content: '叮咚！订阅号项目有人发起MergeRequest啦！',
        // mentioned_mobile_list: [ '18825296369', '@all' ],
        mentioned_mobile_list: [ '@all' ],
      },
    };
    request({
      url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7d0b684f-8f86-4af0-a859-f6e0bbc2865f',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }

  sendMsgByPCShareMergeRequest() {
    console.log('sendMsgByContentPlatformMergeRequest in');
    const message = {
      msgtype: 'text',
      text: {
        content: '叮咚！PC投屏项目有人发起MergeRequest啦！',
        // mentioned_mobile_list: [ '18825296369', '@all' ],
        mentioned_mobile_list: [ '@all' ],
      },
    };
    request({
      url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=7d0b684f-8f86-4af0-a859-f6e0bbc2865f',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }
}

module.exports = WeChatBotService;
