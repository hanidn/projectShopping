<template>
  <div>
    <div class="container">
      <div class="mid-contact">
       
        <div id="right-contact">
          <h1>تماس با ما</h1>
          <h5>
            بچه های پشتیبانی  هر روز هفته، <br />24 ساعته پاسخگوی شما
            هستند! <br>
             از طریق ایمیل میتونید باهاشون ارتباط بگیرید.<br />
          </h5>
          <h5>
         
          </h5>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="mid-contact">
        <div id="left-contact-img">
        
        </div>
        <div id="right-contact-txt">
          <h1>ارسال پیام</h1>
          <br />
          <form>
            <input
            type="text"
              placeholder="نام کامل خود را وارد کنید"
              v-model="name"
              @input="$v.name.$touch()"
              :class="{ invalid: $v.name.$error }"
            />
            <p class="text-danger" v-if="!$v.name.required && $v.name.$dirty">نام خود را وارد کنید</p>

            <br />
            <input
             type="text"
              placeholder="ایمیل خود را وارد کنید"
              v-model="email"
              @input="$v.email.$touch()"
              :class="{ invalid: $v.email.$error}"
            />
            <p class="text-danger" v-if="!$v.email.email">
              ایمیل وارد شده معتبر نیست
            </p>
            <p class="text-danger" v-if="!$v.email.required && $v.email.$dirty">ایمیل خود را وارد کنید</p>
            <br />
            <textarea
             cols="30"
            rows="5"
              placeholder="نظرات شما"
              v-model="text"
              @input="$v.text.$touch()"
              :class="{ invalid: $v.text.$error }"
              type="text"

            ></textarea>
            <br />
            <p class="text-danger" v-if="!$v.text.required && $v.text.$dirty">
              پیام خود را وارد کنید
            </p>

            <button :disabled="$v.$invalid" @click.prevent="SubmitMessage()" type="submit">ارسال</button>
          </form>

          <br /><br /><br /><br />
        </div>
      </div>
    </div>

  </div>

</template>
<script>
import { required, email} from "vuelidate/lib/validators";
export default {

  data() {
    return {
      name: '',
      email: '',
      text: '',
    };
  },
  methods: {
    SubmitMessage() {
      const submit = {
        name: this.name,
        email: this.email,
        text: this.text,
      };
      this.$store.dispatch("SubmitMessage", submit);
    },
  },
  validations: {
    name: {
      required,
    },
    email: { email, required },
    text: { required },
  },
};
</script>


<style>
.invalid {
  border: 2px solid red !important ;
  box-shadow: 0px 0px 5px;
  background-color: rgb(252, 203, 210) !important;
}
</style>
