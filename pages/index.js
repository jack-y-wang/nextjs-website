import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

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
				<div class="md:text-left">
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
		</div>
	);
}
{
	/* <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
  <img class="w-32 h-32 md:w-48 md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-6 md:p-8 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-semibold">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-cyan-600">
        Sarah Dayan
      </div>
      <div class="text-gray-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */
}
