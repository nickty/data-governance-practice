"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash, Play } from "lucide-react"

export default function QualityRules() {
  const rules = [
    {
      id: 1,
      name: "Well ID Format Check",
      dataset: "Well Production Data",
      type: "Format Validation",
      status: "Active",
      lastRun: "2023-10-15",
    },
    {
      id: 2,
      name: "Production Volume Range Check",
      dataset: "Well Production Data",
      type: "Range Validation",
      status: "Active",
      lastRun: "2023-10-15",
    },
    {
      id: 3,
      name: "Reservoir Pressure Consistency",
      dataset: "Reservoir Characteristics",
      type: "Consistency Check",
      status: "Active",
      lastRun: "2023-10-14",
    },
    {
      id: 4,
      name: "Drilling Depth Validation",
      dataset: "Drilling Operations",
      type: "Range Validation",
      status: "Inactive",
      lastRun: "2023-10-10",
    },
    {
      id: 5,
      name: "Compliance Report Completeness",
      dataset: "Compliance Reports",
      type: "Completeness Check",
      status: "Active",
      lastRun: "2023-10-12",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>Add Quality Rule</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rule Name</TableHead>
            <TableHead>Dataset</TableHead>
            <TableHead>Rule Type</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Run</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rules.map((rule) => (
            <TableRow key={rule.id}>
              <TableCell className="font-medium">{rule.name}</TableCell>
              <TableCell>{rule.dataset}</TableCell>
              <TableCell>{rule.type}</TableCell>
              <TableCell>
                <Badge variant={rule.status === "Active" ? "default" : "outline"}>{rule.status}</Badge>
              </TableCell>
              <TableCell>{rule.lastRun}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

