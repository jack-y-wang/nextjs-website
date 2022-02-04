export default function ProjectCard({ title, description, icon, site, github }) {
	const ExternalLink = ({ href, children }) => (
		<a
			className="text-sm text-gray-500 hover:text-gray-600 font-medium transition "
			target="_blank"
			rel="noopener noreferrer"
			href={href}
		>
			{children}
		</a>
	);
	return (
		<div class="flex rounded pr-4 w-full">
			<div class="pt-1 object-top h-8 w-8 mr-4">
				<span class="sr-only">{title}</span>
				<img
					class="order-last w-30 h-30 flex rounded-full mx-auto"
					src={icon}
					alt=""
					width="512"
					height="512"
				/>
			</div>
			<a className="w-full">
				<div className="w-full">
					<div className="flex flex-col md:flex-row md:items-end justify-between">
						<h4 className="text-lg md:text-xl font-medium w-full text-gray-900 dark:text-gray-100">
							{title}
						</h4>
					</div>
					<p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
				</div>
				<div className="mb-8 w-full flex justify-start gap-4">
					{site ? (
						<div>
							<ExternalLink href={site}>Site</ExternalLink>
						</div>
					) : null}

					{github ? (
						<div>
							<ExternalLink href={github}>Github</ExternalLink>
						</div>
					) : null}
				</div>
			</a>
		</div>
	);
}
