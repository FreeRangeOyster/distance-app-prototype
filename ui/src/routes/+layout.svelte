<div id="main-content">
	<slot />
</div>

<style>
	#main-content {
		padding: 0 32px;
		font-family: 'Inter', sans-serif;
		background-color: #f8f8f6;
	}

	:global(.button) {
		display: flex;
		padding: 15px 16px;
		gap: 32px;
		font-weight: 400;
		font-size: 14px;
		line-height: 18px;
		letter-spacing: 0.16px;
		margin: auto 0;
		text-decoration: none;
	}
	:global(.button > svg.svelte-fa) {
		margin: auto 0;
		height: 16px;
	}
</style>
