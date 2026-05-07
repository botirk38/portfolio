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
				{`Most software fails long before it fails technically: the abstractions get vague, the state goes missing, and nobody remembers what the system is actually trying to be. I write about that boundary between machinery and judgment.`}
			</p>
			<p className="mb-4">
				{`This site is my public notebook on operating systems, databases, AI infrastructure, founding, and agency. Taste is compressed judgment. Clarity compounds. Read the notes.`}
			</p>
			<div className="my-8">
				<BlogPosts />
			</div>
		</section>
	);
}
