// import Vue from 'vue';

// const state = {

// }
// const getters = {

// };
// const mutations = {

// };
// const actions = {
//     SearchAcademy() {
//         let formData = new FormData()
//         formData.append('keyword',this.keyword)
   
//         Vue.http.post('http://193.39.9.237:8080/api/v1/search/academy/1',
//             formData, {
//             headers: {
//                 'Content-Type': 'multipart/form-data',
//                 'Accept': 'multipart/form-data'
//             }
//         })
//             .then(response => {
//                 console.log(response);
//             })
//             .catch(err => {
//                 console.log(err.response)
//             });
//     }
// }

// export default {
//     state,
//     getters,
//     mutations,
//     actions
// }