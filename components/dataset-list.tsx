"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileSpreadsheet, BarChart3, GitBranch } from "lucide-react"

export default function DatasetList() {
  const datasets = [
    {
      id: 1,
      name: "Well Production Data",
      source: "Production Database",
      tables: 12,
      columns: 156,
      domain: "Production",
      quality: "High",
    },
    {
      id: 2,
      name: "Reservoir Characteristics",
      source: "Reservoir Management System",
      tables: 8,
      columns: 94,
      domain: "Reservoir",
      quality: "Medium",
    },
    {
      id: 3,
      name: "Drilling Operations",
      source: "Drilling Operations DB",
      tables: 15,
      columns: 203,
      domain: "Drilling",
      quality: "High",
    },
    {
      id: 4,
      name: "Compliance Reports",
      source: "Compliance Data Lake",
      tables: 6,
      columns: 78,
      domain: "Compliance",
      quality: "Medium",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {datasets.map((dataset) => (
        <Card key={dataset.id}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">{dataset.name}</CardTitle>
              <Badge>{dataset.domain}</Badge>
            </div>
            <CardDescription>{dataset.source}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-muted-foreground">Tables:</span> {dataset.tables}
              </div>
              <div>
                <span className="text-muted-foreground">Columns:</span> {dataset.columns}
              </div>
              <div>
                <span className="text-muted-foreground">Quality:</span>{" "}
                <Badge variant={dataset.quality === "High" ? "default" : "outline"}>{dataset.quality}</Badge>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              <FileSpreadsheet className="mr-2 h-4 w-4" />
              View Schema
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Profile
              </Button>
              <Button variant="outline" size="sm">
                <GitBranch className="mr-2 h-4 w-4" />
                Lineage
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

