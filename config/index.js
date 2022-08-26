export const config = {
  // 公众号配置
  // 公众号appId
  appId: "wxd7938104e9a9fd66",
  // 公众号appSecret
  appSecret: "852a9b2e00a0f48280ef871e31e8d23e",
  // 模板消息id
  templateId: "VE9iah7Y9BZAXirqCSpWyzeYx06RyfxkW8m13e8QlEk",
  // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
  user: ['oF6FN5u_hD-c5GT6mP3O1SAyyb6I'],

  // 信息配置
  // 所在省份
  province: "广东",
  // 所在城市
  city: "深圳",
  // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
  birthdays: [
    { "name": "梁小猪", "year": "1998", "date": "12-26", "type": 'new' },
  ],
  // 在一起的日子，格式同上
  loveDate: "2022-05-15",
  // 结婚纪念日
  // marryDate: "2020-01-04"
}

// {{date.DATA}}
// 城市：{{city.DATA}}
// 天气：{{weather.DATA}}
// 最低气温: {{min_temperature.DATA}}
// 最高气温: {{max_temperature.DATA}}
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}
// {{note_ch.DATA}}
