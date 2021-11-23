<template>
  <header>
    <div class="navbar navbar-fixed-top">
      <div class="container">
        <div class="header1">
           <div class="search">
                    <input type="text" placeholder="هرچی که میخوای رو جستجو کن">
                    <button class="btn">جستجو</button>
                    
                </div>
                <router-link to="/cart"><img src="/src/assets/image/cart.png"></router-link>
                </div>
      
        <div class="row">
          <div class="col-sm-1" id="logo">
            <!-- <img src="/src/assets/image/logo tech.png" alt="logo"> -->
          </div>
          <div id="menu" class="col-sm-11">
            <li>
              <router-link to="/" class="rtr">قطعات اصلی</router-link>
            </li>
            <li>
              <router-link to="/main"> قطعات جانبی </router-link>
              <a> </a>
            </li>
            <li>
              <router-link to="/accessories"> لوازم جانبی کامپیوتر </router-link>
            </li>
            <li>
              <router-link to="/AboutUs">درباره ما</router-link>
            </li>
            <li>
              <router-link to="/ContacUS">تماس با ما</router-link>
            </li>
       
            
            <div class="col-sm-1" id="account">
             <li><router-link to="/login">ورود</router-link></li>
             /
                 <li><router-link to="/register">ثبت نام</router-link></li>
            </div>
          </div>
        </div>
      </div>
      <div class="fas fa-bars" id="nav-icon"></div>
    </div>
  </header>
</template>

