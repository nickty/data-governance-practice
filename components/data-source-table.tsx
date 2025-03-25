"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Database, Edit, Trash } from "lucide-react"

export default function DataSourceTable() {
  const dataSources = [
    {
      id: 1,
      name: "Production Database",
      type: "Oracle",
      status: "Connected",
      lastScan: "2023-10-15",
      owner: "Production Team",
    },
    {
      id: 2,
      name: "Well Data Warehouse",
      type: "Snowflake",
      status: "Connected",
      lastScan: "2023-10-14",
      owner: "Data Engineering",
    },
    {
      id: 3,
      name: "Reservoir Management System",
      type: "SQL Server",
      status: "Connected",
      lastScan: "2023-10-13",
      owner: "Reservoir Team",
    },
    {
      id: 4,
      name: "Drilling Operations DB",
      type: "PostgreSQL",
      status: "Disconnected",
      lastScan: "2023-10-10",
      owner: "Drilling Team",
    },
    {
      id: 5,
      name: "Compliance Data Lake",
      type: "Hadoop",
      status: "Connected",
      lastScan: "2023-10-12",
      owner: "Compliance Team",
    },
  ]

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Last Scan</TableHead>
          <TableHead>Owner</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataSources.map((source) => (
          <TableRow key={source.id}>
            <TableCell className="font-medium">{source.name}</TableCell>
            <TableCell>{source.type}</TableCell>
            <TableCell>
              <Badge variant={source.status === "Connected" ? "default" : "destructive"}>{source.status}</Badge>
            </TableCell>
            <TableCell>{source.lastScan}</TableCell>
            <TableCell>{source.owner}</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-2">
                <Button variant="ghost" size="icon">
                  <Database className="h-4 w-4" />
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
  )
}

