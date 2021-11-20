<template>
    
    <div class="container">
        <div class="mid-reg">
            <div class="left-reg">
                <form action="">
                    <label for="user">نام کاربری</label>

                    <input type="text" placeholder="نام کاربری خود را وارد کنید">
                    <br>

                    <label for="password">رمز عبور</label>

                    <input type="password" placeholder="رمز عبور خود را وارد کنید">
                    <br>
                    <a href="#">رمز عبور را فراموش کرده ام</a>
                    <br><br>
                    <button><router-link to="/register">ثبت نام</router-link>
                    </button>
                    <br>
                    <button type="submit">
                           ورود                     
                       </button>
                </form>
            </div>
            <div class="right-reg">
                <img src="/src/assets/image/login.png" alt="login">
            </div>
        </div>
    </div>

    
</template>
<script>
export default {
    data() {
        return {
            name:''
        }
    },
}
</script>