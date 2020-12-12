<template>
    <div class="attribution" :class="theme">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
            >Frontend Mentor</a
        >. Coded by
        <a href="https://github.com/RIGBY030898">Jesús Alberto Jimenez Tapia</a
        >.
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapState } from "vuex";

@Options({
    computed: {
        ...mapState(["theme"]),
    },
})
export default class Attribution extends Vue {}
</script>

<style lang="scss" scoped>
@import "../sass/styles.scss";

.attribution {
    margin-bottom: 1em;
    text-align: center;

    a {
        color: $bright-blue;
    }

    &.light {
        color: $lt-very-dark-grayish-blue;
    }
    &.dark {
        color: $dt-light-grayish-blue;
    }

    @media #{$information-mobile} {
        font-size: 0.4em;
    }
    @media #{$information-desktop} {
        font-size: 0.64em;
    }
}
</style>
