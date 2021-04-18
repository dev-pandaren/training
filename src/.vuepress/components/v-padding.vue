<template>
    <div class="container" :class="classes">
        <slot name="first">User Default1</slot>
    </div>
</template>

<script>
export default {
	props: ['padding'],
    computed: {
        classes() {
            return {
                ['padding-'+this.padding]: true, 
            };
        }
    }
}
</script>

<style scoped>
.container {
    --padding: 35px;
}
.padding-left   { padding-left:   var(--padding); }
.padding-right  { padding-right:  var(--padding); }
.padding-top    { padding-top:    var(--padding); }
.padding-bottom { padding-bottom: var(--padding); }
</style>
