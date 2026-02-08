"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Pin } from "lucide-react";

interface Note {
  id: string;
  content: string;
  category: "decision" | "insight" | "reminder";
  pinned?: boolean;
  date: string;
}

const notes: Note[] = [
  {
    id: "1",
    content: "Focus on building in public — share progress on TikTok and Twitter",
    category: "decision",
    pinned: true,
    date: "Feb 2025",
  },
  {
    id: "2",
    content: "TQQQ strategy: Hold through volatility, trim on 20%+ gains",
    category: "insight",
    date: "Feb 2025",
  },
  {
    id: "3",
    content: "Vera AI MVP should focus on personal automation first",
    category: "decision",
    date: "Jan 2025",
  },
  {
    id: "4",
    content: "Research tokenization regulations before building platform",
    category: "reminder",
    date: "Jan 2025",
  },
];

function getCategoryStyle(category: Note["category"]) {
  switch (category) {
    case "decision":
      return "bg-emerald-500/10 text-emerald-400";
    case "insight":
      return "bg-blue-500/10 text-blue-400";
    case "reminder":
      return "bg-amber-500/10 text-amber-400";
  }
}

export function NotesMemory() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Brain className="h-4 w-4 text-fuchsia-400" />
              Memory
            </CardTitle>
            <CardDescription>Key decisions & notes</CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            {notes.length} Notes
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-3">
            {notes.map((note) => (
              <div
                key={note.id}
                className="rounded-lg border border-border/30 bg-background/30 p-3 space-y-2"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {note.content}
                  </p>
                  {note.pinned && (
                    <Pin className="h-3 w-3 text-muted-foreground shrink-0 mt-0.5" />
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryStyle(note.category)}`}>
                    {note.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{note.date}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}
