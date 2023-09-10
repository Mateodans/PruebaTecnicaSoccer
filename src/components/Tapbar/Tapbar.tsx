import { useState } from 'react';
function Tapbar() {
	const [showTapBar, setShowTapBar] = useState(false);
	const toggleShowTapBar = () => {
		// setShowTapBar(!showTapBar);
	};
	return (
		<div className="p-4 border-b border-zinc-800 text-center space-x-20 md:space-x-4 pb-4">
			<a
				href="/"
				onClick={toggleShowTapBar}
				className={
					showTapBar
						? 'my-4 border-b-[3px] pb-4 font-bold'
						: 'my-4 hover:border-b-[3px] hover:pb-4 hover:font-bold'
				}
			>
				STATS
			</a>
			<a
				href="/lineup"
				className={
					showTapBar
						? 'my-4 border-b-[3px] pb-4 font-bold'
						: 'my-4 hover:border-b-[3px] hover:pb-4 hover:font-bold'
				}
			>
				LINEUP
			</a>
			<a
				href=""
				className={
					showTapBar
						? 'my-4 border-b-[3px] pb-4 font-bold md:hidden'
						: 'my-4 hover:border-b-[3px] hover:pb-4 hover:font-bold md:hidden'
				}
			>
				ZONES
			</a>
		</div>
	);
}

export default Tapbar;
