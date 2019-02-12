Page({
  data: {
    title: 'picker',

    range: [
      {
        id: 0,
        name: 'USA',
      },
      {
        id: 1,
        name: 'CHN',
      },
      {
        id: 2,
        name: 'AUS'
      },
      {
        id: 3,
        name: 'KOR'
      }
    ],

    index: 1,

    multiRange01: [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12]
    ],

    multiRange02: [
      [
        {
          id: 0,
          name: '内蒙古自治区内蒙古自治区内蒙古自治区'
        },
        {
          id: 1,
          name: '河北省'
        },
        {
          id: 2,
          name: '青海'
        },
        {
          id: 3,
          name: '上海'
        }
      ],
      [
        {
          id: 0,
          name: '区/省/直辖市'
        },
        {
          id: 1,
          name: '市'
        },
        {
          id: 2,
          name: '县'
        },
        {
          id:3,
          name: '乡/苏木'
        },
        {
          id: 4,
          name: '村/嘎查'
        }
      ],
      [
        {
          id: 0,
          name: '20~40'
        },
        {
          id: 1,
          name: '50-70'
        },
        {
          id: 2,
          name: '80-100'
        }
      ]
    ],

    multiValue: [1,2,2],

    time: '16:44',

    date: '2018-02-02',

    region: ['北京市', '北京市', '昌平区'],

    // picker-view 设置的密码
    password: [9,9,9]
  },

  // picker-view 选择发生了变化
  pickerViewChanged(e) {
    this.setData({
      password: e.detail.value
    });
  },

  // 选择的 省市区发生了变化
  regionChange(e) {
    this.setData({
      region: e.detail.value
    });
  },

  // 日期选择发生了变化
  changeDate(e) {
    this.setData({
      date: e.detail.value
    });
  },

  // 时间选择选择但是取消了之后进行的操作
  timePickeCancel(e) {
    console.log(e, '选择取消了');
  },

  // 时间选择发生了变化进行的操作
  timeChanged(e) {
    // console.log(e);
    this.setData({
      time: e.detail.value
    });
  },

  //  picker-selector 选择发生改变时进行的操作
  selectChange(e) {
    this.setData({
      index: e.detail.value
    });
  },

  // picker-multiSelector 选择发生变化, 点击确定的时候
  confirmMultipicker(e) {
    this.setData({
      multiValue: e.detail.value
    });
  },

  // picker-multiSelector 列发生变化的时候触发的操作
  multipleColumnChanged(e) {
    console.log(22222, e); // ????????????
    this.setData({
      index: e.detail.column
    });
  }
});