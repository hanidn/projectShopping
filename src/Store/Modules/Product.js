// import Vue from 'vue';
// const state = {
//     Suggestion: [],
//     // ImageAddress: "http://88.218.17.91:8000/image"
//     tree: [],
//     Recycle: [],
// };
// const getters = {
//     GetSuggestion(state) {
//         return state.Suggestion;
//     },
//     // GetImageAddress(state) {
//     //     return state.ImageAddress;
//     // }
//     Gettree(state) {
//         return state.tree;
//     },
//     GetRecycle(state) {
//         return state.Recycle;
//     },
// };
// const mutations = {
//     SetSuggestion(state, Suggestion) {
//         state.Suggestion = Suggestion;
//     },
//     Settree(state, tree) {
//         state.tree = tree;
//     },
//     SetRecycle(state, Recycle) {
//         state.Recycle = Recycle;
//     }
// };
// const actions = {
//     GetSuggestionFromServer(context,Filter) {
//         Vue.http.get("https://zinomin.ir/api/v1/shop/products/all/1").then(response => {
//             return response.json();
//         }).then(data => {
//             context.commit("SetSuggestion", data);
//         })
//     },
//     GetRecycleFromServer(context) {
//         Vue.http.get("https://zinomin.ir/api/v1/shop/products/recycle/1").then(response => {
//             return response.json();
//         }).then(data => {
//             context.commit("SetRecycle", data);
//         })
//     },
//     GettreeFromServer(context) {
//         Vue.http.get("https://zinomin.ir/api/v1/shop/products/tree/1").then(response => {
//             return response.json();
//         }).then(data => {
//             context.commit("Settree", data);
//         })
//     }
// };
// export default {
//     state,
//     getters,
//     mutations,
//     actions
// }
