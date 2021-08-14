export default {
    pages: ['pages/index/index', 'pages/details/index', 'pages/collect/index'],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
    },
    tabBar: {
        color: '#dddddd',
        selectedColor: '#666',
        backgroundColor: '#fff',
        borderStyle: 'black',
        list: [
            {
                pagePath: 'pages/index/index',
                selectedIconPath: 'img/home1.png',
                iconPath: 'img/home.png',
                text: '首页',
            },
            {
                pagePath: 'pages/collect/index',
                selectedIconPath: 'img/user1.png',
                iconPath: 'img/user.png',
                text: '我的收藏',
            },
        ],
    },
};
