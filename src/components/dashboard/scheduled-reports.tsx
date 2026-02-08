"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, CheckCircle2 } from "lucide-react";

interface Schedule {
  name: string;
  time: string;
  days: string;
  active: boolean;
  description: string;
}

const schedules: Schedule[] = [
  {
    name: "Morning Briefing",
    time: "7:00 AM EST",
    days: "Mon-Fri",
    active: true,
    description: "Daily market overview, calendar, and priorities",
  },
  {
    name: "Weekend Summary",
    time: "9:00 AM EST",
    days: "Sunday",
    active: true,
    description: "Weekly recap and planning for the week ahead",
  },
];

export function ScheduledReports() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-400" />
              Scheduled Reports
            </CardTitle>
            <CardDescription>Automated briefings</CardDescription>
          </div>
          <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 text-xs">
            <CheckCircle2 className="h-3 w-3 mr-1" />
            Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {schedules.map((schedule) => (
          <div
            key={schedule.name}
            className="flex items-start gap-3 rounded-lg border border-border/30 bg-background/30 p-3"
          >
            <div className="mt-0.5 rounded-full bg-cyan-500/10 p-2">
              <Clock className="h-3.5 w-3.5 text-cyan-400" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">{schedule.name}</h4>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono text-muted-foreground">
                    {schedule.time}
                  </span>
                  <Badge variant="outline" className="text-xs px-1.5 py-0">
                    {schedule.days}
                  </Badge>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                {schedule.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
