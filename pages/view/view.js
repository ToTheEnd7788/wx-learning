// pages/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "我的音乐",
    name: "我去",


    /* ************************************************ swiper ******************************************* */
    swiperList: ['red', 'yellow', 'blue', 'green', 'orange'],
    /* ************************************************ swiper ******************************************* */

    /* ************************************************ icon ******************************************* */
    iconList: [
      {
        type: 'success',
        size: 18,
        color: 'green'
      },
      {
        type: 'success_no_circle',
        size: 17,
        color: 'green'
      },
      {
        type: 'info',
        size: 16,
        color: 'red'
      },
      {
        type: 'warn',
        size: 15,
        color: 'orange'
      },
      {
        type: 'waiting',
        size: 14,
        color: '#333'
      },
      {
        type: 'cancel',
        size: 13,
        color: 'gray'
      },
      {
        type: 'download',
        size: 12,
        color: 'green'
      },
      {
        type: 'search',
        size: 11,
        color: 'pink'
      },
      {
        type: 'clear',
        size: 10,
        color: 'blue'
      }
    ],
    /* ************************************************ icon ******************************************* */

    /* ************************************************ rich-text ******************************************* */
    nodes: [
      {
        name: 'div',
        attrs: {
          class: "div_class",
          style: 'line-height: 60px; color: red;',          
        },
        children: [
          {
            type: 'text',
            text: 'Hello&nbsp;World!',
            selectable: true
          }
        ]
      }
    ],
    /* ************************************************ rich-text ******************************************* */
  },

  /**
   * 触发事件, 并且获取设置的data-*数据
   */
  clickTestBtn: function(evt) {
    console.log(2222, evt.currentTarget.dataset.name);
  },
  /* ************************************************ scroll-view ******************************************* */
  // scroll-view 滚动到顶部(左边)触发的事件
  upper(e) {
    console.log('滚动到顶部了...', e);
  },

  // scroll-view 滚动到底部(右边)触发的事件
  lower(e) {
    console.log('我滚动到底部了...', e);
  },

  // scroll-view 滚动过程中触发
  scrolling(e) {
    console.log('我正在滚动...', e);
  },

  /* ************************************************ scroll-view ******************************************* */

  /* ************************************************ swiper ************************************************ */
  // 轮播图发生滚动
  swiperChanged(e) {
    //console.log('轮播图发生变化了...', e);
  },

  // 轮播图一次动画轮播执行完毕
  swiperAniamtionFinished(e) {
    //console.log('以动画的形式切换完一张轮播图...', e);
  },
  /* ************************************************ swiper ************************************************ */

  /* ************************************************ rich-text ************************************************ */
  // rich-text 轻轻触摸事件
  richTextTap(e) {  
    console.log('rich-text被触发...', e);
  },
  /* ************************************************ rich-text ************************************************ */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面加载了');
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})