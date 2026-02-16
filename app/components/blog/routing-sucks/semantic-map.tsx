"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const SemanticMap = () => {
	const [mounted, setMounted] = useState(false);
	const [activePoint, setActivePoint] = useState<number | null>(null);

	useEffect(() => {
		setMounted(true);
	}, []);

	const points = [
		{
			x: 20,
			y: 30,
			label: "Creative Writing",
			model: "Claude 4.5 Opus",
			color: "bg-purple-500",
		},
		{
			x: 70,
			y: 20,
			label: "React Code",
			model: "Claude 4.5 Sonnet",
			color: "bg-blue-500",
		},
		{
			x: 50,
			y: 60,
			label: "SQL Queries",
			model: "GPT-5.2",
			color: "bg-green-500",
		},
		{
			x: 80,
			y: 80,
			label: "Math Proofs",
			model: "Gemini 3 Pro",
			color: "bg-red-500",
		},
		{
			x: 30,
			y: 80,
			label: "Data Extraction",
			model: "Llama 4",
			color: "bg-yellow-500",
		},
	];

	if (!mounted) {
		return (
			<div className="my-8 p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-900">
				<h3 className="text-lg font-semibold mb-2">Semantic Routing Map</h3>
				<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
					Hover over the clusters to see how different request types map to
					specific models in the vector space.
				</p>
				<div className="relative h-[300px] w-full bg-white dark:bg-black rounded border border-neutral-200 dark:border-neutral-800 overflow-hidden">
					<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none">
						{Array.from({ length: 36 }).map((_, i) => (
							<div
								key={i}
								className="border-[0.5px] border-neutral-100 dark:border-neutral-900"
							/>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="my-8 p-6 border border-neutral-200 dark:border-neutral-800 rounded-lg bg-neutral-50 dark:bg-neutral-900">
			<h3 className="text-lg font-semibold mb-2">Semantic Routing Map</h3>
			<p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
				Hover over the clusters to see how different request types map to
				specific models in the vector space.
			</p>

			<div className="relative h-[300px] w-full bg-white dark:bg-black rounded border border-neutral-200 dark:border-neutral-800 overflow-hidden">
				{/* Grid lines */}
				<div className="absolute inset-0 grid grid-cols-6 grid-rows-6 pointer-events-none">
					{Array.from({ length: 36 }).map((_, i) => (
						<div
							key={i}
							className="border-[0.5px] border-neutral-100 dark:border-neutral-900"
						/>
					))}
				</div>

				{/* Clusters */}
				{points.map((point, i) => (
					<motion.div
						key={i}
						className="absolute"
						style={{ left: `${point.x}%`, top: `${point.y}%` }}
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: i * 0.1 }}
					>
						<button
							type="button"
							className="relative group cursor-pointer border-none bg-transparent p-0 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full"
							onMouseEnter={() => setActivePoint(i)}
							onMouseLeave={() => setActivePoint(null)}
							onFocus={() => setActivePoint(i)}
							onBlur={() => setActivePoint(null)}
							aria-label={`Cluster: ${point.label}, Best Model: ${point.model}`}
						>
							<div
								className={`w-4 h-4 rounded-full ${point.color} shadow-lg ring-4 ring-white/20 dark:ring-black/20`}
							/>

							{/* Pulse effect */}
							<div
								className={`absolute inset-0 -z-10 w-4 h-4 rounded-full ${point.color} animate-ping opacity-20`}
							/>

							{/* Tooltip */}
							<div
								className={`
                absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-max z-10
                px-3 py-1.5 rounded bg-neutral-900 dark:bg-white 
                text-white dark:text-black text-xs font-medium
                transition-all duration-200
                ${activePoint === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
              `}
							>
								<div className="flex flex-col items-center gap-0.5">
									<span>{point.label}</span>
									<span className="opacity-70 text-[10px]">
										Best: {point.model}
									</span>
								</div>
								{/* Arrow */}
								<div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-neutral-900 dark:border-t-white" />
							</div>
						</button>
					</motion.div>
				))}
			</div>
		</div>
	);
};
