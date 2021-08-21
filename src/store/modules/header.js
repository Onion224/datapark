import {
    getLoc,
    getSearchDefaultWords,
    getSuggest
} from "../../api";

const state = {
    leftNav: [
        //顶部左侧导航栏
        {
            name: "主页",
            class: "home",
            icon: "datapark-icon",
            href: "/"
        },
        {
            name: "我的数据集",
            class: "mydatasets",
            href: "/mydatasets"
        },
        {
            name: "公开数据集",
            class: "opendatasets",
            href: "/opendatasets"
        },
        {
            name: "发现",
            class: "discover",
            href: "/discorver"
        }
    ],
    headBanner: [], //顶部背景、LOGO
    searchValue: "", //搜索框输入值
    searchWord: [], //默认搜索关键字
    suggest: [], //建议搜索


    menuLeft: [
        //左侧分类栏
        {
            //分类一
            name: "应用领域",
            class: "field",
            href: "",
            items: [
                // 细分领域
                {
                    name: "计算机视觉",
                    href: ""
                },
                {
                    name: "自然语言处理",
                    href: ""
                },
                {
                    name: "语音识别",
                    href: ""
                },
                {
                    name: "音频处理",
                    href: ""
                },
                {
                    name: "目标检测",
                    href: ""
                },
                {
                    name: "统计分析",
                    href: ""
                },
                {
                    name: "其他",
                    href: ""
                }
            ],
        },
        {
            // 分类二
            name: "应用行业",
            class: "industry",
            href: "",
            items: [
                //细分行业
                {
                    name: "互联网与通信",
                    href: ""
                },
                {
                    name: "金融",
                    href: ""
                },
                {
                    name: "医疗",
                    href: ""
                },
                {
                    name: "教育",
                    href: ""
                },
                {
                    name: "消费",
                    href: ""
                },
                {
                    name: "农业",
                    href: ""
                },
                {
                    name: "工业",
                    href: ""
                },
                {
                    name: "生活娱乐",
                    href: ""
                },
                {
                    name: "文化艺术",
                    href: ""
                },
                {
                    name: "自然科学",
                    href: ""
                },
                {
                    name: "交通",
                    href: ""
                },
                {
                    name: "其他",
                    href: ""
                }
            ],
        },
        {
            // 分类三
            name: "任务类型",
            class: "typeoftask",
            href: "",
            items: [
                // 细分类别
                {
                    name: "分类",
                    href: ""
                },
                {
                    name: "回归",
                    href: ""
                },
                {
                    name: "聚类",
                    href: ""
                },
                {
                    name: "其他",
                    href: ""
                }
            ]
        },
        {
            // 分类四
            name: "文件格式",
            class: "fileformat",
            href: "",
            items: [
                // 细分格式
                {
                    name: "npy",
                    href: ""
                },
                {
                    name: "csv",
                    href: ""
                },
                {
                    name: "wav",
                    href: ""
                },
                {
                    name: "jpg/png",
                    href: ""
                },
                {
                    name: "其他",
                    href: ""
                }
            ]
        }
    ]
};

const getters = {};

const mutations = {
    SET_HEAD_BANNER: (state, data) => {
        state.headBanner = Object.assign({}, data[0]);
    },
    SET_SEARCH_DEFAULT_WORDS: (state, data) => {
        state.searchWord = Object.assign({}, data);
    },
    SET_SEARCH_WORD: (state, data) => {
        state.searchValue = data;
    },
    SET_SUGGEST: (state, data) => {
        state.suggest = data;
    }
}

const actions = {
    setHeadBanner({ commit }, data) {
        getLoc(data).then(res => {
            commit("SET_HEAD_BANNER", res.data);
        });
    },
    setSearchDefaultWords({ commit }) {
        getSearchDefaultWords().then(res => {
            commit("SET_SEARCH_DEFAULT_WORDS", res.data);
        });
    },
    setSuggest({ commit, state }) {
        if (state.searchValue.length > 0) {
            getSuggest(state.searchValue).then(res => {
                commit("SET_SUGGEST", res.result);
            });
        }
    }
};

export default {
    namespaced: true, //注册header空间模块
    state,
    getters,
    actions,
    mutations
};