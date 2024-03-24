<div id="main-content">
	<slot />
</div>

<style>
	#main-content {
		padding: 0 32px;
		font-family: 'Inter', sans-serif;
		background-color: #f8f8f6;
	}

	#main-content :global(.button) {
		display: inline-block;
		padding: 15px 16px;
		gap: 32px;
		font-weight: 400;
		font-size: 14px;
		line-height: 18px;
		letter-spacing: 0.16px;
		margin: auto 0;
		text-decoration: none;
	}
</style>
