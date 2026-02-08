import { MarketTracker } from "@/components/dashboard/market-tracker";
import { ProjectsBoard } from "@/components/dashboard/projects-board";
import { NotesMemory } from "@/components/dashboard/notes-memory";
import { ScheduledReports } from "@/components/dashboard/scheduled-reports";
import { ContentIdeas } from "@/components/dashboard/content-ideas";
import { Shell } from "@/components/shell";

export default function Dashboard() {
  return (
    <Shell>
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <MarketTracker />
          <ProjectsBoard />
        </div>
        
        {/* Right Column */}
        <div className="space-y-6">
          <ScheduledReports />
          <NotesMemory />
          <ContentIdeas />
        </div>
      </div>
    </Shell>
  );
}
