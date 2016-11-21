Page({
  data:{
    orderList: [],
    total: 0, //总价格
    toastHidden: true,
    toastTxt: "",
    tables: ["1号", "2号", "3号", "4号", "5号", "6号", "7号", "8号", "9号"], //桌号
    tableIndex: 0
  },

  // 页面初始化 options为页面跳转所带来的参数
  onLoad:function(options){
    
    //object 转 array
    var order = JSON.parse(options.order);
    var t_order = [];
    var t_total = 0;
    for(var k in order){
      if(order[k].num > 0){
          t_order.push(order[k]);
          t_total = t_total + order[k].cost*order[k].num; //计算总价格
      }
    }
  
    this.setData({
      orderList: t_order,
      total: t_total
    });
    
  },

  //修改标题
  onReady:function(){
    wx.setNavigationBarTitle({
      title: '确认菜品'
    })
  },

  //返回修改
  returnClick:function(){
    wx.navigateBack();
  },

  //确认提交
  okClick:function(){

    //1s后关闭
    var _this = this;
    setTimeout(function(){
      _this.setData({
        toastHidden: true
      });
    }, 1000);

    if(this.data.orderList.length == 0){
        this.setData({
          toastHidden: false,
          toastTxt: "没有选择商品"
        });
    }else{
        this.setData({
          toastHidden: false,
          toastTxt: "提交成功"
        });
    }
  },

  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      tableIndex: e.detail.value
    })
  },
})