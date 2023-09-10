function ScoreBoard() {
	return (
		<div className="border-b border-zinc-800">
			<div className="flex justify-center">
				<div className="py-4 rounded-lg shadow-md flex justify-center">
					<div className="items-center grid grid-flow-col justify-stretch gap-6">
						<div className="w-full">
							<p className="">Equipo A</p>
						</div>
						<div className="bg-[#151515] w-[100px] border-l-4 border-green-400 flex justify-evenly py-2">
							<p className="text-2xl flex justify-center font-bold">3</p>
							<p className="text-3xl flex justify-center items-center text-[#424242]">
								|
							</p>
							<p className="text-2xl flex justify-center font-bold">5</p>
						</div>
						<div className="w-full">
							<p className="bg-inherit">Equipo B</p>
						</div>
					</div>
				</div>
			</div>
			<div className="grid justify-center space-y-2 mb-4">
				<span className="block text-sm text-[#6AD56A]">points</span>
				<div className="flex space-x-1 justify-center">
					<img className="w-[14px] h-[15px]" src="/token.png" alt="" />
					<p className="text-sm">4</p>
				</div>
			</div>
		</div>
	);
}

export default ScoreBoard;
