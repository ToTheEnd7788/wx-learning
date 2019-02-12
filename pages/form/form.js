// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "我的电影",

    /* **************************************** checkbox ***************************************** */
    checkboxList: [
      { code: 1, name: 'checkbox - 1', isSelect: false },
      { code: 2, name: 'checkbox - 2', isSelect: true },
      { code: 3, name: 'checkbox - 3', isSelect: false },
      { code: 4, name: 'checkbox - 4', isSelect: true },
      { code: 5, name: 'checkbox - 5', isSelect: false }
    ],

    checkList: [],

    resContent: ''
    /* **************************************** checkbox ***************************************** */
  },

  /* **************************************** checkbox ***************************************** */

  // 模拟请求数据
  requestData() {
    console.log('开始请求数据');

    var _this = this;

    wx.request({
      url: 'https://127.0.0.1:8080/api/test',
      success: function(res) {
        _this.setData({
          resContent: res.data.Data
        });
      }
    });
  },

  checkedChanged(e) {
    console.log('this...', this);
    console.log('多选checkbox选中情况发生了变化...', e);

    this.setData({
      checkList: e.detail.value
    });
  },
  /* **************************************** checkbox ***************************************** */

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      checkList: this.data.checkboxList.reduce((acc, item) => {
        if (item.isSelect === false) {
          acc.push(item.code);
        }

        return acc;
      }, [])
    });
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