var app = new Vue({
    el: '#app',
    data () {
        return {
            dialogVisible: "",
            commentDialogVisible: false,
            downloadDialogVisible: false,
            fullscreenLoading: false,
            commentsNum: "0",
            comments: [],
            commentText: "",
            updateTimeAll: "2021.12.12",
            navs: [],
            search: '',
            searchData: [],
            isCollapse: false
        }
    },
    watch: {
        // 监听input输入框，若没东西了，就回复默认状态
        search:function(newnew,oldold){
          if(newnew == ""){
            // 发请求回到初始列表数据状态
            console.log("搜索框没东西了，回复初始状态");
            app.$data.searchData = app.$data.navs;
          }
        }
    },
    methods: {
        getIconsData: function() {
            axios
            .get('../assets/json/nav.json')
            .then(response => (this.navs = response.data.navList))
            .catch(function (error) { // 请求失败处理
                console.log(error);
            });
        },
        Search: function() {
            // search 是 v-model="search" 的 search
            var search = this.search;
            if (search) {
                this.searchData = this.navs.filter(function(nav) {
                    // 每一项数据
                    // console.log(product)
                    return Object.keys(nav).some(function(key) {
                    // 每一项数据的参数名
                    // console.log(key)
                    return (
                        String(nav[key])
                        // toLowerCase() 方法用于把字符串转换为小写。
                        .toLowerCase()
                        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                        .indexOf(search) > -1
                    );
                    });
                });
            }
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    beforeCreate: function () {
        // console.log('beforeCreate 创建前状态===============》');
    },
    created: function () {
        // console.log('created 创建完毕状态===============》');
    },
    beforeMount: function () {
        // console.log('beforeMount 挂载前状态===============》');
    },
    mounted: function () {
        this.getIconsData();
        // console.log('mounted 挂载结束状态===============》');
    },
    beforeUpdate: function () {
        // console.log('beforeUpdate 更新前状态===============》'); 
    },
    updated: function () {
        // console.log('updated 更新完成状态===============》');
    },
    beforeDestroy: function () {
        // console.log('beforeDestroy 销毁前状态===============》');
    },
    destroyed: function () {
        // console.log('destroyed 销毁完成状态===============》');
    }
})

//更新年份
document.getElementById('footerYear').innerHTML = new Date().getFullYear() + '';
