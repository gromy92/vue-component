<template>
    <div :style="{height: swiperHeight,width: swiperSlideWidth}" class="swiper">
        <div :style="{transform:translate.translateValue, width: swiperWidth,marginLeft: translate.marginLeft}" class="swiper-wrapper slider-auto">
            <div :style="{width: swiperSlideWidth}" class="swiper-slide"><!--
    --><img :src="swiperData.imgData[swiperData.imgData.length-1].imgSrc" @click="sliderHref(swiperData.imgData[swiperData.imgData.length-1].link)">
            </div><!--
    --><div :style="{width: swiperSlideWidth}" v-for="item in swiperData.imgData" class="swiper-slide">
                <img :src="item.imgSrc" @click="sliderHref(item.link)">
            </div><!--
    --><div :style="{width: swiperSlideWidth}" class="swiper-slide">
                <img :src="swiperData.imgData[0].imgSrc" @click="sliderHref(swiperData.imgData[0].link)">
            </div>
        </div>
        <p>{{swiperData.imgData.length}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                swiperHeight: '',
                swiperWidth: '',
                clientWidth: '',
                swiperSlideWidth: '',
                translate: {
                    translateValue: '',
                    translateX: 0,
                    marginLeft: 0
                },
                swiper: this.swiperData,
            }
        },
        props: [
            'swiperData'
        ],
        mounted() {
            this.initSwiper();
        },
        methods: {
            initSwiper() {
                this.initSwiperHeightAndWidth();
                this.initAutoPlay();
            },
            initSwiperHeightAndWidth() {
                this.clientWidth = document.documentElement.clientWidth;
                this.swiperHeight = this.swiper.height / 75 + 'rem';
                if (this.swiper.loop) {
                    this.swiperWidth = (this.swiper.imgData.length + 2) * this.clientWidth + 'px';
                } else {
                    this.swiperWidth = this.swiper.imgData.length * this.clientWidth + 'px';

                }
                this.swiperSlideWidth = this.clientWidth + 'px';
            },
            initAutoPlay() {
                let self = this;
                self.translate.translateValue = 'translate3d(0px,0px,0px)';
                self.translate.translateX = 0;
                // document.getElementsByClassName('slider-auto')[0].style.transform = this.translate;
                setInterval(function () {
                    let me = self;
                    console.log(self.translate.translateX + '--' + me.swiperWidth);
                    if (me.swiper.loop) {
                        if (me.translate.translateX == (me.swiper.imgData.length + 2) * me.clientWidth) {
                            me.translate.translateX = 0;
                        }
                    }else{
                        if (me.translate.translateX == me.swiper.imgData.length* me.clientWidth) {
                            me.translate.translateX = 0;
                        }
                    }
                    if (me.translate.translateX == me.swiper.imgData.length * me.clientWidth) {
                        me.translate.translateX = 0;
                    }
                    me.translate.translateValue = 'translate3d(-' + me.translate.translateX + 'px,0px,0px)';
                   me.translate.translateX += me.clientWidth;
                }, 1000)
            },
            sliderHref(href) {
                alert(href);
            }
        }
    }

</script>
<style lang="scss" scoped>
    @import '../assets/css/scss/index.scss';
</style>