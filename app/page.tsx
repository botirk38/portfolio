import { BlogPosts } from "app/components/posts";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Botir Khaltaev
			</h1>
			<p className="mb-4">
				{`I'm a Systems Software Engineer and Research Engineer @ Snyk working on LLM infrastructure. Currently studying at Royal Holloway University of London, I specialize in storage systems, operating systems, and ML infrastructure. I'm passionate about building high-performance, reliable systems that power the next generation of computing.`}
			</p>
			<p className="mb-4">
				{`My focus lies in the critical systems that form the backbone of modern computing - from kernel-level optimizations and distributed storage architectures to ML system infrastructure. I work extensively with C, C++, Rust, Go, and Zig for systems programming, and contribute to projects like PostgreSQL connection pooling, high-performance key-value stores, and semantic caching systems.`}
			</p>
			<p className="mb-4">
				{`Currently working on projects including an operating system in Zig, intelligent LLM inference infrastructure, and PostgreSQL monitoring tools. I believe in building systems with integrity and treating every optimization and architectural decision with the respect it deserves.`}
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
