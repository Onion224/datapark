import http from "../utils/http";

//头部背景图
export function getLoc(data) {
    return http.get("/loc", {
        params: {
            pf: data.pf,
            id: data.id
        }
    });
}

//搜索框默认关键词
export function getSearchDefaultWords() {
    return http.get("/search_value");
}

//搜索框搜索建议
export function getSuggest(term) {
    return http.get("/suggest", {
        params: {
            term
        }
    });
}