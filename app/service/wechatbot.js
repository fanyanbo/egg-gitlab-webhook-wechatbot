/*
 * @Author: Kuiper
 * @Date: 2021-08-12 14:12:55
 */
'use strict';

const request = require('request');

const Service = require('egg').Service;

class WeChatBotService extends Service {
  triggerMergeRequestMsg() {
    console.log('triggerMergeRequestMsg in');
    const message = {
      msgtype: 'text',
      text: {
        content: '叮咚！有人发起MR啦',
        mentioned_mobile_list: [ '18825296369', '13728728225' ],
      },
    };
    request({
      url: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=8e47ae35-cc55-4206-b83d-f6a0d76949c2',
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(message),
    });
  }
}

module.exports = WeChatBotService;
