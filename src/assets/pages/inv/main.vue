<!--<template>
  <div id="app">
  <div class="container">

 <div id="header" class="cpl-md-12">
            <div id="left">
                <h1>فرصت های شغلی</h1>
                <p>اگر خود را بلند پرواز و سخت کوش میدانید، برای <br>چالش های بزرگ، مدیریت بحران و حل مسئله در
                    <br> لحظه آماده اید ومیتوانید از هر فرصتی برای رشد<br> و ترقی استفاده کنید، جای شما در زینومین است.</p>
            </div>
            <br>
            <div id="right"><img src="/src/assets/image/main-inv.png" alt="invitation"></div>
        </div>
        <br><br>
        <div id="form">
            <h3>اطلاعات شخصی</h3>
            <p>در مورد خودت چیزی به ما بگو</p>
            <form action="" class="col-md-12">
                <label for="">نام</label>
                <br><br>
                <input type="text" placeholder="  نام" v-model="name"  @input="$v.name.$touch()"
              :class="{ invalid: $v.name.$error }"  required>
              <p class="text-danger" v-if="!$v.name.required && $v.name.$dirty">نام خود را وارد کنید</p>
                <br><br>
                <label for=""> نام خانوادگی</label>
                <br><br>
                <input type="text" placeholder="  نام خانوادگی" v-model="family" @input="$v.family.$touch()"
              :class="{ invalid: $v.family.$error }"  required>
              <p class="text-danger" v-if="!$v.family.required && $v.family.$dirty">نام خانوادگی خود را وارد کنید</p>
                <br><br>
                <label for="">پست الکترونیک</label>
                <br><br>
                <input type="text" placeholder="  name@example.com" v-model="email" @input="$v.email.$touch()"
              :class="{ invalid: $v.email.$error }"  required>
              <p class="text-danger" v-if="!$v.email.required && $v.email.$dirty">ایمیل خود را به درستی وارد کنید</p>
                <br><br>
                <label for="">کد ملی</label>
                <br><br>
                <input type="text" placeholder="  0123456789" v-model="NID">
                <br><br>
                <label for="">تاریخ تولد</label>
                <br><br>
             <date-picker v-model="birthday" id="date"></date-picker>
                <br><br>
                <label for="">تلفن</label>
                <br><br>
                <input type="tel" placeholder="  تلفن همراه" v-model="phone" @input="$v.phone.$touch()"
              :class="{ invalid: $v.phone.$error }"  required>
              <br><br>
               <p>تلفن همراه باید 11 رقمی باشد</p>
               <p class="text-danger" v-if="!$v.phone.required && $v.phone.$dirty  && $v.phone.numeric">تلفن خود را وارد کنید</p>
                <br>
                <label for=" ">آدرس</label>
                <br><br>
                <input type="text" placeholder="  آدرس" v-model="address">
                <br><br>
                <label for=" ">جنسیت</label>
                <br><br>
                <div class="gender">
                    <input type="radio" name="gender" v-model="gender" value="0"> مذکر
                    <br>
                    <input type="radio" name="gender" v-model="gender" value="1"> مونث
                    <br>
                    <input type="radio" name="gender" v-model="gender" value="2"> مایل به گفتن نیستم
                </div>
                <br><br>
                <label for=" ">تحصیلات</label>
                <br><br>
                <input type="text" placeholder="  تحصیلات" v-model="education" @input="$v.education.$touch()"
              :class="{ invalid: $v.education.$error }">
               <p class="text-danger" v-if="!$v.education.required && $v.education.$dirty">تحصیلات خود را وارد کنید</p>
                <br><br>
                <label for=" ">سابقه کاری</label>
                <br><br>
                <input type="text" placeholder="  سابقه کاری" v-model="workxp" @input="$v.workxp.$touch()"
              :class="{ invalid: $v.workxp.$error }"  required>
               <p class="text-danger" v-if="!$v.workxp.required && $v.workxp.$dirty">سابقه کاری خود را وارد کنید</p>
                <br><br>
                <label for=" ">دوره های آموزشی</label>
                <br><br>
                <input type="text" placeholder="  دوره های آموزشی" v-model="trainingcourse" @input="$v.trainingcourse.$touch()"
              :class="{ invalid: $v.trainingcourse.$error }"  required>
               <p class="text-danger" v-if="!$v.trainingcourse.required && $v.trainingcourse.$dirty">دوره اموزشی خود را وارد کنید</p>
                <br><br>
                <label>رزومه</label>
                <br><br>
                <div class="box">
                     <label for="resume"><span>افزودن رزومه</span></label>
                    <input type="file" id="resume" ref="resume" v-on:change="handleFileUpload()" >
                    <p>تنها jpg,png,docx,doc,pdf مجاز است</p>
                    <br>
                    <h5>*افزودن رزومه الزامی است.</h5>
                      <h5>{{this.resume}}</h5>
                </div>
                <br><br><br>
                <label for="">توضیح رزومه</label>
                <br><br>
                <textarea name=" " id=" " cols="50 " rows="5 " placeholder="   انگیزه نامه خود را اینجا وارد کنید" v-model="resumetext" @input="$v.resumetext.$touch()"
              :class="{ invalid: $v.resumetext.$error }" required></textarea>
               <p class="text-danger" v-if="!$v.resumetext.required && $v.resumetext.$dirty">متن خود را وارد کنید</p>
                <br><br>
                <button @click.prevent="onSubmit()" :disabled="$v.$invalid">ارسال رزومه</button>
            </form>
            <br><br><br>
        </div>
    </div>
  </div>
</template>


<script>
import Vue from 'vue'
import { required, email,numeric} from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: '',
      family:'',
      email: '',
      resumetext: '',
      NID:'',
      birthday:'',
      phone:'',
      address:'',
      gender:'',
      education:'',
      workxp:'',
    trainingcourse:'',
     resume: null,
    };
  },

  methods: {
 handleFileUpload() {
      this.resume = this.$refs.resume.files[0];
      console.log('>>>> 1st element in files array >>>> ', this.resume);
    },
        onSubmit() {
 
          let formData = new FormData()
               formData.append('name',this.name)

              formData.append('resume', resume.files[0]);

          formData.append('family',this.family)

          formData.append('phone',this.phone)

           formData.append('email',this.email)

            formData.append('NID',this.NID)

             formData.append('address',this.address)

              formData.append('gender',this.gender)

               formData.append('trainingcourse',this.trainingcourse)

                formData.append('education',this.education)

                 formData.append('workxp',this.workxp)

                  formData.append('birthday',this.birthday)

                   formData.append('resumetext',this.resumetext)
                 Vue.http.options.emulateJSON = true;
                 Vue.http.options.emulateHTTP = true;
                  Vue.http.post('https://zinomin.ir/api/v1/collaboration',
                formData,{
headers:{
  'Content-Type' : 'multipart/form-data',
  'Accept':'multipart/form-data'
}
                })
             .then(response=>{
              console.log(response);
              alert("با موفقیت ثبت شد")
             })
            .catch(err => {
                console.log(err.response)
             });
        }
    },

  validations: {
    name: {
      required,
    },
         family: {
      required,
    },
      phone: {
      required,
      numeric,
    },
      workxp: {
      required,
    },
       education: {
      required,
    },
       trainingcourse: {
     required,
    },

    email: { email, required },
   resumetext: { required },
  },
};
</script>-->



