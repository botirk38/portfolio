interface Citation {
	id: string;
	authors: string;
	year: string;
	title: string;
	venue?: string;
	url?: string;
}

interface CitationsProps {
	citations: Citation[];
}

export function Citations({ citations }: CitationsProps) {
	return (
		<div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
			<h2 className="text-lg font-semibold mb-4">References</h2>
			<ol className="list-decimal list-inside space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
				{citations.map((citation) => (
					<li key={citation.id} id={`ref-${citation.id}`}>
						{citation.url ? (
							<a
								href={citation.url}
								target="_blank"
								rel="noopener noreferrer"
								className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
							>
								{citation.authors} ({citation.year}). <em>{citation.title}</em>
								{citation.venue ? `. ${citation.venue}.` : "."}
							</a>
						) : (
							<>
								{citation.authors} ({citation.year}). <em>{citation.title}</em>
								{citation.venue ? `. ${citation.venue}.` : "."}
							</>
						)}
					</li>
				))}
			</ol>
		</div>
	);
}

export function Cite({ id }: { id: string }) {
	return (
		<sup className="text-xs">
			<a
				href={`#ref-${id}`}
				className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100"
			>
				[{id}]
			</a>
		</sup>
	);
}
