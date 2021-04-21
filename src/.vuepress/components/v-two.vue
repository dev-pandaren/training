<template>
    <div class="wrapper">
        <div class="column" :class="grow ? 'column-grow' : 'column-half'">
            <slot name="first">User Default1</slot>
        </div>
        <div class="column" :class="grow ? 'column-fix' : 'column-half'">
            <slot name="last">User Default2</slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        grow: { type: Boolean }
    },
}
</script>

<style scoped>
.wrapper {
	display: flex;
	margin: 10px 0px;
}
.column {
	margin: 0px 5px;
}
.column-half {
	width: 50%;
}
.column-grow {
    width: calc(100% - 200px);
}
.column-fix {
	width: 200px;
}

@media screen and (max-width: 1070px) {
    .wrapper {
        flex-wrap: wrap;
    }
    .column-half {
        width: 100%;
    }
    .column-grow {
        width: 100%;
    }
    .column-fix {
        width: 100%;
    }
}
</style>
