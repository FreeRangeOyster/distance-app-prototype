<script lang="ts">
	export let label: string;
	export let address: string;
</script>

<div>
	<label for="source-address">{label}</label><br />
	<input id="source-address" type="text" placeholder="Input address" bind:value={address} />
</div>

<style>
	label {
		padding: 2px 0;
		font-weight: 400;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.32px;
	}
</style>
