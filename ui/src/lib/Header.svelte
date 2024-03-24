<div class="header-section">
	<header>
		<div class="header-wrapper">
			<div class="headline">
				<h1>Distance Calculator</h1>
				<span>Prototype web application for calculating the distance between addresses.</span>
			</div>
			<slot name="button" />
		</div>
	</header>
</div>

<style>
	.header-section {
		padding: 16px 0;
	}
	.header-wrapper {
		padding: 16px;
		gap: 16px;
		display: flex;
		justify-content: space-between;
		border: 0;
		border-bottom: 1px solid #f8f8f6;
	}
	.headline {
		gap: 8px;
		display: grid;
	}
	.headline > h1 {
		margin-block: 0;
		font-weight: 300;
		font-size: 32px;
		line-height: 40px;
	}
	.headline > span {
		font-weight: 400;
		font-size: 14px;
		line-height: 20px;
		letter-spacing: 0.16px;
	}
</style>
