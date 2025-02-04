<script>
	export let form;
</script>

<main>
	<form>
		<h2>Sign In</h2>
		{#if form}
			<h4>
				{form.error}
			</h4>
		{/if}
		<div>
			<label for="email">email</label>
			<input type="email" id="email" name="email" placeholder="email" />
		</div>
		<div>
			<label for="password">password</label>
			<input type="password" id="password" name="password" placeholder="password" />
		</div>
		<div>
			<button type="submit">Submit</button>
		</div>
		<div><a href="/sign-up">Create Account</a></div>
	</form>
</main>
