<template>
    <div>
        <div class="container">
        <div class="mid-reg">
            <div class="right-reg">
                <img src="/src/assets/image/register.png" alt="register">
            </div>
            <div class="left-reg">
                <form action="">
                    <label for="user">نام کاربری</label>

                    <input type="text" placeholder="نام کاربری دلخواه خود را وارد کنید" v-model="name" @input="$V.name.$touch()" 
                  > 
               
                    <br>
                    <label for="number">شماره موبایل</label>

                    <input type="text" placeholder="شماره موبایل خود را وارد کنید" v-model="num">
                    <br>
                    <label for="password">رمز عبور</label>

                    <input type="password" placeholder="رمز عبور خود را وارد کنید" v-model="password">
                    <br><br>
                    <button type="submit">ثبت نام
                    </button>
                    <br>
                    <button>
                          <router-link to="/login">ورود</router-link>                  
                       </button>
                </form>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
import {required,minLength} from 'vuelidate/lib/validators'
export default {
      validation:{
        name:{
            required,
            minLength:minLength(4)
        }
    },
    data() {
        return {
            name:'',
            num:'',
            password:'',
        }
    },
  
}
</script>
<style>
  .invalid{border: 1px solid red !important;
  box-shadow: 0px 0px 5px red;
  background-color: lightpink;}  
</style>