import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-col justify-center items-center p-4 text-sm font-medium dark:border dark:border-dark-lightgray mt-4">
			<p>
				Made with 💖 and ☕ by{" "}
				<span className="font-moranga">Reinhard Kevin</span>
			</p>
			<p className="font-normal text-xs text-slate-500">
				Inspired by: neflynn.com
			</p>
		</div>
	);
};

export default Footer;
