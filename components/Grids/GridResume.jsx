import React, { useEffect, useState } from "react";
import { ImArrowUpRight2 } from "react-icons/im";

import { useFilter } from "../../context/FilterContext";
import { FILTER } from "../../constants/FilterConstants"

import Link from "next/link";

const GridResume = () => {
	const { filter } = useFilter()
	const visible = filter === FILTER.ALL || filter === FILTER.MEDIA

	return (
		<div className={`w-full h-full p-12 flex flex-col justify-between transition-opacity ${!visible && "opacity-25"}`}>
			<div className="">
				<h1 className="font-moranga text-2xl">Resume - More about me</h1>
				<p className="">
					An overview of my personal informations, skills, and experiences for you to know me better.
				</p>
			</div>

			<div className="flex justify-between items-center text-sm">
				<Link href="/resume" scroll={false}>
					<a className="px-4 py-2 rounded-full shadow-border-light flex items-center font-medium hover:shadow-border-light-outer dark:shadow-border-dark dark:hover:shadow-border-dark-outer transition-shadow duration-200">
						<ImArrowUpRight2 className="mr-2" />
						Read More
					</a>
				</Link>
				<span className="text-slate-500">Mar 07, 2023</span>
			</div>
		</div>
	);
};

export default GridResume;
