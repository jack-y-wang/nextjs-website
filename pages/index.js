import Link from 'next/link';

import TeachingCard from '../components/TeachingCard';

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
			<img class="object-left" src="/title-hi.png" alt="" width="384" height="512" />
			{/* <Image src="/title-hi.png" alt="Hi, I'm Jack" /> */}
			{/* <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
				Hey, I’m Lee Robinson
			</h1> */}
			<figure class="md:flex">
				<img
					class="order-last w-40 h-40 flex rounded-full mx-auto"
					src="/jack.jpg"
					alt=""
					width="512"
					height="512"
				/>
				<div>
					<h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
						I'm a <b>software engineer at Amazon</b>. I recently graduated from <b>UC Berkeley</b>, where I
						studied electrical engineering and <b>computer science</b>.
						<br />
						<br />
						Some other things about me:
						<br />
						–&nbsp; I like being outdoors: National Parks, spikeball, hammocking
						<br />
						–&nbsp; I sometimes make {' '}
						<Link href="https://www.youtube.com/channel/UCja7ZkxohSdeqgilaIw36nw">
							<a>videos</a>
						</Link>
						<br />
						–&nbsp; I enjoy teaching and have taught{' '}
						<Link href="https://sp21.datastructur.es/">
							<a>data structures</a>
						</Link>{' '}
						for 2 years at Berkeley
					</h2>
				</div>
			</figure>

			<h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">Teaching</h3>
			<div class="grid grid-cols-2 auto-cols-max gap-3">
				<TeachingCard
					title="CS61B: Data Structures TA"
					description="Resources and notes I made for students while a TA (uGSI)"
					href=""
					icon="cs61b"
				/>
				<TeachingCard
					title="Intro CS Study Guides"
					description="Study guides to help students learn computer science topics and prepare for exams
          that I made while in CSM"
					href=""
					icon="cs61b"
				/>
				<br />
			</div>
			<h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
				Experience
			</h3>
		</div>
	);
}
