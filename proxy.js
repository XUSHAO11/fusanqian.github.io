const host = 'http://111.lvge8.cn/'

module.exports = {
    '/common/showCaptcha': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/password': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/userInfo': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/save_faninfo': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/get_faninfo': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/get_userlist': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/get_orderlist': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/login': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/common': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/system': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/users': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/platform': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/gallery': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/line': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/goods': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/poster': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/resource': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/active': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/order': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/shop': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/finance': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/weixinauth': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/sms': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/index': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/tuanqi': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    // '/weixinauth': {
    //     target: host,
    //     changeOrigin: true,
    //     cookieDomainRewrite: {
    //         '*': ''
    //     }
    // },
    '/coupon': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/iframe': {
        target: host,
        changeOrigin: true,
        cookieDomainRewrite: {
            '*': ''
        }
    },
    '/loadhtml': {
        target: 'http://47.104.237.200/',
        changeOrigin: true,
        pathRewrite: {
            '^/loadhtml': '/'
        }
    },
}
