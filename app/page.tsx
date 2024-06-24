import Projects from "./ui/projects/Projects";
import Video from "./ui/video/Video";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[900px] gap-20">
        <Video/>
        <Projects/>
      </div>
    </main>
  );
}
