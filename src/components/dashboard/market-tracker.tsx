"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Eye, Star } from "lucide-react";

interface Position {
  ticker: string;
  name: string;
  shares?: number;
  status: "position" | "watching" | "watchlist";
  notes?: string;
}

const positions: Position[] = [
  {
    ticker: "TQQQ",
    name: "ProShares UltraPro QQQ",
    shares: 24,
    status: "position",
    notes: "3x leveraged NASDAQ-100 ETF. High volatility play.",
  },
  {
    ticker: "CPNG",
    name: "Coupang Inc",
    status: "watching",
    notes: "Korean e-commerce giant. Watching for entry point.",
  },
  {
    ticker: "RR",
    name: "Richtech Robotics",
    status: "watchlist",
    notes: "Robotics automation play. Early stage research.",
  },
];

function getStatusBadge(status: Position["status"]) {
  switch (status) {
    case "position":
      return <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30">Position</Badge>;
    case "watching":
      return <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30">Watching</Badge>;
    case "watchlist":
      return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/30">Watchlist</Badge>;
  }
}

function getStatusIcon(status: Position["status"]) {
  switch (status) {
    case "position":
      return <TrendingUp className="h-4 w-4 text-emerald-400" />;
    case "watching":
      return <Eye className="h-4 w-4 text-amber-400" />;
    case "watchlist":
      return <Star className="h-4 w-4 text-blue-400" />;
  }
}

export function MarketTracker() {
  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg font-semibold flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              Market Tracker
            </CardTitle>
            <CardDescription>Positions & watchlist</CardDescription>
          </div>
          <Badge variant="outline" className="text-xs">
            {positions.filter(p => p.status === "position").length} Active
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {positions.map((position, index) => (
          <div key={position.ticker}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5">
                  {getStatusIcon(position.status)}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-semibold text-foreground">
                      {position.ticker}
                    </span>
                    {getStatusBadge(position.status)}
                    {position.shares && (
                      <span className="text-xs text-muted-foreground">
                        {position.shares} shares
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{position.name}</p>
                  {position.notes && (
                    <p className="text-xs text-muted-foreground/80 mt-2 pl-0 border-l-2 border-border/50 pl-2">
                      {position.notes}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {index < positions.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
