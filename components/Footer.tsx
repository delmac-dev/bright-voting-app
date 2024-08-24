import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function Footer() {
	return (
		<footer className=" border-t-[0.5px] py-10 flex items-center justify-center flex-col gap-5">
			<div className="flex items-center gap-2">
				<Link href="https://github.com/Akolgo1" target="_blank">
					<GitHubLogoIcon className="w-5 h-5 hover:scale-125 transition-all" />
				</Link>
			</div>
			<h1 className="text-sm">
				&copy; 2023 Akolgo. All right reserved
			</h1>
		</footer>
	);
}
