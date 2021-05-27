export default function ProjectCard({ title, description, href, icon }) {
	return (
		<a
			class="mb-1 hover:shadow border border-gray-200 dark:border-gray-800 rounded"
			href={href}
			aria-label={title}
			target="_blank"
			rel="noopener noreferrer"
		>
			<div class="h-full items-center  p-4">
				<div class="h-full">
					<h4 class="text-base font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h4>
					<p class="text-sm text-gray-600">{description}</p>
				</div>
			</div>
		</a>
	);
}
