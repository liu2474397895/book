// pages/classification/classification.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        all:false,
        two:false,
        Workplace:true,
        classification: [
            { id: 0, szie: "科幻" },
            { id: 1, szie: "职场" },
            { id: 2, szie: "言情" },
            { id: 3, szie: "艺术" },
            { id: 4, szie: "科学" },
            { id: 5, szie: "军事" },
            { id: 6, szie: "架空" },

        ],
        list: [{
            id: 1,
            src: '/image/books_img1.png',
            font: '三体:死神永生',
            fonts: '刘慈欣'
        }, {
            id: 2,
            src: '/image/search1.png',
            font: '人类简史',
            fonts: '尤瓦尔·郝拉利'
        }, {
            id: 3,
            src: '/image/newproducts_2.jpg',
            font: '许三观卖血记',
            fonts: '余华'
        }],
        list2: [{
            id: 1,
            src: '/image/books_img1.png',
            font: '三体:死神永生',
            fonts: '刘慈欣'
        }, {
            id: 2,
            src: '/image/search1.png',
            font: '人类简史',
            fonts: '尤瓦尔·郝拉利'
        }, {
            id: 3,
            src: '/image/newproducts_2.jpg',
            font: '许三观卖血记',
            fonts: '余华'
        }],
        list3: [{
            id: 1,
            src: '/image/books_img1.png',
            font: '三体:死神永生',
            fonts: '刘慈欣'
        }, {
            id: 2,
            src: '/image/search1.png',
            font: '人类简史',
            fonts: '尤瓦尔·郝拉利'
        }, {
            id: 3,
            src: '/image/newproducts_2.jpg',
            font: '许三观卖血记',
            fonts: '余华'
        }],
        one:true,
        arr: [],
        list4: [{
            id: 1,
            src: '/image/books_img1.png',
            font: '三体:死神永生',
            url: "",
            fonts: '刘慈欣'
        }, {
            id: 2,
            src: '/image/search1.png',
            font: '人类简史',
            url: "",
            fonts: '尤瓦尔·郝拉利'
        }, {
            id: 3,
            src: '/image/newproducts_2.jpg',
            font: '许三观卖血记',
            url: "",
            fonts: '余华'
        }],
        jilu: [{
                id: 0,
                font: "艺术设计"
            },
            {
                id: 1,
                font: "自由人像雕塑"
            },
            {
                id: 2,
                font: "人文环境"
            },
        ]
    },
    select:function(e){
        var id = e.target.dataset.id;
        console.log(id);
        this.setData({
          isSelect: id
        })
        if (id===1) {
            this.setData({
                all:true,
                Workplace:false,
              })
        }
        if (id===0) {
            this.setData({
                all:false,
                Workplace:true,
              })
        }
    },
    
    
    getRecth: function(e) {
        var then = this
        var values = e.detail.value
        var arr = then.data.arr
        if (values!= ""){
            arr.push(values)
            this.setData({
                arr
            })
        }
      
    },
    delete:function () {
        var then = this
        var aaa= []
        var arr = then.data.arr
        this.setData({
            arr:aaa
        })
    },
    inp_focus:function () {
        console.log(111);
        
        this.setData({
            one:false,
            two:true
        })
    },
    inp_focusx:function () {
        console.log(111);
        
        this.setData({
            one:true,
            two:false
        })
    },
})