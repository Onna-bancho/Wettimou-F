const GetInvolved = () => {
	return (
		<section id="get-involved" className="relative w-full min-h-[60vh] md:min-h-screen px-4 overflow-hidden py-20">
			{/* Background (responsive) */}
			<div className="absolute inset-0">
				<picture className="block w-full h-full">
					<source media="(min-width:1024px)" srcSet="/images/Wettimou.png" />
					<img
						src="/images/Wettimou.png"
						alt="Get Involved Background"
						className="block object-cover object-center w-full h-auto md:h-full"
						loading="lazy"
						decoding="async"
					/>
				</picture>
				<div className="absolute inset-0 bg-black/50"></div>
			</div>

			{/* Content placeholder (no heading) */}
			<div className="relative z-10 max-w-5xl px-4 mx-auto text-center text-white"></div>
		</section>
	);
};

export default GetInvolved;
