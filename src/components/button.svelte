<script>
    export let text;
</script>

<style lang="scss" scoped >
    $red: red;

    button{
        background-color: $red !important;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
    }
</style>

<button>
    {text}
</button>