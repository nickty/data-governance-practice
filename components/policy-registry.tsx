"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Edit, Trash, FileText, Eye } from "lucide-react"

export default function PolicyRegistry() {
  const policies = [
    {
      id: 1,
      name: "Data Classification Policy",
      domain: "All Data",
      status: "Active",
      owner: "Information Security",
      lastUpdated: "2023-09-15",
    },
    {
      id: 2,
      name: "Production Data Quality Standards",
      domain: "Production",
      status: "Active",
      owner: "Production Team",
      lastUpdated: "2023-08-22",
    },
    {
      id: 3,
      name: "Reservoir Data Retention Policy",
      domain: "Reservoir",
      status: "Draft",
      owner: "Reservoir Team",
      lastUpdated: "2023-10-05",
    },
    {
      id: 4,
      name: "Regulatory Reporting Standards",
      domain: "Compliance",
      status: "Active",
      owner: "Compliance Team",
      lastUpdated: "2023-07-30",
    },
    {
      id: 5,
      name: "Data Access Control Policy",
      domain: "All Data",
      status: "Active",
      owner: "Information Security",
      lastUpdated: "2023-09-10",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Create Policy
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Policy Name</TableHead>
            <TableHead>Domain</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Owner</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {policies.map((policy) => (
            <TableRow key={policy.id}>
              <TableCell className="font-medium">{policy.name}</TableCell>
              <TableCell>{policy.domain}</TableCell>
              <TableCell>
                <Badge variant={policy.status === "Active" ? "default" : "outline"}>{policy.status}</Badge>
              </TableCell>
              <TableCell>{policy.owner}</TableCell>
              <TableCell>{policy.lastUpdated}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button variant="ghost" size="icon">
                    <Eye className="h-4 w-4" />
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

