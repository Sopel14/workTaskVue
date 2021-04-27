<template>
  <div class="view-home">
    <div class="view-home__banner">
      <div class="banner-container">
        <h2>PAYROLL SOLUTIONS</h2>
        <h2>FOR GENUINE<br> TEMPORARY WORKERS &#38;<br> CONTRACTORS</h2>
      </div>
    </div>
    <div class="view-home__content">
      <div class="content-row">
        <div class="content-row__left">
          <h2>MORE THAN JUST A <br><span>PAYROLL COMPANY</span></h2>
          <p>Genius Money work with contractors and businesses to provide smarter, compliant models enabling them to payroll their sub-contractors without risk from HMRC investigation.</p>
          <p>
             With our UNPARALLELED EXPERIENCE within the contractor payroll sector; we fully understand the unique importance of maintaining a flexible workforce,
             whilst remaining competitive and staying profitable. With regular changes in legislation and compliance we also understand how difficult this can be to
             achieve without the correct advice and support in place.
          </p>
          <p>
            While our competition guarantee you protection from the associated costs of any employment tribunal challenges, Genius Money like to go a few steps further and GUARANTEE
            you that no such investigations even take place.
          </p>
        </div>
        <div class="content-row__right">
          <div class="benefits">
            <div class="benefits__row">
              <div class="benefits__icon">
                <img class="logo" src="@/assets/images/worker.svg" alt="logo"/>
              </div>
              <div class="benefits__content">
                <h3>Over<VueJsCounter start="2345" end="9992" duration="2500" thousand=","></VueJsCounter>Contractors</h3>
                <p>
                  Reliable payroll, week in week out<br>
                  <a href="#">Register with Genius</a>
                </p>
              </div>
            </div>
            <div class="benefits__row">
              <div class="benefits__icon">
                <img class="logo" src="@/assets/images/shield.svg" alt="logo"/>
              </div>
              <div class="benefits__content">
                <h3>Compliance Guarantee</h3>
                <p>
                  Reliable payroll, week in week out<br>
                  <a href="#">Register with Genius</a>
                </p>
              </div>
            </div>
            <div class="benefits__row">
              <div class="benefits__icon">
                <img class="logo" src="@/assets/images/scale.svg" alt="logo"/>
              </div>
              <div class="benefits__content">
                <h3>Employment Law Specialists</h3>
                <p>
                  Reliable payroll, week in week out<br>
                  <a href="#">Register with Genius</a>
                </p>
              </div>
            </div>
            <div class="benefits__row">
              <div class="benefits__icon">
                <img class="logo" src="@/assets/images/handshake.svg" alt="logo"/>
              </div>
              <div class="benefits__content">
                <h3>20+ years experience</h3>
                <p>
                  Reliable payroll, week in week out<br>
                  <a href="#">Register with Genius</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-row content-row--reverse">
        <div class="content-row__left">
          <jobs />
        </div>
        <div class="content-row__right">
          <hmrcLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueJsCounter from 'vue-js-counter';
import topBar from '@/components/layout/topBar/topBar.vue';
import hmrcLinks from './Sections/HmrcLinks/HmrcLinks.vue';
import jobs from './Sections/Jobs/Jobs.vue';

export default {
  name: 'Home',
  components: {
    topBar,
    hmrcLinks,
    jobs,
    VueJsCounter,
  },
};
</script>

<style lang="scss" src="./Home.scss" />
