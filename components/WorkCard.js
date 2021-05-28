export default function ProjectCard({ title, description, time, summary, icon }) {
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
				<div className="mb-8 w-full">
					<div className="flex flex-col md:flex-row md:items-end justify-between">
						<h4 className="text-lg md:text-xl font-medium w-full text-gray-900 dark:text-gray-100">
							{title}
						</h4>
						<p className="text-sm text-gray-500 text-left md:text-right w-40 pb-1 md:mb-0">{time}</p>
					</div>
					<p className="text-sm text-gray-600 dark:text-gray-400">{summary}</p>
				</div>
			</a>
			{/* <div>
				<h4 class="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">{title}</h4>
				<p class="font-sans text-sm text-gray-500 dark:text-gray-300">{time}</p>
			</div> */}
		</div>
	);
}
