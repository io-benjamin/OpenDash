"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Video, CreditCard, Cpu, Sparkles, TrendingUp } from "lucide-react";

interface ContentIdea {
  id: string;
  title: string;
  category: "finance" | "credit-cards" | "tech" | "lifestyle";
  platform: "TikTok" | "YouTube" | "Both";
  priority: "high" | "medium" | "low";
}

const ideas: ContentIdea[] = [
  {
    id: "1",
    title: "How I built an AI that reads my emails",
    category: "tech",
    platform: "TikTok",
    priority: "high",
  },
  {
    id: "2",
    title: "Credit card stacking strategy for beginners",
    category: "credit-cards",
    platform: "TikTok",
    priority: "high",
  },
  {
    id: "3",
    title: "3x leveraged ETFs explained in 60 seconds",
    category: "finance",
    platform: "TikTok",
    priority: "medium",
  },
  {
    id: "4",
    title: "My morning routine as a solo builder",
    category: "lifestyle",
    platform: "Both",
    priority: "low",
  },
  {
    id: "5",
    title: "Why I'm bullish on robotics stocks",
    category: "finance",
    platform: "TikTok",
    priority: "medium",
  },
];

function getCategoryIcon(category: ContentIdea["category"]) {
  switch (category) {
    case "finance":
      return <TrendingUp className="h-3 w-3" />;
    case "credit-cards":
      return <CreditCard className="h-3 w-3" />;
    case "tech":
      return <Cpu className="h-3 w-3" />;
    case "lifestyle":
      return <Sparkles className="h-3 w-3" />;
  }
}

function getCategoryStyle(category: ContentIdea["category"]) {
  switch (category) {
    case "finance":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "credit-cards":
      return "bg-violet-500/20 text-violet-400 border-violet-500/30";
    case "tech":
      return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30";
    case "lifestyle":
      return "bg-pink-500/20 text-pink-400 border-pink-500/30";
  }
}

function getPriorityDot(priority: ContentIdea["priority"]) {
  switch (priority) {
    case "high":
      return "bg-red-400";
    case "medium":
      return "bg-amber-400";
    case "low":
      return "bg-slate-400";
  }
}

export function ContentIdeas() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Video className="h-4 w-4 text-pink-400" />
              Content Ideas
            </CardTitle>
            <CardDescription>TikTok & YouTube pipeline</CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            {ideas.length} Ideas
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[220px] pr-4">
          <div className="space-y-2">
            {ideas.map((idea) => (
              <div
                key={idea.id}
                className="group flex items-start gap-3 rounded-lg border border-border/30 bg-background/30 p-3 transition-all hover:border-border/50 hover:bg-background/50"
              >
                <div className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${getPriorityDot(idea.priority)}`} />
                <div className="flex-1 min-w-0 space-y-2">
                  <p className="text-sm text-foreground/90 leading-snug">
                    {idea.title}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge className={`${getCategoryStyle(idea.category)} text-xs flex items-center gap-1`}>
                      {getCategoryIcon(idea.category)}
                      {idea.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {idea.platform}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
