export default function MeetingsLayout({ children }: { children: React.ReactNode }) {
	return (
		<section className="space-y-6">
			<h1 className="text-2xl font-bold">Sacrament Meetings</h1>
			{children}
		</section>
	);
}
