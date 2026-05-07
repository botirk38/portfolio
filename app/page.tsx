import { BlogPosts } from "app/components/posts";

export default function Page() {
	return (
		<section>
			<h1 className="mb-8 text-2xl font-semibold tracking-tighter">
				Botir Khaltaev
			</h1>
			<p className="mb-4">
				{`I'm Botir, an independent founder-engineer interested in systems that are simple, durable, and unusually clear.`}
			</p>
			<p className="mb-4">
				{`Most software fails long before it fails technically: the abstractions get vague, the state goes missing, and nobody remembers what the system is trying to become. I write about that boundary between machinery and judgment.`}
			</p>
			<p className="mb-4">
				{`The through-line is introspective agency: staying awake enough to notice what you're doing, why you're doing it, and whether it still serves the goal. This site is my public notebook on operating systems, databases, AI infrastructure, founding, and that kind of ruthless self-correction. Check out my blog.`}
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
