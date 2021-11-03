export default {
    lang: 'zh-CN',
    title: 'markdown',
    description: 'a markdown of notes ',

    themeConfig: {
        sidebar: {
            '/css-secrets/': getGuideSidebar(),
            '/': getGuideSidebar(),
        }
    }
}

function getGuideSidebar() {
    return [
        {
            text: 'Home',
            children: [
                { text: '首页', link: '/' },

            ]
        },
        {
            text: 'css Secrets',
            children: [
                { text: '第一章', link: '/css-secrets/1' },
                { text: '第二章', link: '/css-secrets/2' },
                { text: '第三章', link: '/css-secrets/3' },
                { text: '第四章', link: '/css-secrets/4' },
                { text: '第一章', link: '/css-secrets/5' },
                { text: '第一章', link: '/css-secrets/6' },
                { text: '第一章', link: '/css-secrets/7' }
            ]
        }
    ]
}
