import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

export default function Lineups() {
	async function getStats() {
		await axios.get('http://192.168.0.64:3000/stats').then(
			(response) => {
				setStats(response);
				console.log(response);
			},
			(err) => {
				console.log(err);
			},
		);
	}

	const [stats, setStats] = useState<AxiosResponse | null | void>(null);
	useEffect(() => {
		getStats();
		console.log(stats);
	}, []);

	return (
		<div className="grid px-3 md:px-5 xl:grid-cols-2 gap-5 sm:grid-cols-1">
			<div className="w-full h-full overflow-hidden border border-[#1C1C1C] shadow-md text-xs">
				<div className="flex px-2 py-2 bg-neutral-900 ">
					<div className=" w-4/5 h-3/4">
						<div className="grid grid-cols-3 justify-between">
							<div className="justify-items-start col-start-1 col-span-2">
								<p className="text-sm font-bold">Warriors</p>
							</div>
							<div className="flex align-center">
								<p className="px-1 text-center">2-4-2</p>
							</div>
							<div className="flex justify-items-end ">
								<p className="h-6 w-6 items-center justify-center text-center rounded-full border border-[#F2384E]">
									46
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:block bg-neutral-900 border-gray-300 grid grid-cols-4">
					<div className="flex">
						<div className="w-1/12 px-2.5 py-2 border border-[#1C1C1C] justify-self-start ">
							<div className="flex">
								<div className="flex flex-col">
									<p className="">Lineup</p>
								</div>
							</div>
						</div>
						<div className="w-3/4 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="">Player</p>
								</div>
							</div>
						</div>
						<div className="w-1/2 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<img src="/Player Info.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="w-1/12 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="">Rating</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:block border-gray-300 grid grid-cols-4">
					<div className="flex">
						<div className="w-1/12 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="font-semibold">1 GK</p>
								</div>
							</div>
						</div>
						<div className="w-3/4 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="font-bold">Player</p>
								</div>
							</div>
						</div>
						<div className="w-1/2 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<img src="/Player Info.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="w-1/12 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="font-semibold">Rating</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-auto  w-full h-full border border-[#1C1C1C] overflow-hidden shadow-md text-xs">
				<div className="flex px-2 py-2 bg-neutral-900">
					<div className="w-5/12 flex">
						<div className="flex-col grid grid-cols-3">
							<div className="justify-items-start ">
								<p className="text-sm font-bold">Warriors</p>
							</div>
							<div className="justify-ends justify-items-end">
								<p className="px-1 text-center">2-4-2</p>
							</div>
							<div className="justify-ends justify-items-end">
								<p className="h-6 w-6 items-center justify-center text-center rounded-full border border-[#F2384E]">
									46
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:block bg-neutral-900 border-gray-300 grid grid-cols-4">
					<div className="flex">
						<div className="w-1/12 px-2.5 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="">Lineup</p>
								</div>
							</div>
						</div>
						<div className="w-1/2 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="">Player</p>
								</div>
							</div>
						</div>
						<div className="w-1/2 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<img src="/Player Info.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="w-1/2 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="">Rating</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="sm:block border-gray-300 grid grid-cols-4">
					<div className="flex">
						<div className="w-1/12 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="font-semibold">
										1<span className="text-yellow-200 font-light ml-1">GK</span>
									</p>
								</div>
							</div>
						</div>
						<div className="w-1/2 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="font-bold">Player</p>
								</div>
							</div>
						</div>
						<div className="w-1/2 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<img src="/Player Info.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="w-1/2 px-2 py-2 border border-[#1C1C1C]">
							<div className="flex">
								<div className="flex flex-col">
									<p className="font-semibold">Rating</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
