<script lang="ts">
    export let name: string, amount: any;
</script>

<div class="my-budget-card border border-secondary rounded-xl p-4">
    <h4>{name}</h4>
    <strong>{amount}</strong>
    <h4>0%</h4>
</div>