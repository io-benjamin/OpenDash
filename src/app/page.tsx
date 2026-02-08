import { MarketTracker } from "@/components/dashboard/market-tracker";
import { ProjectsBoard } from "@/components/dashboard/projects-board";
import { NotesMemory } from "@/components/dashboard/notes-memory";
import { ScheduledReports } from "@/components/dashboard/scheduled-reports";
import { ContentIdeas } from "@/components/dashboard/content-ideas";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IO</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-tight">OpenDash</h1>
                <p className="text-xs text-muted-foreground">Command Center</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Systems Online</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
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
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 mt-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground">
            OpenDash v1.0 • Built with Next.js + shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  );
}
