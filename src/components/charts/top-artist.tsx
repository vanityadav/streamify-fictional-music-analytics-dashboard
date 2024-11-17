"use client";

import Image from "next/image";
import { formatPlays } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  mostStreamedArtist,
  mostStreamedArtistData,
} from "@/components/recent-streams-table/table.dto";

export function TopArtist() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Image
          src={"/top-artist.jpg"}
          alt={mostStreamedArtist}
          width={100}
          height={100}
          className="rounded-full h-[100px] w-[100px] object-cover object-center"
        />
        <div>
          <CardTitle>{mostStreamedArtist}</CardTitle>
          <CardDescription>Top Artist</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {mostStreamedArtistData?.slice(0, 5).map((song, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <span>{index + 1}.</span>
              <span>{song.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">
              {formatPlays(song.stream_count)}
            </span>
          </div>
        ))}
      </CardContent>

      <CardFooter>
        <Button className="w-full mt-6">View More</Button>
      </CardFooter>
    </Card>
  );
}
