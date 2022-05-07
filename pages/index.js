import { useEffect } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import mailgo from 'mailgo';

import TeachingCard from '../components/TeachingCard';
import ProjectCard from '../components/ProjectCard';
import WorkCard from '../components/WorkCard';
import SpotifyNowPlay from '../components/SpotifyNowPlay';

const mailgoConfig = {
	dark: false
};

const meta = {
	title: 'Jack Wang – software engineer, spikeballer, human being',
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
						I'm a <b>software engineer at Amazon AWS</b>, working on Elastic Block Storage (EBS). I
						graduated from <b>UC Berkeley</b>, where I studied Electrical Engineering and{' '}
						<b>Computer Science</b>.
						<br />
						<br />
						Some other things about me:
						<br />
						–&nbsp; I like being outdoors: National Parks, spikeball, hammocking
						<br />
						–&nbsp; I enjoy spending time and playing with my{' '}
						<a href="/assets/denver.JPG" target="_blank" el="noopener noreferrer">
							dog!
						</a>
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
						Here's my{' '}
						<a href="/assets/JackWangResume.pdf" target="_blank" el="noopener noreferrer">
							resume
						</a>{' '}
						and you can reach me at{' '}
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
				title="Amazon AWS Software Engineer"
				description=""
				time="Aug '21 - Current"
				summary="Working on backend infrastructure to maintain online volume capacity for customers
				by automating processes that provision and monitor the health of EBS servers."
				icon="/amazon-logo.jpg"
			/>
			<WorkCard
				title="Amazon AWS Software Engineer Intern"
				description=""
				time="May - Aug '20"
				summary="Increased online availability of servers to customers by shipping a feature that allows configuration to repeat
				steps in the workflow to build software onto a server that might fail due to transient issues."
				icon="/amazon-logo.jpg"
			/>
			<WorkCard
				title="UC Berkeley Data Structures Student Instructor"
				description=""
				time="Jan '20 - Aug '21"
				summary="Taught weekly 1-hour discusion spections specifically for students in the CS scholrs program, 
				who come from under-resourced and low-opportunity communities, held office hours, and graded coursework 
				and exams"
				icon="/61b-logo.png"
			/>
			<WorkCard
				title="UNCF Silicon Valley CS Academy Instructor"
				description=""
				time="May - Aug '19"
				summary="Mentored 30 students from historically black colleges and universites (HBCUs) data structures and algorithms."
				icon="/uncf.png"
			/>
			<WorkCard
				title="Seres Motors Engineering Intern"
				description=""
				time="May - Aug '18"
				summary="Designed testing components for validation and testing of electric motors."
				icon="/seres.png"
			/>

			<br />
			<h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">Projects</h3>
			<ProjectCard
				title="Slack Backend"
				description="A backend application modeled after Slack using Flask, SQLAlchemy, and AWS S3. 
							This application implements Workspaces, Users with Authentication, 
							Channels, Threads, Direct Messaging, and Images"
				icon="/slack-icon.png"
				github="https://github.com/jack-y-wang/slack-backend"
			/>
			<ProjectCard
				title="Maze Search Algorithm Visualizer"
				description="A web app to help students in a United Negro College Fund (UNCF) summer program visualize applications of
							search algorithms by using them to find a path through
							randomly genderated mazes and tree diagrams"
				site="https://maze-traversal.herokuapp.com/"
				github="https://github.com/jack-y-wang/mazeTraversals"
				icon="/maze.png"
			/>
			<ProjectCard
				title="PomoTasks"
				description="A Pomodoro to-do list web app built with React, Google Firebase, and Google Authentication
							to help improve time managment skills with options to estimate the # of pomodoros
							needed to finish a task as well to record notes on a particular task."
				site="https://pomotasks.netlify.app/"
				github="https://github.com/jack-y-wang/PomoTasks"
				icon="/yes-check-circle.png"
			/>
			<br />
			<h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 text-black dark:text-white">
				Teaching Resources
			</h3>
			<h2 className="prose text-gray-600 dark:text-gray-400 mb-6">
				Below are some teaching resources I made while I as a teaching assistant / undergraduate student
				instructor at UC Berkeley to help students conceptually understand concepts:
			</h2>
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
