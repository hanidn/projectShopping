// import Vue from 'vue';


// const state = {
//     All: [],
//     Restors: {},
//     Tree: []
// }
// const getters = {
//     GetAll(state) {
//         return state.All;
//     },
//     GetRestors(state) {
//         return state.Restors;
//     },
//     GetTree(state) {
//         return state.Tree;
//     }
// };
// const mutations = {
//     SetAll(state, All) {
//         state.All = All;
//     },
//     SetRestors(state, Restors) {
//         state.Restors = Restors;
//     },
//     SetTree(state, Tree) {
//         state.Tree = Tree;
//     },

// };
// const actions = {
//     GetAllFromServer(context) {
//         Vue.http.get("https://zinomin.ir/api/v1/articles/all/1").then(response => {
//             return response.json();
//         }).then(data => {
//             context.commit("SetAll", data);
//         })

//     },
//     GetRestorsFromServer(context) {
//         Vue.http.get("https://zinomin.ir/api/v1/articles/recycle/1").then(response => {
//             return response.json();
//         }).then(data => {
//             context.commit("SetRestors", data);
//         })
//     },
//     GetTreeFromServer(context) {
//         Vue.http.get("https://zinomin.ir/api/v1/articles/tree/1").then(response => {
//             return response.json();
//         }).then(data => {
//             context.commit("SetTree", data);
//         })
//     },

// };
// export default {
//     state,
//     getters,
//     mutations,
//     actions
// }
