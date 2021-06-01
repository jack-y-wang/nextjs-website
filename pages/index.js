import { useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import mailgo from 'mailgo';

import TeachingCard from '../components/TeachingCard';
import WorkCard from '../components/WorkCard';
import SpotifyNowPlay from '../components/SpotifyNowPlay';

const mailgoConfig = {
	dark: false
};

const meta = {
	title: 'Jack Wang – software engineer, human being',
	image: '/favicon.png',
	type: 'website'
};

const ExternalLink = ({ href, children }) => (
	<a className="text-gray-500 hover:text-gray-600 transition" target="_blank" rel="noopener noreferrer" href={href}>
		{children}
	</a>
);

export default function Home() {
	useEffect(() => {
		mailgo(mailgoConfig);
	}, []);

	return (
		<div className="pt-10 flex flex-col justify-center items-start max-w-2xl mx-auto px-6 mb-16">
			<Head>
				<title>{meta.title}</title>
			</Head>
			<img class="object-left" src="/title-hi.png" alt="" width="384" height="512" />
			<figure class="md:flex">
				<img
					class="order-last w-40 h-40 flex rounded-full mx-auto mb-3"
					src="/jack.jpg"
					alt=""
					width="512"
					height="512"
				/>
				<div>
					<h2 className="prose text-gray-600 dark:text-gray-400 mb-6">
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
						</Link>{' '}
						of friends and trips
						<br />
						–&nbsp; I enjoy teaching, especially{' '}
						<Link href="https://sp21.datastructur.es/">
							<a>data structures</a>
						</Link>!
					</h2>
					<h2 className="prose text-gray-600 dark:text-gray-400 mb-10">
						Feel free to message me at{' '}
						<a href="mailto:jack.y.wang@berkeley.edu" target="_blank" el="noopener noreferrer">
							jack.y.wang@berkeley.edu
						</a>{' '}
						✉️
					</h2>
				</div>
			</figure>

			<h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
				Experiences
			</h3>
			<WorkCard
				title="Amazon Software Development Engineer Intern"
				description=""
				time="May - Aug 2020"
				summary="Built a tool that automates the rebuilding of AWS EBS servers to decrease offline capacity."
				icon="/amazon-logo.jpg"
			/>
			<WorkCard
				title="UNCF Silicon Valley CS Academy Instructor"
				description=""
				time="May - Aug 2019"
				summary="Mentored 30 students from historically black colleges and universites (HBCUs) data structures and algorithms."
				icon="/uncf.png"
			/>
			<WorkCard
				title="Seres Motors Engineering Intern"
				description=""
				time="May - Aug 2018"
				summary="Designed testing components for validation and testing of electric motors."
				icon="/seres.png"
			/>
			<br />
			<h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
				Teaching Resources
			</h3>
			<div class="grid grid-cols-2 auto-cols-max gap-3">
				<TeachingCard
					title="CS61B: Data Structures"
					description="Resources and notes I made for students when I TA'd (uGSI)."
					href="https://drive.google.com/drive/folders/1A9XFTSE9B5LT6tFrANozwiW0vbxwC2SV?usp=sharing"
					icon="cs61b"
				/>
				<TeachingCard
					title="Intro CS Study Guides"
					description="Study guides to help students learn computer science topics and prepare for exams
          that I made while in CSM."
					href="https://drive.google.com/drive/folders/1y9yT9svGn0La_WRy_nqi1XRQsJ7Nteds?usp=sharing"
					icon="cs61b"
				/>
				<br />
			</div>
			{/* <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">Projects</h3> */}
			<footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mt-6">
				<hr className="w-full border-1 border-gray-300 dark:border-gray-800 mb-4" />
				<SpotifyNowPlay />
				<hr />
				<div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
					<div className="flex flex-col space-y-4">
						<ExternalLink href="https://www.linkedin.com/in/jack-y-wang/">LinkedIn</ExternalLink>
					</div>
					<div className="flex flex-col space-y-4">
						<ExternalLink href="https://github.com/jack-y-wang">Github</ExternalLink>
					</div>
				</div>
			</footer>
		</div>
	);
}
