"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Lightbulb, Code, ExternalLink, Globe } from "lucide-react";

interface Project {
  name: string;
  description: string;
  status: "live" | "mvp" | "idea" | "building";
  github?: string;
  link?: string;
  tags: string[];
  autonomous?: boolean;
}

const projects: Project[] = [
  {
    name: "Family Prompts",
    description: "Open source API & widget for daily family conversation prompts. 370+ prompts, free forever.",
    status: "live",
    github: "https://github.com/io-benjamin/family-prompts",
    link: "https://io-benjamin.github.io/family-prompts",
    tags: ["Open Source", "API", "Widget"],
    autonomous: true,
  },
  {
    name: "Vera AI",
    description: "Personal AI assistant framework",
    status: "mvp",
    github: "https://github.com/io-benjamin/vera",
    tags: ["AI", "TypeScript"],
  },
  {
    name: "OpenDash",
    description: "Personal command center dashboard",
    status: "live",
    github: "https://github.com/io-benjamin/OpenDash",
    link: "https://io-benjamin.github.io/OpenDash",
    tags: ["Dashboard", "Next.js"],
  },
  {
    name: "Family Circle",
    description: "Link-based family connection app. Daily prompts, photo responses, reactions, streaks. Grandma-proof.",
    status: "mvp",
    github: "https://github.com/io-benjamin/family-app",
    tags: ["PWA", "Supabase", "Realtime"],
  },
  {
    name: "KitchenSync",
    description: "Restaurant inventory management. Connects to Clover/Toast POS, tracks stock, reduces waste.",
    status: "building",
    github: "https://github.com/io-benjamin/kitchen-sync",
    tags: ["B2B", "SaaS", "API"],
  },
  {
    name: "Crypto Tokenization Platform",
    description: "Asset tokenization on blockchain",
    status: "idea",
    tags: ["Web3", "DeFi"],
  },
];

function getStatusConfig(status: Project["status"]) {
  switch (status) {
    case "live":
      return {
        label: "Live",
        icon: <Globe className="h-3.5 w-3.5" />,
        className: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      };
    case "mvp":
      return {
        label: "MVP",
        icon: <Rocket className="h-3.5 w-3.5" />,
        className: "bg-violet-500/20 text-violet-400 border-violet-500/30",
      };
    case "building":
      return {
        label: "Building",
        icon: <Code className="h-3.5 w-3.5" />,
        className: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
      };
    case "idea":
      return {
        label: "Idea",
        icon: <Lightbulb className="h-3.5 w-3.5" />,
        className: "bg-amber-500/20 text-amber-400 border-amber-500/30",
      };
  }
}

export function ProjectsBoard() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-violet-500" />
              Projects
            </CardTitle>
            <CardDescription>Active builds & ideas</CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            {projects.length} Projects
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-3">
          {projects.map((project) => {
            const statusConfig = getStatusConfig(project.status);
            return (
              <div
                key={project.name}
                className="group relative rounded-lg border border-border/50 bg-background/50 p-4 transition-all hover:border-border hover:bg-background/80"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <Badge className={`${statusConfig.className} text-xs flex items-center gap-1`}>
                      {statusConfig.icon}
                      {statusConfig.label}
                    </Badge>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{project.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
