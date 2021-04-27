<template>
  <div class="section-jobs">
    <VueSlickCarousel :arrows="false" :dots="false" :autoplay="true" :speed="1000" :autoplaySpeed="5000">
    <job v-for="(job, index) in jobs" :key="index" :item="job" />
    </VueSlickCarousel>
  </div>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import job from '@/components/ui/job/job.vue';

export default {
    
    name: 'jobs',
    components: {
      job,
      VueSlickCarousel,
    },
    data(){
        return {
        sliderIndex: 1,
            jobs: [
                {
                    title: 'waterproofer',
                    rate: 'variable',
                    address: 'London, Greater London, SW1X 7QU',
                    duties: 'Lorem ipsum',
                    skills: 'scss',
            },
            {
              title: 'Front End Developer',
              rate: 'variable',
              address: 'Bornor Regis',
              duties: 'Lorem ipsum',
              skills: 'Vue JS',
            },
            ],

        };
    },
    methods: {
      moveToIndex(index) {
        this.sliderIndex = index;
      },
    },
};

</script>

<style lang="scss" src="./Jobs.scss" />
