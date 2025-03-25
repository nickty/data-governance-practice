"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProfilerDashboard() {
  const datasets = [
    {
      id: 1,
      name: "Well Production Data",
      completeness: 98,
      accuracy: 95,
      consistency: 92,
      timeliness: 97,
      uniqueness: 100,
    },
    {
      id: 2,
      name: "Reservoir Characteristics",
      completeness: 85,
      accuracy: 88,
      consistency: 90,
      timeliness: 82,
      uniqueness: 95,
    },
    {
      id: 3,
      name: "Drilling Operations",
      completeness: 92,
      accuracy: 94,
      consistency: 89,
      timeliness: 96,
      uniqueness: 98,
    },
  ]

  const getQualityBadge = (value) => {
    if (value >= 90) return <Badge className="ml-2">High</Badge>
    if (value >= 80)
      return (
        <Badge variant="outline" className="ml-2">
          Medium
        </Badge>
      )
    return (
      <Badge variant="destructive" className="ml-2">
        Low
      </Badge>
    )
  }

  return (
    <Tabs defaultValue="well-production">
      <TabsList className="mb-4">
        {datasets.map((dataset) => (
          <TabsTrigger key={dataset.id} value={`dataset-${dataset.id}`}>
            {dataset.name}
          </TabsTrigger>
        ))}
      </TabsList>

      {datasets.map((dataset) => (
        <TabsContent key={dataset.id} value={`dataset-${dataset.id}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Data Quality Metrics</CardTitle>
                <CardDescription>Overall quality assessment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Completeness</span>
                      <span className="text-sm text-muted-foreground">{dataset.completeness}%</span>
                    </div>
                    <Progress value={dataset.completeness} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Accuracy</span>
                      <span className="text-sm text-muted-foreground">{dataset.accuracy}%</span>
                    </div>
                    <Progress value={dataset.accuracy} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Consistency</span>
                      <span className="text-sm text-muted-foreground">{dataset.consistency}%</span>
                    </div>
                    <Progress value={dataset.consistency} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Timeliness</span>
                      <span className="text-sm text-muted-foreground">{dataset.timeliness}%</span>
                    </div>
                    <Progress value={dataset.timeliness} />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Uniqueness</span>
                      <span className="text-sm text-muted-foreground">{dataset.uniqueness}%</span>
                    </div>
                    <Progress value={dataset.uniqueness} />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Quality Summary</CardTitle>
                <CardDescription>Quality assessment summary</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Overall Quality</span>
                    <span>
                      {Math.round(
                        (dataset.completeness +
                          dataset.accuracy +
                          dataset.consistency +
                          dataset.timeliness +
                          dataset.uniqueness) /
                          5,
                      )}
                      %
                      {getQualityBadge(
                        Math.round(
                          (dataset.completeness +
                            dataset.accuracy +
                            dataset.consistency +
                            dataset.timeliness +
                            dataset.uniqueness) /
                            5,
                        ),
                      )}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Quality Issues</h4>
                    <ul className="space-y-2 text-sm">
                      {dataset.completeness < 90 && (
                        <li className="text-muted-foreground">Missing values in key fields</li>
                      )}
                      {dataset.accuracy < 90 && (
                        <li className="text-muted-foreground">Data accuracy issues in measurement fields</li>
                      )}
                      {dataset.consistency < 90 && (
                        <li className="text-muted-foreground">Inconsistent formatting across records</li>
                      )}
                      {dataset.timeliness < 90 && (
                        <li className="text-muted-foreground">Data freshness issues in operational data</li>
                      )}
                      {dataset.uniqueness < 90 && <li className="text-muted-foreground">Duplicate records detected</li>}
                      {dataset.completeness >= 90 &&
                        dataset.accuracy >= 90 &&
                        dataset.consistency >= 90 &&
                        dataset.timeliness >= 90 &&
                        dataset.uniqueness >= 90 && (
                          <li className="text-muted-foreground">No major quality issues detected</li>
                        )}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}

