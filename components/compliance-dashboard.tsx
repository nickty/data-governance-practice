"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export default function ComplianceDashboard() {
  const complianceAreas = [
    {
      id: 1,
      name: "Data Classification",
      compliance: 92,
      status: "Compliant",
      issues: 2,
      lastAssessment: "2023-10-10",
    },
    {
      id: 2,
      name: "Data Quality",
      compliance: 85,
      status: "Partially Compliant",
      issues: 5,
      lastAssessment: "2023-10-12",
    },
    {
      id: 3,
      name: "Data Access Controls",
      compliance: 95,
      status: "Compliant",
      issues: 1,
      lastAssessment: "2023-10-08",
    },
    {
      id: 4,
      name: "Data Retention",
      compliance: 78,
      status: "Partially Compliant",
      issues: 7,
      lastAssessment: "2023-10-05",
    },
    {
      id: 5,
      name: "Regulatory Reporting",
      compliance: 98,
      status: "Compliant",
      issues: 0,
      lastAssessment: "2023-10-15",
    },
  ]

  const getStatusBadge = (status) => {
    if (status === "Compliant") return <Badge className="ml-2">Compliant</Badge>
    if (status === "Partially Compliant")
      return (
        <Badge variant="outline" className="ml-2">
          Partially Compliant
        </Badge>
      )
    return (
      <Badge variant="destructive" className="ml-2">
        Non-Compliant
      </Badge>
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Overall Compliance</CardTitle>
          <CardDescription>Compliance with data governance policies</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Compliance Score</span>
              <span className="text-sm text-muted-foreground">
                {Math.round(complianceAreas.reduce((acc, area) => acc + area.compliance, 0) / complianceAreas.length)}%
              </span>
            </div>
            <Progress
              value={Math.round(
                complianceAreas.reduce((acc, area) => acc + area.compliance, 0) / complianceAreas.length,
              )}
              className="h-2"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {complianceAreas.map((area) => (
          <Card key={area.id}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{area.name}</CardTitle>
                {getStatusBadge(area.status)}
              </div>
              <CardDescription>Last assessed: {area.lastAssessment}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Compliance Score</span>
                    <span className="text-sm text-muted-foreground">{area.compliance}%</span>
                  </div>
                  <Progress value={area.compliance} className="h-2" />
                </div>
                <div className="text-sm">
                  <span className="font-medium">Open Issues:</span> {area.issues}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

