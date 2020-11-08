<template>
<div class="dropdown" :class="{open:isOpen}" @click="toggleDropDown" v-click-outside="closeDropDown">
    <slot name="title">
        <a href="javascript:void(0)" class="dropdown-toggle" data-toggle="dropdown">
            <i :class="icon"></i>
            <p class="notification">{{title}}
                <b class="caret"></b>
            </p>
        </a>
    </slot>
</div>
</template>

<script>
export default {
    name: 'drop-down',
    props: {
        title: String,
        icon: String
    },
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleDropDown() {
            this.isOpen = !this.isOpen;
        },
        closeDropDown() {
            this.isOpen = false;
        }
    }
}
</script>

<style>

</style>
