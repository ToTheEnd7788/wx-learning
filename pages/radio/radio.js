// pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioList: '-'.repeat(5).split('').map((item,index) => {
      return {
        code: `code~${index}`,
        name: `radio~${index}`,
        checked: index === 1 ? true : false
      };
    })
  },

  // radio 选择情况发生变化
  radioSelectChanged(e) {
    console.log(3333, e.detail.value);
  },

  // slider 完成一次拖动后触发
  sliderChanged(e) {
    console.log(e.detail.value);
  },

  // slider 改变过程中的事件
  sliderChanging(e) {
    console.log(e.detail.value);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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