<template>
	<div>
		<ul>
			<li>
				<a v-link="{ path: '/foo' }">Go to Foo</a>
			</li>
		</ul>
		<ul>
			<li>
				<a v-link="{ path: '/bar' }">Go to Bar</a>
			</li>
		</ul>
		<ul>
			<li>
				<a v-link="{ path: '/gee' }">Go to Bar</a>
			</li>
		</ul>
	</div>
	<div>
		<router-view></router-view>
	</div>
</template>