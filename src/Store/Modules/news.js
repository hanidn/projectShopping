// import Vue from 'vue';

// const state = {
//     Popular: {}
// }
// const getters = {
//     GetPopular(state) {
//         return state.Popular;
//     },
// };
// const mutations = {
//     SetPopular(state, Popular) {
//         state.Popular = Popular;
//     },
// };
// const actions = {
//     GetPopularFromServer(context) {
//         Vue.http.get("https://zinomin.ir/api/v1/news/1").then(response => {
//             return response.json();
//         }).then(data => {
//             console.log(data)
//             context.commit("SetPopular", data);
//         })
//     },
// };
// export default {
//     state,
//     getters,
//     mutations,
//     actions
// }
