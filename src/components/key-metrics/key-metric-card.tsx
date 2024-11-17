import { ForwardRefExoticComponent, RefAttributes } from "react";

import { LucideProps } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type KeyMetricsCardProps = {
  title: string;
  descriptions: string;
  value: number;
  children: React.ReactNode;
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export function KeyMetricsCard({
  title,
  descriptions,
  Icon,
  value,
  children,
}: KeyMetricsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              className="h-4 w-4 text-muted-foreground"
              aria-label={title}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>{descriptions}</p>
          </TooltipContent>
        </Tooltip>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value.toLocaleString()}</div>
        {children}
      </CardContent>
    </Card>
  );
}
