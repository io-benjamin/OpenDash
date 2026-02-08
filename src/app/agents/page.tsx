import { Bot, CheckCircle, Clock, Zap } from "lucide-react";
import { Shell } from "@/components/shell";

interface SubAgent {
  id: string;
  label: string;
  status: "completed" | "running" | "idle";
  task: string;
  runtime?: string;
  tokens?: string;
  completedAt?: string;
}

const subAgents: SubAgent[] = [
  {
    id: "80306b5b-5cdf-42b1-a894-6aa94f3cc739",
    label: "family-app-builder",
    status: "completed",
    task: "Built Family Circle MVP - link-based family connection app with daily prompts, photo responses, reactions, comments, streaks, and realtime updates.",
    runtime: "8m 37s",
    tokens: "58.6k",
    completedAt: "2026-02-08 02:44 UTC",
  },
  {
    id: "2c07ba6f-a6ba-474d-91b0-b5ffa3f64d49",
    label: "family-prompts-builder",
    status: "completed",
    task: "🌍 AUTONOMOUS: Built Family Prompts - open source API & widget with 370+ daily conversation prompts for families. Free forever, MIT licensed.",
    runtime: "8m 49s",
    tokens: "55.2k",
    completedAt: "2026-02-08 02:32 UTC",
  },
  {
    id: "c9455f00-b858-47e2-831f-b780b5c5611f",
    label: "opendash-builder",
    status: "completed",
    task: "Built OpenDash personal dashboard with market tracker, projects board, notes, scheduled reports, and content ideas sections.",
    runtime: "4m 48s",
    tokens: "31.2k",
    completedAt: "2026-02-08 01:34 UTC",
  },
];

function StatusBadge({ status }: { status: SubAgent["status"] }) {
  const styles = {
    completed: "bg-emerald-500/20 text-emerald-400",
    running: "bg-amber-500/20 text-amber-400",
    idle: "bg-muted text-muted-foreground",
  };

  const icons = {
    completed: CheckCircle,
    running: Zap,
    idle: Clock,
  };

  const Icon = icons[status];

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${styles[status]}`}>
      <Icon className="h-3 w-3" />
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export default function AgentsPage() {
  return (
    <Shell>
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Sub-Agents</h2>
        <p className="text-muted-foreground">Background tasks spawned by Nix</p>
      </div>

      <div className="grid gap-4">
        {subAgents.map((agent) => (
          <div
            key={agent.id}
            className="p-6 rounded-xl border border-border/50 bg-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-violet-400" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">{agent.label}</h3>
                    <StatusBadge status={agent.status} />
                  </div>
                  <p className="text-sm text-muted-foreground">{agent.task}</p>
                </div>
              </div>
            </div>

            {agent.status === "completed" && (
              <div className="mt-4 pt-4 border-t border-border/50 flex gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Runtime: {agent.runtime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Tokens: {agent.tokens}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Completed: {agent.completedAt}</span>
                </div>
              </div>
            )}
          </div>
        ))}

        {subAgents.length === 0 && (
          <div className="p-12 rounded-xl border border-dashed border-border/50 text-center">
            <Bot className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="font-medium text-muted-foreground">No sub-agents yet</h3>
            <p className="text-sm text-muted-foreground/70 mt-1">
              Sub-agents will appear here when Nix spawns background tasks
            </p>
          </div>
        )}
      </div>
    </div>
    </Shell>
  );
}
